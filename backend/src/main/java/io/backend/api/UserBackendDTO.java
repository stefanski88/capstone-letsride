package io.backend.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserBackendDTO {

    private String userName;
    private String password;
    private String userRole;
    private String eMail;
    private String firstName;
    private String lastName;
    private String age;
    private String location;
    private String drivingExp;
    private String drivingStyle;
    private String aboutMe;
}
