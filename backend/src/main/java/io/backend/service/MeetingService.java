package io.backend.service;

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
