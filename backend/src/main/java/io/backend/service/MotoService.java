package io.backend.service;

import io.backend.model.MotoEntity;
import io.backend.model.UserEntity;
import io.backend.repository.MotoRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Getter
@Setter
@Service
public class MotoService {

    private final MotoRepository motoRepository;
    private final UserService userService;

    @Autowired
    public MotoService(MotoRepository motoRepository, UserService userService) {
        this.motoRepository = motoRepository;
        this.userService = userService;
    }
    public List<MotoEntity> getAllMotosByUserID(UserEntity authUser) {
        Optional<UserEntity> userEntity =  userService.getUserByUserName(authUser.getUserName());
        Optional<List<MotoEntity>> userAllMotorcyclesOPT = motoRepository.findAllByUserid(userEntity.get());

        if (userAllMotorcyclesOPT.isEmpty()) {
            throw new EntityNotFoundException("no motorcycles found! (custom)");
        }
        return userAllMotorcyclesOPT.get();
    }
}
