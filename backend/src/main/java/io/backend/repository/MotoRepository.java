package io.backend.repository;

import io.backend.model.MotoEntity;
import io.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MotoRepository extends JpaRepository<MotoEntity, Long> {

    Optional<List<MotoEntity>> findAllByUserid(UserEntity userid);

    Optional<MotoEntity> findByMotoID(Long motoid);
}