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

        inviteEntity.setStatus("pending");
        inviteEntity.setSender(userEntity.get());
        inviteEntity.setReceiver(receiverEntity.get());
        inviteEntity.setTimeStamp(inviteDTO.getTimeStamp());

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

        if (!inviteEntity.get().getInviteID().equals(inviteID)) {
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

        if (!inviteEntity.getInviteID().equals(inviteID)) {
            throw new EntityNotFoundException("Invite not found..");
        }
        if (inviteUpdateDTO.getStatus().equals("accepted")) {
            inviteEntity.setStatus("accepted");
        }
        inviteRepository.save(inviteEntity);
        return inviteEntity;
    }
}
