package com.example.BookingSystem;

import com.example.BookingSystem.Controllers.UserController;
import com.example.BookingSystem.Exceptions.UserRegistrationException;
import com.example.BookingSystem.Models.DTOs.NewUserDto;
import com.example.BookingSystem.Models.Permission;
import com.example.BookingSystem.Models.Entities.UserEntity;
import com.example.BookingSystem.Repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class UserEntityRegistrationTests {

    @Autowired
    private UserController userController;

    @Autowired
    private UserRepository userRepository;

    private NewUserDto dummyUserEntity;

    @BeforeEach
    private void setup() {
        dummyUserEntity = new NewUserDto(
                "cleanFreak",
                "myPassword",
                "Clean Freak",
                "23 Clean Street, Birmingham",
                "cleanfreak@email.com",
                Permission.CUSTOMER);
    }

    //Detta test failar för att jag inte vet hur databasen ska rensas från dummyUserEntity när email-testet körs före
    @Test
    @Disabled
    public void addUserSuccessTest() throws UserRegistrationException {
        userController.addUser(dummyUserEntity);
        Optional<UserEntity> userOptional = userRepository.findUserByUsername(dummyUserEntity.getUsername());
        assertTrue(userOptional.isPresent());
    }

    @Test
    public void existingUsernameThrowsErrorTest() {
        NewUserDto existingUserEntity = new NewUserDto(
                "Testuser",
                "Testpassword",
                null,
                null,
                null,
                Permission.CUSTOMER);
        assertThrows(UserRegistrationException.class, () -> userController.addUser(existingUserEntity));
    }

    @Test
    public void existingEmailThrowsErrorTest() throws UserRegistrationException{
        userController.addUser(dummyUserEntity);
        NewUserDto sameEmailUserEntity = new NewUserDto(
                "neatNancy",
                "aPassword",
                "Neat Nancy",
                "Testaddress 34",
                dummyUserEntity.getEmail(),
                Permission.CUSTOMER);
        assertThrows(UserRegistrationException.class, () -> userController.addUser(sameEmailUserEntity));
    }
}
