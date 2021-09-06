package io.backend.controller;

import io.backend.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static io.backend.controller.UserController.USER_CONTROLLER_TAG;

@CrossOrigin
@RestController
@RequestMapping("/user")

@Tag(name = USER_CONTROLLER_TAG, description = "type in a description")
@Api(
        tags = (USER_CONTROLLER_TAG)
)

public class UserController {

    public static final String USER_CONTROLLER_TAG = "user";
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
}
