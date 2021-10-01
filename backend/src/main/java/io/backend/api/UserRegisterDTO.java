package io.backend.api;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserRegisterDTO {

    private String userName;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String age;
    private String location;
    private String drivingExp;
    private String drivingStyle;
    private String aboutMe;
}
