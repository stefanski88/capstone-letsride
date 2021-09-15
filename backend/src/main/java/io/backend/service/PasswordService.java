package io.backend.service;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {

    public String createNewPassword() {
        return RandomStringUtils.randomAlphanumeric(4);
    }
}
