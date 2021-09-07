package io.backend.controller;

import io.backend.api.UserDTO;
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
    public ResponseEntity<UserDTO> getUser(@PathVariable String userName) {
        Optional<UserEntity> userEntityOPT = userService.getUser(userName);
        if (userEntityOPT.isPresent()) {
            UserEntity userEntity = userEntityOPT.get();
            UserDTO userDTO = mapperService.map(userEntity);
            return ok(userDTO);
        }
        return notFound().build();
    }

    @GetMapping("/getUsers")
    public ResponseEntity<List<UserDTO>> getUsers() {
        List<UserEntity> userEntityList = userService.getUsers();
        if (userEntityList.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        List<UserDTO> userDTOList = mapperService.map(userEntityList);
        return ok(userDTOList);
    }

    @GetMapping("/createUser")
    public ResponseEntity<UserDTO> createUser() {
        return null;
    }


    @PutMapping("/changePassword")
    public ResponseEntity<UserDTO> createUser(AuthenticationPrincipal authP) {
        return null;
    }



}
