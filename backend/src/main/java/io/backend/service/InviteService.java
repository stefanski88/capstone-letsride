package io.backend.service;

import io.backend.api.InviteDTO;
import io.backend.api.InviteUpdateDTO;
import io.backend.model.InviteEntity;
import io.backend.model.UserEntity;
import io.backend.repository.InviteRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Getter
@Setter
@Service
public class InviteService {

    private final InviteRepository inviteRepository;
    private final UserService userService;

    @Autowired
    public InviteService(InviteRepository inviteRepository, UserService userService) {
        this.inviteRepository = inviteRepository;
        this.userService = userService;
    }

    public Optional<UserEntity> getUser(UserEntity authUser) {
        Optional<UserEntity> userEntityOPT = userService.getUserByUserName(authUser.getUserName());
        if (userEntityOPT.isEmpty()) {
            throw new EntityNotFoundException("User not found! (custom)");
        }
        return null;
    }

    public List<InviteEntity> getAllReceivedInvites(UserEntity authUser) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<List<InviteEntity>> allReceivedMeetings = inviteRepository.findAllByReceiver(userEntity.get());

        if (allReceivedMeetings.isEmpty()) {
            throw new EntityNotFoundException(("no meetings found! (custom)"));
        }
        return allReceivedMeetings.get();
    }

    public List<InviteEntity> getAllSentInvites(UserEntity authUser) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<List<InviteEntity>> allSentMeetings = inviteRepository.findAllBySender(userEntity.get());

        if (allSentMeetings.isEmpty()) {
            throw new EntityNotFoundException(("no meetings found! (custom)"));
        }
        return allSentMeetings.get();
    }

    public InviteEntity createInvite(UserEntity authUser, InviteDTO inviteDTO) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<UserEntity> receiverEntity = userService.getUserByUserName(inviteDTO.getReceiver());

        if (userEntity.isEmpty() || receiverEntity.isEmpty()) {
            throw new EntityNotFoundException("Entity not found! (custom)");
        }
        InviteEntity inviteEntity = new InviteEntity();

        inviteEntity.setSender(userEntity.get());
        inviteEntity.setReceiver(receiverEntity.get());

        inviteRepository.save(inviteEntity);
        return inviteEntity;
    }

    public InviteEntity getInvite(UserEntity authUser, Long inviteID) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<InviteEntity> inviteEntity = inviteRepository.findByInviteID(inviteID);

        if (userEntity.isEmpty() || inviteEntity.isEmpty()) {
            throw new EntityNotFoundException("Entity not found! (custom)");
        }
/*
        if (!userEntity.get().getUserID().equals(inviteEntity.get().getReceiver().getUserID())) {
            throw new EntityNotFoundException("Invite not found..");
        }
 */
        return inviteEntity.get();
    }

    public InviteEntity deleteInvite(UserEntity authUser, Long inviteID) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<InviteEntity> inviteEntity = inviteRepository.findByInviteID(inviteID);

        if (!userEntity.get().getUserID().equals(inviteEntity.get().getSender().getUserID())) {
            throw new EntityNotFoundException("Invite not found..");
        }
        inviteRepository.delete(inviteEntity.get());

        return inviteEntity.get();
    }

    public List<InviteEntity> deleteAllUserSentAndReceivedInvites(UserEntity authUser) {
        List<InviteEntity> allReceivedInvitesOfAuthUser = getAllReceivedInvites(authUser);
        List<InviteEntity> allSentInvitesOfAuthUser = getAllSentInvites(authUser);
        //List<InviteEntity> allInvites = new ArrayList<InviteEntity>(allReceivedInvitesOfAuthUser);
        //allInvites.addAll(allSentInvitesOfAuthUser);

        List<InviteEntity> inviteEntitiesToDelete = new ArrayList<>();

        for (InviteEntity inviteEntity: allReceivedInvitesOfAuthUser) {
            InviteEntity receivedInviteToDelete = new InviteEntity();

            if (authUser.getUserName().equals(inviteEntity.getReceiver().getUserName())) {
                inviteEntitiesToDelete.add(receivedInviteToDelete);
            }
        }

        for (InviteEntity inviteEntity: allSentInvitesOfAuthUser) {
            InviteEntity sentInviteToDelete = new InviteEntity();

            if (authUser.getUserName().equals(inviteEntity.getSender().getUserName())) {
                inviteEntitiesToDelete.add(sentInviteToDelete);
            }
        }

        for (InviteEntity inviteEntity: inviteEntitiesToDelete) {
            inviteRepository.delete(inviteEntity);
        }

        return inviteEntitiesToDelete;
    }


    public InviteEntity updateInvite(UserEntity authUser, InviteUpdateDTO inviteUpdateDTO, Long inviteID) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        InviteEntity inviteEntity = getInvite(authUser, inviteID);
/*
        if (!userEntity.get().getUserID().equals(inviteEntity.getSender().getUserID())) {
            throw new EntityNotFoundException("you can't send a invite to yourself..");
        }
 */
        if (!inviteEntity.getInviteID().equals(inviteID)) {
            throw new EntityNotFoundException("Invite not found..");
        }
        if (inviteEntity.getStatus().equals("pending")) {
            if (inviteUpdateDTO.getStatus().equals("accept")) {
                inviteEntity.setStatus("accepted");
            } else {
                inviteEntity.setStatus("reject");
            }
        }
        inviteRepository.save(inviteEntity);
        return inviteEntity;
    }



        private InviteEntity mapMeetingDTO(InviteDTO inviteDTO) {
        InviteEntity inviteEntity = new InviteEntity();
        inviteEntity.setTimeStamp(inviteDTO.getTimeStamp());
        inviteEntity.setStatus(inviteDTO.getStatus());
        return inviteEntity;
    }





/*
    public MeetingEntity getMeeting(UserEntity authUser, Long meetingID) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        if (userEntity.isEmpty()) {
            throw new EntityNotFoundException("user doesn't exist! (custom)");
        }

        Optional<MeetingEntity> receivedMeeting = meetingRepository.findByReceivedInvite(userEntity.get());
        if (receivedMeeting.isEmpty()) {
            throw new EntityNotFoundException("you didn't receive any meetings! (custom");
        }

        Optional<MeetingEntity> sentMeeting = meetingRepository.findByReceivedInvite(userEntity.get());
        if (sentMeeting.isEmpty()) {
            throw new EntityNotFoundException("you didn't send any meetings! (custom");
        }

        MeetingEntity meetingEntity;

        if (receivedMeeting.get().getReceivedInvite().getUserID().equals(meetingID)) {
            return meetingEntity = receivedMeeting.get();
        } else {
            meetingEntity = receivedMeeting.get();
        }

        return receivedMeeting.get();
    }

 */
}
