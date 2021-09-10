package io.backend.service;

import io.backend.api.UserBackendDTO;
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
                .eMail(userEntity.getEMail())
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
        userEntity.setEMail(userBackendDTO.getEMail());
        userEntity.setFirstName(userBackendDTO.getFirstName());
        userEntity.setLastName(userBackendDTO.getLastName());
        userEntity.setAge(userBackendDTO.getAge());
        userEntity.setLocation(userBackendDTO.getLocation());
        userEntity.setDrivingExp(userBackendDTO.getDrivingExp());
        userEntity.setDrivingStyle(userBackendDTO.getDrivingStyle());
        userEntity.setAboutMe(userBackendDTO.getAboutMe());
        return userEntity;
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
