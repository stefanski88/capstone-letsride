package io.backend.security;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix ="security.jwt")
public class JwtConfig {

    String secret;
    int expiresAfterMin;
}
