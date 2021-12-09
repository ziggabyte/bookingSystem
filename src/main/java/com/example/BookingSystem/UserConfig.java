package com.example.BookingSystem;

import com.example.BookingSystem.Models.User;
import com.example.BookingSystem.Repositories.LoginRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(LoginRepository repository) {
        return args -> {
            User testUser = new User("Testuser", "Testpassword");
            repository.save(testUser);
        };
    }
}
