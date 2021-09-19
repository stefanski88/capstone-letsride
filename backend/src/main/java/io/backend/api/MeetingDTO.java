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
public class MeetingDTO {

    private String inviteID;
    private String receivedInvite;
    private String sentInvite;
    private String status;
    private Date timeStamp;
}
