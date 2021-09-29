package io.backend.model;

import lombok.*;

import javax.persistence.*;
import java.util.*;

@Getter
@Setter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "userTable")
@Table(name = "user_table")
public class UserEntity {

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER, mappedBy = "userid")
    private List<MotoEntity> motorcycles = new ArrayList<>();
    public void addMoto(MotoEntity motoEntity) {
        motorcycles.add(motoEntity);
    }

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "receiver")
    private List<InviteEntity> invites = new ArrayList<>();

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
    private String email;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "age", nullable = false)
    private String age;

    @Column(name = "location")
    private String location;

    @Column(name = "driving_experience", nullable = false)
    private String drivingExp;

    @Column(name ="driving_style", nullable = false)
    private String drivingStyle;

    @Column(name = "about_me")
    private String aboutMe;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity that = (UserEntity) o;
        return age == that.age && Objects.equals(motorcycles, that.motorcycles) && Objects.equals(userID, that.userID) && Objects.equals(userName, that.userName) && Objects.equals(password, that.password) && Objects.equals(userRole, that.userRole) && Objects.equals(email, that.email) && Objects.equals(firstName, that.firstName) && Objects.equals(lastName, that.lastName) && Objects.equals(location, that.location) && Objects.equals(drivingExp, that.drivingExp) && Objects.equals(drivingStyle, that.drivingStyle) && Objects.equals(aboutMe, that.aboutMe);
    }

    @Override
    public int hashCode() {
        return Objects.hash(motorcycles, userID, userName, password, userRole, email, firstName, lastName, age, location, drivingExp, drivingStyle, aboutMe);
    }
}
