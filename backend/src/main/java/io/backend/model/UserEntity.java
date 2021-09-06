package io.backend.model;

import lombok.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_table")
public class UserEntity {
/*
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private final Set<MotorcycleEntity> motoEntitySet = new HashSet<>():
*/
    @Id
    @GeneratedValue
    @Column(name = "user_id", nullable = false)
    private Long userID;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "user_role", nullable = false)
    private String userRole;

    @Column(name = "eMail_address", nullable = false)
    private String eMail;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "age", nullable = false)
    private int age;

    @Column(name = "location")
    private String location;

    @Column(name = "driving_experience", nullable = false)
    private String drivingExp;

    @Column(name ="driving_style", nullable = false)
    private String drivingStyle;

    @Column(name = "about_me")
    private String aboutMe;

/*
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        UserEntity that = (UserEntity) o;
        return this.getUserName() != null && this.getUserName().equals(that.getUserName());
    }

    @Override
    public int hashCode() {
        return getUserName().hashCode();
    }
 */
}
