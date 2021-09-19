package io.backend.service;

import io.backend.api.MeetingDTO;
import io.backend.api.UserBackendDTO;
import io.backend.model.MeetingEntity;
import io.backend.model.UserEntity;
import io.backend.repository.MeetingRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Getter
@Setter
@Service
public class MeetingService {

    private final MeetingRepository meetingRepository;
    private final UserService userService;

    @Autowired
    public MeetingService(MeetingRepository meetingRepository, UserService userService) {
        this.meetingRepository = meetingRepository;
        this.userService = userService;
    }

    public Optional<UserEntity> getUser(UserEntity authUser) {
        Optional<UserEntity> userEntityOPT = userService.getUserByUserName(authUser.getUserName());
        if (userEntityOPT.isEmpty()) {
            throw new EntityNotFoundException("User not found! (custom)");
        }
        return userEntityOPT;
    }

    public List<MeetingEntity> getAllReceivedInvites(UserEntity authUser) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<List<MeetingEntity>> allReceivedMeetings = meetingRepository.findAllByReceivedInvite(userEntity.get());

        if (allReceivedMeetings.isEmpty()) {
            throw new EntityNotFoundException(("no meetings found! (custom)"));
        }
        return allReceivedMeetings.get();
    }

    public List<MeetingEntity> getAllSentInvites(UserEntity authUser) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<List<MeetingEntity>> allSentMeetings = meetingRepository.findAllBySentInvite(userEntity.get());

        if (allSentMeetings.isEmpty()) {
            throw new EntityNotFoundException(("no meetings found! (custom)"));
        }
        return allSentMeetings.get();
    }


    public MeetingEntity createInvite(UserEntity authUser, MeetingDTO meetingDTO) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<UserEntity> receiverEntity = userService.getUserByUserName(meetingDTO.getReceivedInvite());

        if (userEntity.isEmpty() || receiverEntity.isEmpty()) {
            throw new EntityNotFoundException("Entity not found! (custom)");
        }
        MeetingEntity meetingEntity = new MeetingEntity();

        meetingEntity.setSentInvite(userEntity.get());
        meetingEntity.setReceivedInvite(receiverEntity.get());

        meetingRepository.save(meetingEntity);
        return meetingEntity;
    }



    private MeetingEntity mapMeetingDTO(MeetingDTO meetingDTO) {
        MeetingEntity meetingEntity = new MeetingEntity();
        meetingEntity.setTimeStamp(meetingDTO.getTimeStamp());
        meetingEntity.setStatus(meetingDTO.getStatus());
        return meetingEntity;
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
