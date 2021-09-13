package io.backend.controller;

import io.backend.api.UserBackendDTO;
import io.backend.api.UserRegisterDTO;
import io.backend.model.UserEntity;
import io.backend.service.UserService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;

@Getter
@Setter
@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController extends ControllerMapper {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/getUser/{userName}")
    public ResponseEntity<UserBackendDTO> getUser(@PathVariable String userName) {
        Optional<UserEntity> userEntityOPT = userService.getUserByUserName(userName);
        if (userEntityOPT.isPresent()) {
            UserEntity searchedUserEntity = userEntityOPT.get();
            UserBackendDTO userBackendDTO = map(searchedUserEntity);
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
        List<UserBackendDTO> userBackendDTOList = map(userEntityList);
        return ok(userBackendDTOList);
    }

    @PostMapping("/reg")
    public ResponseEntity<UserRegisterDTO> createUser(@RequestBody UserRegisterDTO userRegisterDTO) {

        UserEntity userEntity = map(userRegisterDTO);
        UserEntity createdUserEntity = userService.createUser(userEntity);

        UserRegisterDTO createdUser = mapFr(createdUserEntity);
        createdUser.setPassword(createdUserEntity.getPassword());
        return ok(createdUser);
    }

    @DeleteMapping("/del")
    public ResponseEntity<UserBackendDTO> deleteUser(@AuthenticationPrincipal UserEntity authUser) {
        if (authUser.getUserRole().equals("admin")) {
            throw new IllegalArgumentException("admins and gods cannot die");
        }
        Optional<UserEntity> userEntityToDelete = userService.deleteUser(authUser);
        UserEntity userEntity = userEntityToDelete.get();
        UserBackendDTO userBackendDTO = map(userEntity);
        return ok(userBackendDTO);
    }

}
