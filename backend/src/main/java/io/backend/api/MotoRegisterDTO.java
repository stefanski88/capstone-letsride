package io.backend.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MotoRegisterDTO {

    private String motoNickName;
    private String manufacturer;
    private String model;
    private String constructionYear;
}
