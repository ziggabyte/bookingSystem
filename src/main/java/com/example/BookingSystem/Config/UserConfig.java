package com.example.BookingSystem.Config;

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
    CommandLineRunner commandLineRunnerUser(UserRepository repository) {
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
            User testEmployee1 = new User(
                    "Testemployee1",
                    "Employeepassword1",
                    "Employee von Emp",
                    "Karlskronaplan 5, Malmö",
                    "employee1@clean.com",
                    Permission.EMPLOYEE
            );
            User testEmployee2 = new User(
                    "Testemployee2",
                    "Employeepassword2",
                    "Emp Loyee",
                    "Städgatan 12, Arlöv",
                    "employee2@clean.com",
                    Permission.EMPLOYEE
            );
            repository.saveAll( List.of(testCustomer, testAdmin, testEmployee1, testEmployee2));
        };
    }
}
