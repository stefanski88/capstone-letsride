package io.backend.controller;

import io.backend.api.*;
import io.backend.model.UserEntity;
import io.backend.repository.UserRepository;
import io.backend.service.PasswordService;
import io.backend.service.UserService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
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
    private final PasswordService passwordService;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, PasswordService passwordService, AuthenticationManager authenticationManager, UserRepository userRepository) {
        this.userService = userService;
        this.passwordService = passwordService;
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
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
        List<UserBackendDTO> userBackendDTOList = mapAllUsers(userEntityList);
        return ok(userBackendDTOList);
    }

    @PostMapping("/registerUser")
    public ResponseEntity<UserRegisterDTO> createUser(@RequestBody UserRegisterDTO userRegisterDTO) {

        UserEntity userEntity = map(userRegisterDTO);
        UserEntity createdUserEntity = userService.createUser(userEntity);

        UserRegisterDTO createdUser = mapUserRegister(createdUserEntity);
        createdUser.setPassword(createdUserEntity.getPassword());
        return ok(createdUser);
    }

    @DeleteMapping("/deleteUser")
    public ResponseEntity<UserBackendDTO> deleteUser(@AuthenticationPrincipal UserEntity authUser) {
        if (authUser.getUserRole().equals("admin")) {
            throw new IllegalArgumentException("admins and gods cannot die");
        }
        Optional<UserEntity> userEntityToDelete = userService.deleteUser(authUser);
        UserEntity userEntity = userEntityToDelete.get();
        UserBackendDTO userBackendDTO = map(userEntity);
        return ok(userBackendDTO);
    }

    @PutMapping("/updateUser")
    public ResponseEntity<UserUpdateDTO> updateUser(@AuthenticationPrincipal UserEntity authUser, @RequestBody UserUpdateDTO userUpdateDTO) {
        UserEntity userUpdateEntity = userService.updateUser(userUpdateDTO, authUser);

        userUpdateDTO = mapUpdatedUser(userUpdateEntity);

        return ok(userUpdateDTO);
    }

    @PutMapping("/updatePassword")
    public ResponseEntity<UpdatePasswordDTO> updateUserPassword(@AuthenticationPrincipal UserEntity authUser, @RequestBody UpdatePasswordDTO updatePasswordDTO) {

        String userName = authUser.getUserName();
        String password = updatePasswordDTO.getCurrentPassword();

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userName, password);
        try {
            authenticationManager.authenticate(authToken);
        }
        catch (AuthenticationException authEx) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
            UserEntity userEntity = userService.UpdateUserPassword(authUser, updatePasswordDTO);
            updatePasswordDTO = mapUpdatedPassword(userEntity);
            return ok(updatePasswordDTO);
    }

    @GetMapping("/resetPassword")
    public ResponseEntity<ResetPasswordDTO> resetUserPassword(@AuthenticationPrincipal UserEntity authUser) {

        ResetPasswordDTO resetPasswordDTO = userService.resetUserPassword(authUser);

        return ok(resetPasswordDTO);
    }
}
