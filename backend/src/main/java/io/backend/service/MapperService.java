package io.backend.service;

import io.backend.api.UserDTO;
import io.backend.model.UserEntity;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class MapperService {

    public UserDTO map(UserEntity userEntity) {
        return UserDTO.builder()
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

    public UserEntity map(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setUserName(userDTO.getUserName());
        userEntity.setPassword(userDTO.getPassword());
        userEntity.setUserRole(userDTO.getUserRole());
        userEntity.setEMail(userDTO.getEMail());
        userEntity.setFirstName(userDTO.getFirstName());
        userEntity.setLastName(userDTO.getLastName());
        userEntity.setAge(userDTO.getAge());
        userEntity.setLocation(userDTO.getLocation());
        userEntity.setDrivingExp(userDTO.getDrivingExp());
        userEntity.setDrivingStyle(userDTO.getDrivingStyle());
        userEntity.setAboutMe(userDTO.getAboutMe());
        return userEntity;
    }

    public List<UserDTO> map(List<UserEntity> userEntityList) {
        List<UserDTO> userDTOList= new LinkedList<>();
        for (UserEntity userEntity: userEntityList) {
            UserDTO userDTO = map(userEntity);
            userDTOList.add(userDTO);
        }
        return userDTOList;
    }
}
