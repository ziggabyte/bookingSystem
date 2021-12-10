package com.example.BookingSystem;

import com.example.BookingSystem.Controllers.UserController;
import com.example.BookingSystem.Exceptions.LoginFailureException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class LoginTests {
    @Autowired
    private UserController userController;

    @Test
    public void failedLoginTest() {
        assertThrows(LoginFailureException.class, () -> userController.login("katt", "mus"));
    }

    @Test
    public void successfulLoginTest() throws LoginFailureException {
        assertTrue(userController.login("Testuser", "Testpassword"));
    }
}
