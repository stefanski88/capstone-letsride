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
    @JoinColumn(name = "user_id")
    private UserEntity userid;

    @Column(name = "sent_invite_id")
    private String sentInviteID;

    @Column(name = "received_invite_ID")
    private String receivedInviteID;

    @Column(name = "decision")
    private String decision;

    @Column(name = "date")
    private Date date;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InviteEntity that = (InviteEntity) o;
        return Objects.equals(inviteID, that.inviteID) && Objects.equals(userid, that.userid) && Objects.equals(sentInviteID, that.sentInviteID) && Objects.equals(receivedInviteID, that.receivedInviteID) && Objects.equals(decision, that.decision) && Objects.equals(date, that.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(inviteID, userid, sentInviteID, receivedInviteID, decision, date);
    }
}
