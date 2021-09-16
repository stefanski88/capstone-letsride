package io.backend.service;

import io.backend.api.MotoBackendDTO;
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

    public MotoEntity getMotoByMotoID(UserEntity authUser, Long motoID) {
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
        Optional<MotoEntity> motoEntity = motoRepository.findByMotoID(motoID);

        if (userEntity.isEmpty()) {
            throw new EntityNotFoundException("Entity not found! (custom)");
        }
        if (motoEntity.isEmpty()) {
            throw new EntityNotFoundException("Motorcycle not found! (custom)");
        }
        if (!motoEntity.get().getUserid().getUserID().equals(userEntity.get().getUserID())) {
            throw new EntityNotFoundException("Moto not found..");
        }
        return motoEntity.get();
    }
}
