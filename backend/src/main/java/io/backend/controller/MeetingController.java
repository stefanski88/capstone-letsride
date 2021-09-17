package io.backend.controller;

import io.backend.api.MeetingDTO;
import io.backend.model.MeetingEntity;
import io.backend.model.UserEntity;
import io.backend.service.MeetingService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@Getter
@Setter
@CrossOrigin
@RestController
@RequestMapping("/api/meeting")
public class MeetingController extends ControllerMapper{

    private final MeetingService meetingService;

    @Autowired
    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    @GetMapping("/getMeetingFromUser/{fromUserID}")
    public ResponseEntity<List<MeetingDTO>> getAllUserMeetings(@AuthenticationPrincipal UserEntity authUser, @PathVariable Long fromUserID) {
        List<MeetingEntity> meetingEntityList = meetingService.getAllMeetings(authUser);

        List<MeetingDTO> meetingListDTO = mapAllMeetings(meetingEntityList);
        return ok(meetingListDTO);
    }

    @GetMapping("/getMeeting")
    public ResponseEntity<MeetingDTO> getMeeting(@AuthenticationPrincipal UserEntity authUser) {
        MeetingEntity meetingEntity = meetingService.getMeeting(authUser);

        return null;
    }

    @PostMapping("/createMeeting")
    public ResponseEntity<MeetingDTO> createMeeting(@AuthenticationPrincipal UserEntity authUser) {
        MeetingEntity meetingEntity = meetingService.createMeeting();

        return null;
    }
}
