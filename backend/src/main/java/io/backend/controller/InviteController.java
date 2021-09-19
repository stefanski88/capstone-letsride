package io.backend.controller;

import io.backend.api.InviteDTO;
import io.backend.model.InviteEntity;
import io.backend.model.UserEntity;
import io.backend.service.InviteService;
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
@RequestMapping("/api/invite")
public class InviteController extends ControllerMapper{

    private final InviteService inviteService;

    @Autowired
    public InviteController(InviteService inviteService) {
        this.inviteService = inviteService;
    }

    @GetMapping("/getAllReceivedInvites")
    public ResponseEntity<List<InviteDTO>> getAllUserReceivedInvites(@AuthenticationPrincipal UserEntity authUser) {
        List<InviteEntity> inviteEntityList = inviteService.getAllReceivedInvites(authUser);

        List<InviteDTO> meetingListDTO = mapAllInvites(inviteEntityList);
        return ok(meetingListDTO);
    }

    @GetMapping("/getAllSentInvites")
    public ResponseEntity<List<InviteDTO>> getAllUserSentInvites(@AuthenticationPrincipal UserEntity authUser) {
        List<InviteEntity> inviteEntityList = inviteService.getAllSentInvites(authUser);

        List<InviteDTO> meetingListDTO = mapAllInvites(inviteEntityList);
        return ok(meetingListDTO);
    }

    @PostMapping("/createInvite")
    public ResponseEntity<InviteDTO> createInvite(@AuthenticationPrincipal UserEntity authUser, @RequestBody InviteDTO inviteDTO) {
        InviteEntity createdInviteEntity = inviteService.createInvite(authUser, inviteDTO);

        InviteDTO createdInviteDTO = mapCreatedInvite(createdInviteEntity);

        return ok(createdInviteDTO);
    }

    @GetMapping("/getInvite/{inviteID}")
    public ResponseEntity<InviteDTO> getInvite(@AuthenticationPrincipal UserEntity authUser, @PathVariable Long inviteID) {
        InviteEntity inviteEntity = inviteService.getInvite(authUser, inviteID);

        InviteDTO meeting = mapInviteToDTO(inviteEntity);
        return ok(meeting);
    }

    @DeleteMapping("/deleteInvite/{inviteID}")
    public ResponseEntity<InviteDTO> deleteInvite(@AuthenticationPrincipal UserEntity authUser, @PathVariable Long inviteID) {
        InviteEntity inviteEntity = inviteService.deleteInvite(authUser, inviteID);

        InviteDTO meeting = mapInviteToDTO(inviteEntity);
        return ok(meeting);
    }




}
