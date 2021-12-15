package com.example.BookingSystem;

import com.example.BookingSystem.Models.Permission;
import com.example.BookingSystem.Models.User;
import com.example.BookingSystem.Repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
            User testUser = new User(
                    "Testuser",
                    "Testpassword",
                    "Test Testsson",
                    "Testgatan 12, Malmö",
                    "test@gmail.com",
                    Permission.CUSTOMER);
            repository.save(testUser);
        };
    }
}
