package io.backend.repository;

import io.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity>findByUserName(String username);

    Optional<UserEntity>findByEmail(String email);

    Optional<UserEntity>findByUserNameContains(String username);
}
