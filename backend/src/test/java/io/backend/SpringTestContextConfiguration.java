package io.backend;

import io.backend.config.JpaConfig;
import io.backend.service.UserService;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

import static org.mockito.Mockito.mock;

@EnableAutoConfiguration
@ComponentScan(basePackages = {"io.backend"})
@Import({JpaConfig.class})
@TestConfiguration
public class SpringTestContextConfiguration {

    public static final String MOCKED_SERVICES_PROFILE = "mockedUserService";

    @Primary
    @Bean(name = "dataSource", destroyMethod = "shutdown")
    public EmbeddedDatabase dataSource() {
        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .build();
    }

    @Primary
    @Bean
    @Profile(MOCKED_SERVICES_PROFILE)
    public UserService userService() {
        return mock(UserService.class);
    }
}