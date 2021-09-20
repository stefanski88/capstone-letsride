package io.backend.repository;

import io.backend.model.InviteEntity;
import io.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InviteRepository extends JpaRepository<InviteEntity, Long> {

    Optional<List<InviteEntity>> findAllByReceiver(UserEntity receiver);
    Optional<List<InviteEntity>> findAllBySender(UserEntity sender);
    Optional<InviteEntity> findByInviteID(Long inviteID);
}
