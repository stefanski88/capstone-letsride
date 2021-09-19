package io.backend.controller;

import io.backend.api.MeetingDTO;
import io.backend.api.UserBackendDTO;
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
import java.util.Optional;

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

    @GetMapping("/getAllReceivedInvites")
    public ResponseEntity<List<MeetingDTO>> getAllUserReceivedInvites(@AuthenticationPrincipal UserEntity authUser) {
        List<MeetingEntity> meetingEntityList = meetingService.getAllReceivedInvites(authUser);

        List<MeetingDTO> meetingListDTO = mapAllMeetings(meetingEntityList);
        return ok(meetingListDTO);
    }

    @GetMapping("/getAllSentInvites")
    public ResponseEntity<List<MeetingDTO>> getAllUserSentInvites(@AuthenticationPrincipal UserEntity authUser) {
        List<MeetingEntity> meetingEntityList = meetingService.getAllSentInvites(authUser);

        List<MeetingDTO> meetingListDTO = mapAllMeetings(meetingEntityList);
        return ok(meetingListDTO);
    }

    @PostMapping("/createInvite")
    public ResponseEntity<MeetingDTO> createInvite(@AuthenticationPrincipal UserEntity authUser, @RequestBody MeetingDTO meetingDTO) {
        MeetingEntity createdMeetingEntity = meetingService.createInvite(authUser, meetingDTO);

        MeetingDTO createdMeetingDTO = mapCreatedMeeting(createdMeetingEntity);

        return ok(createdMeetingDTO);
    }




}
