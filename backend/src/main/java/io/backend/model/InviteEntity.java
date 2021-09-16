package io.backend.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

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
}
