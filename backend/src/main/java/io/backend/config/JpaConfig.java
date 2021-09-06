package io.backend.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EntityScan(basePackages = {"io.backend.model"})
@EnableJpaRepositories(basePackages = {"io.backend.repository"})
@EnableTransactionManagement
public class JpaConfig {
}
