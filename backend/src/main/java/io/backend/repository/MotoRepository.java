package io.backend.repository;

import io.backend.model.MotoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MotoRepository extends JpaRepository<MotoEntity, Long> {
}
