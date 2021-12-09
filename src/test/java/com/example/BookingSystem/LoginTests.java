package com.example.BookingSystem;

import com.example.BookingSystem.Controllers.LoginController;
import com.example.BookingSystem.Exceptions.LoginFailureException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class LoginTests {
    @Autowired
    private LoginController loginController;

    @Test
    public void failedLoginTest() {
        assertThrows(LoginFailureException.class, () -> loginController.login("katt", "mus"));
    }

    @Test
    public void successfulLoginTest() throws LoginFailureException {
        assertTrue(loginController.login("Testuser", "Testpassword"));
    }
}
