package io.backend.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDTO {

    @ApiModelProperty(required = true)
    private String userName;
    private String password;
    private String userRole;
    private String eMail;
    private String firstName;
    private String lastName;
    private int age;
    private String location;
    private String drivingExp;
    private String drivingStyle;
    private String aboutMe;
}
