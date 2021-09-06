package io.backend.repository;

import io.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
  /*
    Optional<UserEntity> findByName(String name);

    Optional<UserEntity> findByContains(String name);
    */
}
