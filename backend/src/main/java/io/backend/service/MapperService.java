package io.backend.service;

import io.backend.api.UserBackendDTO;
import io.backend.api.UserRegisterDTO;
import io.backend.model.UserEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class MapperService {

    public UserBackendDTO map(UserEntity userEntity) {
        return UserBackendDTO.builder()
                .userName(userEntity.getUserName())
                .password(userEntity.getPassword())
                .userRole(userEntity.getUserRole())
                .eMail(userEntity.getEmail())
                .firstName(userEntity.getFirstName())
                .lastName(userEntity.getLastName())
                .age(userEntity.getAge())
                .location(userEntity.getLocation())
                .drivingExp(userEntity.getDrivingExp())
                .drivingStyle(userEntity.getDrivingStyle())
                .aboutMe(userEntity.getAboutMe())
                .build();
    }

    public UserEntity map(UserBackendDTO userBackendDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setUserName(userBackendDTO.getUserName());
        userEntity.setPassword(userBackendDTO.getPassword());
        userEntity.setUserRole(userBackendDTO.getUserRole());
        userEntity.setEmail(userBackendDTO.getEMail());
        userEntity.setFirstName(userBackendDTO.getFirstName());
        userEntity.setLastName(userBackendDTO.getLastName());
        userEntity.setAge(userBackendDTO.getAge());
        userEntity.setLocation(userBackendDTO.getLocation());
        userEntity.setDrivingExp(userBackendDTO.getDrivingExp());
        userEntity.setDrivingStyle(userBackendDTO.getDrivingStyle());
        userEntity.setAboutMe(userBackendDTO.getAboutMe());
        return userEntity;
    }

    public UserEntity map(UserRegisterDTO userRegisterDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setUserName(userRegisterDTO.getUserName());
        userEntity.setPassword(userRegisterDTO.getPassword());
        userEntity.setEmail(userRegisterDTO.getEmail());
        userEntity.setFirstName(userRegisterDTO.getFirstName());
        userEntity.setLastName(userRegisterDTO.getLastName());
        userEntity.setAge(userRegisterDTO.getAge());
        userEntity.setLocation(userRegisterDTO.getLocation());
        userEntity.setDrivingExp(userRegisterDTO.getDrivingExp());
        userEntity.setDrivingStyle(userRegisterDTO.getDrivingStyle());
        userEntity.setAboutMe(userRegisterDTO.getAboutMe());
        return userEntity;
    }

    public UserRegisterDTO mapFr(UserEntity userEntity) {
        return UserRegisterDTO.builder()
                .userName(userEntity.getUserName())
                .password(userEntity.getPassword())
                .email(userEntity.getEmail())
                .firstName(userEntity.getFirstName())
                .lastName(userEntity.getLastName())
                .age(userEntity.getAge())
                .location(userEntity.getLocation())
                .drivingExp(userEntity.getDrivingExp())
                .drivingStyle(userEntity.getDrivingStyle())
                .aboutMe(userEntity.getAboutMe())
                .build();
    }

    public List<UserBackendDTO> map(List<UserEntity> userEntityList) {
        List<UserBackendDTO> userBackendDTOList = new LinkedList<>();
        for (UserEntity userEntity: userEntityList) {
            UserBackendDTO userBackendDTO = map(userEntity);
            userBackendDTOList.add(userBackendDTO);
        }
        return userBackendDTOList;
    }
}