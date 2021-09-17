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
@Entity(name = "meetingTable")
@Table(name = "meeting_table")
public class MeetingEntity {

    @Id
    @GeneratedValue
    @Column(name = "meeting_id", nullable = false)
    private Long inviteID;

    @ManyToOne
    @JoinColumn(name = "from_user")
    private UserEntity fromUserID;

    @ManyToOne
    @JoinColumn(name = "to_user")
    private UserEntity toUserID;

    //status pending
    @Column(name = "status")
    private String status;

    @Column(name = "date")
    private Date date;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MeetingEntity that = (MeetingEntity) o;
        return Objects.equals(inviteID, that.inviteID) && Objects.equals(fromUserID, that.fromUserID) && Objects.equals(toUserID, that.toUserID) && Objects.equals(status, that.status) && Objects.equals(date, that.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(inviteID, fromUserID, toUserID, status, date);
    }
}
