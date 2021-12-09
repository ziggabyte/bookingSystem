package com.example.BookingSystem.Models;

import com.example.BookingSystem.Utils.PasswordUtils;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    private String username;
    private String password;
    private String salt;

    public User(String username, String password) {
        this.username = username;
        this.salt = PasswordUtils.generateSalt(170).get(); //170 ist för 512 pga fick inte plats med mer i db
        this.password = PasswordUtils.hashPassword(password, salt).get();
    }

}
