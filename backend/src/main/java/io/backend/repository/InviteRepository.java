package io.backend.repository;

import io.backend.model.InviteEntity;
import io.backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InviteRepository extends JpaRepository<InviteEntity, Long> {

    Optional<List<InviteEntity>> findAllByReceivedInvite(UserEntity receivedInvite);
    Optional<List<InviteEntity>> findAllBySentInvite(UserEntity sentInvite);
    Optional<InviteEntity> findByInviteID(Long inviteID);
}
