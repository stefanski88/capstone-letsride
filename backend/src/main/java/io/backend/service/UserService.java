package io.backend.service;

import io.backend.api.UserDTO;
import io.backend.model.UserEntity;
import io.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<UserEntity> getUser(String userName) {
        return userRepository.findByUserName(userName);
    }

    public List<UserEntity> getUsers() {
        return userRepository.findAll();
    }
}
