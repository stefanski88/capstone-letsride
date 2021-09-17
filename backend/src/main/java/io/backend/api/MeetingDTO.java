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

    private String meetingID;
    private String fromUser;
    private String toUser;
    private String status;
    private Date date;
}
