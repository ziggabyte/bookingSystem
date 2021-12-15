package com.example.BookingSystem;

import com.example.BookingSystem.Models.Permission;
import com.example.BookingSystem.Models.User;
import com.example.BookingSystem.Repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
            User testCustomer = new User(
                    "Testuser",
                    "Testpassword",
                    "Test Testsson",
                    "Testgatan 12, Malmö",
                    "test@gmail.com",
                    Permission.CUSTOMER);
            User testAdmin = new User(
                    "Testadmin",
                    "Adminpassword",
                    "Admin Adminovic",
                    "Adminlunden 23, Lund",
                    "admin@clean.com",
                    Permission.ADMIN
            );
            repository.saveAll( List.of(testCustomer, testAdmin));
        };
    }
}
