package io.backend.controller;

import io.backend.api.*;
import io.backend.model.MotoEntity;
import io.backend.model.UserEntity;

import java.util.LinkedList;
import java.util.List;

abstract class ControllerMapper {

    protected UserBackendDTO map(UserEntity userEntity) {
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

    protected UserEntity map(UserBackendDTO userBackendDTO) {
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

    protected UserEntity map(UserRegisterDTO userRegisterDTO) {
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

    protected UserRegisterDTO mapFr(UserEntity userEntity) {
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

    protected UserUpdateDTO mapUpdatedUser(UserEntity userEntity) {
        return UserUpdateDTO.builder()
                .userName(userEntity.getUserName())
                .firstName(userEntity.getFirstName())
                .lastName(userEntity.getLastName())
                .age(userEntity.getAge())
                .location(userEntity.getLocation())
                .drivingExp(userEntity.getDrivingExp())
                .drivingStyle(userEntity.getDrivingStyle())
                .aboutMe(userEntity.getAboutMe())
                .build();
    }

    protected UpdatePasswordDTO mapUpdatedPassword(UserEntity userEntity) {
        return UpdatePasswordDTO.builder()
                .currentPassword(userEntity.getPassword())
                .newPassword(userEntity.getPassword())
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

    protected MotoBackendDTO mapMotoToDTO(MotoEntity motoEntity) {
        return MotoBackendDTO.builder()
                .motoID(motoEntity.getMotoID())
                .motoNickName(motoEntity.getMotoNickName())
                .manufacturer(motoEntity.getManufacturer())
                .model(motoEntity.getModel())
                .constructionYear(motoEntity.getConstructionYear())
                .build();
    }

    protected MotoBackendDTO mapMotoRegisterDTO(MotoEntity motoEntity) {
        return MotoBackendDTO.builder()
                .motoNickName(motoEntity.getMotoNickName())
                .manufacturer(motoEntity.getManufacturer())
                .model(motoEntity.getModel())
                .constructionYear(motoEntity.getConstructionYear())
                .build();
    }

    protected MotoUpdateDTO mapUpdatedMoto(MotoEntity motoEntity) {
        return MotoUpdateDTO.builder()
                .motoNickName(motoEntity.getMotoNickName())
                .manufacturer(motoEntity.getManufacturer())
                .model(motoEntity.getModel())
                .build();
    }

    protected List<MotoBackendDTO> mapMotos(List<MotoEntity> motoEntityList) {
        List<MotoBackendDTO> motoBackendDTOList = new LinkedList<>();
        for (MotoEntity motoEntity: motoEntityList) {
            MotoBackendDTO motoBackendDTO = mapMotoToDTO(motoEntity);
            motoBackendDTOList.add(motoBackendDTO);
        }
        return motoBackendDTOList;
    }
}