package io.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "user_table")
@Data
@AllArgsConstructor
@NoArgsConstructor
//fehlt noch builder und ggf. beide Konsturuktoren
public class UserEntity {

    //fehlt noch @OneToMany Motorcycles

    @Id
    @GeneratedValue
    @Column(name = "user_id", nullable = false)
    private String userID;

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
    private int drivingExp;

    @Column(name ="driving_style", nullable = false)
    private String drivingStyle;

    @Column(name = "about_me")
    private String aboutMe;
}
