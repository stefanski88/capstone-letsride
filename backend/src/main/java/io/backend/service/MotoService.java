package io.backend.service;

import io.backend.api.MotoRegisterDTO;
import io.backend.api.MotoUpdateDTO;
import io.backend.model.MotoEntity;
import io.backend.model.UserEntity;
import io.backend.repository.MotoRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        Optional<UserEntity> userEntity = userService.getUserByUserName(authUser.getUserName());
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

    @Transactional
    public MotoEntity deleteMotoByID(UserEntity authUser, Long motoID) {
        var user = userService.getUserByUserName(authUser.getUserName()).get();
        MotoEntity motoEntity = getMotoByMotoID(authUser, motoID);

        user.getMotorcycles().remove(motoEntity);

        return new MotoEntity();
    }

    public MotoEntity createMoto(UserEntity authUser, MotoRegisterDTO motoRegisterDTO) {
        Optional<UserEntity> userEntityOPT = userService.getUserByUserName(authUser.getUserName());
        if (userEntityOPT.isEmpty()) {
            throw new EntityNotFoundException("Entity not found! (custom)");
        }
        UserEntity userEntity = userEntityOPT.get();
        MotoEntity motoEntity = mapMotoRegisterDTO(motoRegisterDTO);

        motoEntity.setUserid(userEntity);
        userEntity.addMoto(motoEntity);

        motoRepository.save(motoEntity);
        return motoEntity;
    }

    public MotoEntity updateMoto(UserEntity authUser, MotoUpdateDTO motoUpdateDTO, Long motoID) {
        MotoEntity motoEntity = getMotoByMotoID(authUser, motoID);

        MotoEntity mappedMotoUpdateEntity = mapMotoUpdateDTO(motoUpdateDTO);

        if (mappedMotoUpdateEntity.getUserid() == null) {
            mappedMotoUpdateEntity.setUserid(motoEntity.getUserid());
        }
        if (mappedMotoUpdateEntity.getMotoID() == null) {
            mappedMotoUpdateEntity.setMotoID(motoEntity.getMotoID());
        }
        if (mappedMotoUpdateEntity.getModel() == null) {
            mappedMotoUpdateEntity.setModel(motoEntity.getModel());
        }
        if (mappedMotoUpdateEntity.getConstructionYear() == null) {
            mappedMotoUpdateEntity.setConstructionYear(motoEntity.getConstructionYear());
        }

        if (motoEntity.equals(mappedMotoUpdateEntity)) {
            throw new IllegalArgumentException("there is nothing to change ....)");
        }
        return motoRepository.save(mappedMotoUpdateEntity);
    }


    private MotoEntity mapMotoRegisterDTO(MotoRegisterDTO motoRegisterDTO) {
        MotoEntity motoEntity = new MotoEntity();
        motoEntity.setMotoNickName(motoRegisterDTO.getMotoNickName());
        motoEntity.setManufacturer(motoRegisterDTO.getManufacturer());
        motoEntity.setModel(motoRegisterDTO.getModel());
        motoEntity.setConstructionYear(motoRegisterDTO.getConstructionYear());
        return motoEntity;
    }

    private MotoEntity mapMotoUpdateDTO(MotoUpdateDTO motoUpdateDTO) {
        MotoEntity motoEntity = new MotoEntity();
        motoEntity.setMotoNickName(motoUpdateDTO.getMotoNickName());
        motoEntity.setManufacturer(motoUpdateDTO.getManufacturer());
        motoEntity.setModel(motoUpdateDTO.getModel());
        motoEntity.setConstructionYear(motoUpdateDTO.getConstructionYear());
        return motoEntity;
    }
}
