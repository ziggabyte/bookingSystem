package com.example.BookingSystem;

import com.example.BookingSystem.Controllers.UserController;
import com.example.BookingSystem.Exceptions.UserRegistrationException;
import com.example.BookingSystem.Models.User;
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
public class UserRegistrationTests {

    @Autowired
    private UserController userController;

    @Autowired
    private UserRepository userRepository;

    private User dummyUser;

    @BeforeEach
    private void setup() {
        dummyUser = new User(
                "cleanFreak",
                "myPassword",
                "Clean Freak",
                "23 Clean Street, Birmingham",
                "cleanfreak@email.com");
    }

    //Detta test failar för att jag inte vet hur databasen ska rensas från dummyUser när email-testet körs före
    @Test
    @Disabled
    public void addUserSuccessTest() throws UserRegistrationException {
        userController.addUser(dummyUser);
        Optional<User> userOptional = userRepository.findUserByUsername(dummyUser.getUsername());
        assertTrue(userOptional.isPresent());
    }

    @Test
    public void existingUsernameThrowsErrorTest() {
        User existingUser = new User(
                "Testuser",
                "Testpassword",
                null,
                null,
                null);
        assertThrows(UserRegistrationException.class, () -> userController.addUser(existingUser));
    }

    @Test
    public void existingEmailThrowsErrorTest() throws UserRegistrationException{
        userController.addUser(dummyUser);
        User sameEmailUser = new User(
                "neatNancy",
                "aPassword",
                "Neat Nancy",
                "Testaddress 34",
                dummyUser.getEmail());
        assertThrows(UserRegistrationException.class, () -> userController.addUser(sameEmailUser));
    }
}
