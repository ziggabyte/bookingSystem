package com.example.BookingSystem;

import com.example.BookingSystem.Controllers.UserController;
import com.example.BookingSystem.Exceptions.UserRegistrationException;
import com.example.BookingSystem.Models.User;
import com.example.BookingSystem.Repositories.UserRepository;
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

    @Test
    public void addUserSuccessTest() throws UserRegistrationException {
        User dummyUser = new User("CleanFreak", "myPassword");
        userController.addUser(dummyUser);
        Optional<User> userOptional = userRepository.findUserByUsername(dummyUser.getUsername());
        assertTrue(userOptional.isPresent());
    }

    @Test
    public void existingUsernameThrowsErrorTest() {
        User dummyUser = new User("Testuser", "Testpassword");
        assertThrows(UserRegistrationException.class, () -> userController.addUser(dummyUser));
    }
}
