package io.backend.service;

import net.bytebuddy.utility.RandomString;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class PasswordService {

    public String createNewPassword() {
        return RandomStringUtils.randomAlphanumeric(4);
    }
}
