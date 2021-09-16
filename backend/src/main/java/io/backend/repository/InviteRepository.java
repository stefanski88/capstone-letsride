package io.backend.repository;

import io.backend.model.InviteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InviteRepository extends JpaRepository<InviteEntity, Long> {
}
