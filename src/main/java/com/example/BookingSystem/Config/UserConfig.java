package com.example.BookingSystem.Config;

import com.example.BookingSystem.Models.Permission;
import com.example.BookingSystem.Models.Entities.UserEntity;
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
            UserEntity testCustomer = new UserEntity(
                    "Testuser",
                    "Testpassword",
                    "Test Testsson",
                    "Testgatan 12, Malmö",
                    "test@gmail.com",
                    Permission.CUSTOMER);
            UserEntity testAdmin = new UserEntity(
                    "Testadmin",
                    "Adminpassword",
                    "Admin Adminovic",
                    "Adminlunden 23, Lund",
                    "admin@clean.com",
                    Permission.ADMIN
            );
            UserEntity testEmployee1 = new UserEntity(
                    "Testemployee1",
                    "Employeepassword1",
                    "Employee von Emp",
                    "Karlskronaplan 5, Malmö",
                    "employee1@clean.com",
                    Permission.EMPLOYEE
            );
            UserEntity testEmployee2 = new UserEntity(
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
