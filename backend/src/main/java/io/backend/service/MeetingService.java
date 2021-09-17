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

    public List<MeetingEntity> getAllMeetings(UserEntity authUser) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<List<MeetingEntity>> allUserMeetings = meetingRepository.findAllByFromUser(userEntity.get());

        if (allUserMeetings.isEmpty()) {
            throw new EntityNotFoundException(("no meetings found! (custom)"));
        }
        return allUserMeetings.get();
    }

    public MeetingEntity getMeeting(UserEntity authUser) {

        return null;
    }

    public MeetingEntity createMeeting() {

        return null;
    }
}
