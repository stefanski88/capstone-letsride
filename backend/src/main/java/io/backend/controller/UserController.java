package io.backend.controller;

import io.backend.api.MotoBackendDTO;
import io.backend.api.UserBackendDTO;
import io.backend.api.UserRegFrontendDTO;
import io.backend.model.UserEntity;
import io.backend.service.MapperService;
import io.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

    private final UserService userService;
    private final MapperService mapperService;

    @Autowired
    public UserController(UserService userService, MapperService mapperService) {
        this.userService = userService;
        this.mapperService = mapperService;
    }
    
    @GetMapping("/getUser/{userName}")
    public ResponseEntity<UserBackendDTO> getUser(@PathVariable String userName) {
        Optional<UserEntity> userEntityOPT = userService.getUser(userName);
        if (userEntityOPT.isPresent()) {
            UserEntity userEntity = userEntityOPT.get();
            UserBackendDTO userBackendDTO = mapperService.map(userEntity);
            return ok(userBackendDTO);
        }
        return notFound().build();
    }

    @GetMapping("/getUsers")
    public ResponseEntity<List<UserBackendDTO>> getUsers() {
        List<UserEntity> userEntityList = userService.getUsers();
        if (userEntityList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        List<UserBackendDTO> userBackendDTOList = mapperService.map(userEntityList);
        return ok(userBackendDTOList);
    }
/*
    @GetMapping("/registerUser")
    public ResponseEntity<UserRegFrontendDTO> registerUser(@AuthenticationPrincipal UserEntity authUser, @RequestBody UserRegFrontendDTO userRegFrontendDTO) {
        UserEntity userEntity = mapperService.map(userRegFrontendDTO);
    }
 */

    @PutMapping("/changePassword/{newPassword}")
    public ResponseEntity<UserBackendDTO> changePassword(@AuthenticationPrincipal UserEntity authUser, @RequestBody String newPassword) {
        String password = authUser.getPassword();
        return null;
    }


    @GetMapping("/api/{userName}/getMoto")
    public ResponseEntity<MotoBackendDTO> getMoto(@AuthenticationPrincipal UserEntity authUser, String userName) {
        return null;
    }

}
