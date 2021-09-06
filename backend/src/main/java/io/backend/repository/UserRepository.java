package io.backend.repository;

import io.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity>findByUserName(String username);

    Optional<UserEntity>findByUserNameContains(String username);
}
