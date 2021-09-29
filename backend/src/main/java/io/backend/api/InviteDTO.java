package io.backend.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class InviteDTO {

    private Long inviteID;
    private String receiver;
    private String sender;
    private String status;
    private String timeStamp;
    private String location;
}
