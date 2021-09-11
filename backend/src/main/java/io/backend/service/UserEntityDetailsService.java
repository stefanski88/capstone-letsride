package io.backend.service;

import io.backend.model.UserEntity;
import io.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserEntityDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    public UserEntityDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository
                .findByUserName(userName)
                .orElseThrow(() -> new UsernameNotFoundException("User " + userName + " not found!"));

        return User.builder()
                .username(userEntity.getUserName())
                .password(userEntity.getPassword())
                .authorities("user")
                .build();
    }

    public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository
                .findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User " + email + " not found!"));

        return User.builder()
                .username(userEntity.getEmail())
                .password(userEntity.getPassword())
                .authorities("user")
                .build();
    }
}
