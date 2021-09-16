package io.backend.service;

import io.backend.api.ResetPasswordDTO;
import io.backend.api.UpdatePasswordDTO;
import io.backend.api.UserUpdateDTO;
import io.backend.model.UserEntity;
import io.backend.repository.UserRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Getter
@Setter
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final PasswordService passwordService;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, PasswordService passwordService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordService = passwordService;
    }

    public Optional<UserEntity> getUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    private Optional<UserEntity> getUserByMail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<UserEntity> getUsers() {
        return userRepository.findAll();
    }

    public void checkIfUserEMailExists(String email) {
        Optional<UserEntity> existingUser = getUserByMail(email);
        if (existingUser.isPresent()) {
            throw new EntityExistsException("User with E-Mail " + email + " is already registered.");
        }
    }

    public UserEntity createUser(UserEntity userEntity) {
        checkIfUserEMailExists(userEntity.getEmail());

        String password = userEntity.getPassword();
        String hashedPassword = passwordEncoder.encode(password);

        UserEntity savedUser = userRepository.save(userEntity.toBuilder()
                .password(hashedPassword)
                .userRole("user")
                .build());
        return savedUser.toBuilder().password(password).build();
    }

    public Optional<UserEntity> deleteUser(UserEntity authUser) {
        Optional<UserEntity> userEntityOPT = userRepository.findByUserName(authUser.getUserName());
        if (userEntityOPT.isPresent()) {
            UserEntity userEntity = userEntityOPT.get();
            userRepository.delete(userEntity);
        }
        if (userEntityOPT.isEmpty())
        {
            throw new EntityNotFoundException("entity not found! (custom");
        }
        return userEntityOPT;
    }

    public UserEntity updateUser(UserUpdateDTO userUpdateDTO, UserEntity authUser) {

        Optional<UserEntity> userEntityOPT = userRepository.findByUserName(authUser.getUserName());

        if (userEntityOPT.isEmpty()) {
            throw new EntityNotFoundException("entity not found! (custom");
        }

        UserEntity foundUserEntity = userEntityOPT.get();
        UserEntity mappedUserEntity = mapUserUpdate(userUpdateDTO);

        if (mappedUserEntity.getUserID() == null) {
            mappedUserEntity.setUserID(foundUserEntity.getUserID());
        }
        if (mappedUserEntity.getUserRole() == null) {
            mappedUserEntity.setUserRole(foundUserEntity.getUserRole());
        }
        if (mappedUserEntity.getPassword() == null) {
            mappedUserEntity.setPassword(foundUserEntity.getPassword());
        }
        if (foundUserEntity.equals(mappedUserEntity)) {
            throw new IllegalArgumentException("there is nothing to change ....:)");
        }
        return userRepository.save(mappedUserEntity);
    }

    public UserEntity UpdateUserPassword(UserEntity authUser, UpdatePasswordDTO updatePasswordDTO) {
        Optional<UserEntity> userEntity = getUserByUserName(authUser.getUserName());

        String newPasswordFrontend = updatePasswordDTO.getNewPassword();
        String hashedNewPasswordFrontend = passwordEncoder.encode(newPasswordFrontend);

        userEntity.get().setPassword(hashedNewPasswordFrontend);
        return userRepository.save(userEntity.get());
    }

    public ResetPasswordDTO resetUserPassword(UserEntity authUser) {
        Optional<UserEntity> userEntity = userRepository.findByUserName(authUser.getUserName());
        if (userEntity.isEmpty()) {
            throw new EntityNotFoundException("Entity not found! (custom)");
        }
        String createdPassword = passwordService.createNewPassword();

        String hashedPassword = passwordEncoder.encode(createdPassword);
        userEntity.get().setPassword(hashedPassword);

        userRepository.save(userEntity.get());
        return ResetPasswordDTO.builder()
                .unhashedPasswordToUser(createdPassword).build();
    }



    private UserEntity mapUserUpdate(UserUpdateDTO userUpdateDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setUserName(userUpdateDTO.getUserName());
        userEntity.setEmail(userUpdateDTO.getEmail());
        userEntity.setFirstName(userUpdateDTO.getFirstName());
        userEntity.setLastName(userUpdateDTO.getLastName());
        userEntity.setAge(userUpdateDTO.getAge());
        userEntity.setLocation(userUpdateDTO.getLocation());
        userEntity.setDrivingExp(userUpdateDTO.getDrivingExp());
        userEntity.setDrivingStyle(userUpdateDTO.getDrivingStyle());
        userEntity.setAboutMe(userUpdateDTO.getAboutMe());
        return userEntity;
    }




}
