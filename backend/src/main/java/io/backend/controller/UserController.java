package io.backend.controller;

import io.backend.api.UserDTO;
import io.backend.model.UserEntity;
import io.backend.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import static io.backend.controller.UserController.USER_CONTROLLER_TAG;
import static javax.servlet.http.HttpServletResponse.SC_NOT_FOUND;
import static org.springframework.http.ResponseEntity.notFound;
import static org.springframework.http.ResponseEntity.ok;
import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

    public static final String USER_CONTROLLER_TAG = "user";
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/getUser/{userName}")
    public ResponseEntity<UserDTO> getUser(@PathVariable String userName) {
        Optional<UserEntity> userEntityOPT = userService.getUser(userName);
        if (userEntityOPT.isPresent()) {
            UserEntity userEntity = userEntityOPT.get();
            UserDTO userDTO = map(userEntity);
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
        List<UserDTO> userDTOList = map(userEntityList);
        return ok(userDTOList);
    }

    private UserDTO map(UserEntity userEntity) {
        return UserDTO.builder()
                .userName(userEntity.getUserName())
                .password(userEntity.getPassword())
                .userRole(userEntity.getUserRole())
                .eMail(userEntity.getEMail())
                .firstName(userEntity.getFirstName())
                .lastName(userEntity.getLastName())
                .age(userEntity.getAge())
                .location(userEntity.getLocation())
                .drivingExp(userEntity.getDrivingExp())
                .drivingStyle(userEntity.getDrivingStyle())
                .aboutMe(userEntity.getAboutMe())
                .build();
    }

    private UserEntity map(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setUserName(userDTO.getUserName());
        userEntity.setPassword(userDTO.getPassword());
        userEntity.setUserRole(userDTO.getUserRole());
        userEntity.setEMail(userDTO.getEMail());
        userEntity.setFirstName(userDTO.getFirstName());
        userEntity.setLastName(userDTO.getLastName());
        userEntity.setAge(userDTO.getAge());
        userEntity.setLocation(userDTO.getLocation());
        userEntity.setDrivingExp(userDTO.getDrivingExp());
        userEntity.setDrivingStyle(userDTO.getDrivingStyle());
        userEntity.setAboutMe(userDTO.getAboutMe());
        return userEntity;
    }

    private List<UserDTO> map(List<UserEntity> userEntityList) {
        List<UserDTO> userDTOList= new LinkedList<>();
        for (UserEntity userEntity: userEntityList) {
            UserDTO userDTO = map(userEntity);
            userDTOList.add(userDTO);
        }
        return userDTOList;
    }

}
