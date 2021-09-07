package io.backend.controller;

import io.backend.api.AccessToken;
import io.backend.api.Credentials;
import io.backend.api.UserDTO;
import io.backend.model.UserEntity;
import io.backend.service.JwtService;
import io.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@CrossOrigin
@RestController
public class AuthController {

    public static final String ACCESS_TOKEN_URL = "/auth/access_token";

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserService userService;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, JwtService jwtService, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userService = userService;
    }

    @PostMapping(ACCESS_TOKEN_URL)
    public ResponseEntity<AccessToken> getAccessToken(@RequestBody Credentials credentials){
        String userName = credentials.getUserName();
        String password = credentials.getPassword();

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userName, password);

        try {
            authenticationManager.authenticate(authToken);

            UserEntity userEntity = userService.getUser(userName).orElseThrow();
            String token = jwtService.createJwtToken(userEntity);

            AccessToken accessToken = new AccessToken(token);
            return ok(accessToken);
        } catch (AuthenticationException authEx) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/auth/me")
    public ResponseEntity<UserDTO> getLoggedInUser(@AuthenticationPrincipal UserEntity userEntity) {
        return ok(UserDTO.builder().userName(userEntity.getUserName()).build());
    }

}
