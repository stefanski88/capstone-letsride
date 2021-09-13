package io.backend.service;

import io.backend.api.UserRegisterDTO;
import io.backend.model.UserEntity;
import io.backend.repository.UserRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
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

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
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
            throw new EntityNotFoundException("entität wurde nicht gefunden !!!");
        }
        return userEntityOPT;
    }
}
