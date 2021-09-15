package io.backend.controller;

import io.backend.api.MotoBackendDTO;
import io.backend.model.MotoEntity;
import io.backend.model.UserEntity;
import io.backend.service.MotoService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@Getter
@Setter
@CrossOrigin
@RestController
@RequestMapping("/api/moto")
public class MotoController extends ControllerMapper{

    private final MotoService motoService;

    @Autowired
    public MotoController(MotoService motoService) {
        this.motoService = motoService;
    }

    @GetMapping("/getmoto")
    public ResponseEntity<List<MotoBackendDTO>> getUserMotorcycles(@AuthenticationPrincipal UserEntity authUser) {
        List<MotoEntity> motoList = motoService.getAllMotosByUserID(authUser);

        List<MotoBackendDTO> motoBackendDTO = mapMotos(motoList);

        return ok(motoBackendDTO);
    }
}
