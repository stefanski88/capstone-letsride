package io.backend.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "inviteTable")
@Table(name = "invite_table")
public class InviteEntity {

    @Id
    @GeneratedValue
    @Column(name = "invite_id", nullable = false)
    private Long inviteID;

    @ManyToOne
    @JoinColumn(name = "receiver")
    private UserEntity receiver;

    @ManyToOne
    @JoinColumn(name = "sender")
    private UserEntity sender;

    @Column(name = "status", nullable = false)
    private String status = "pending";

    @Column(name = "date")
    private Date timeStamp;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InviteEntity that = (InviteEntity) o;
        return Objects.equals(inviteID, that.inviteID) && Objects.equals(receiver, that.receiver) && Objects.equals(sender, that.sender) && Objects.equals(status, that.status) && Objects.equals(timeStamp, that.timeStamp);
    }

    @Override
    public int hashCode() {
        return Objects.hash(inviteID, receiver, sender, status, timeStamp);
    }
}
