package io.backend.controller;

import io.backend.api.MotoBackendDTO;
import io.backend.api.MotoRegisterDTO;
import io.backend.model.MotoEntity;
import io.backend.model.UserEntity;
import io.backend.service.MotoService;
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
@RequestMapping("/api/moto")
public class MotoController extends ControllerMapper{

    private final MotoService motoService;

    @Autowired
    public MotoController(MotoService motoService) {
        this.motoService = motoService;
    }

    @GetMapping("/getAllMotos")
    public ResponseEntity<List<MotoBackendDTO>> getUserMotorcycles(@AuthenticationPrincipal UserEntity authUser) {
        List<MotoEntity> motoList = motoService.getAllMotosByUserID(authUser);

        List<MotoBackendDTO> motoBackendDTO = mapMotos(motoList);

        return ok(motoBackendDTO);
    }

    @GetMapping("/getMotoByMotoID/{motoID}")
    public ResponseEntity<MotoBackendDTO> getMotoByMotoID(@AuthenticationPrincipal UserEntity authUser, @PathVariable Long motoID) {
        MotoEntity motoEntity = motoService.getMotoByMotoID(authUser, motoID);

        MotoBackendDTO motoBackendDTO = mapMotoToDTO(motoEntity);
        return ok(motoBackendDTO);
    }

    @DeleteMapping("/deleteMoto/{motoID}")
    public ResponseEntity<MotoBackendDTO> deleteMotoByMotoID(@AuthenticationPrincipal UserEntity authUser, @PathVariable Long motoID) {
        MotoEntity motoEntity = motoService.deleteMotoByID(authUser, motoID);

        MotoBackendDTO motoBackendDTO = mapMotoToDTO(motoEntity);
        return ok(motoBackendDTO);
    }

    @PostMapping("")
    public ResponseEntity<MotoBackendDTO> addMoto(@AuthenticationPrincipal UserEntity authUser, @RequestBody MotoRegisterDTO motoRegisterDTO) {


        return null;
    }
}
