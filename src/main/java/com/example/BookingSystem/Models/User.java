package com.example.BookingSystem.Models;

import com.example.BookingSystem.Utils.PasswordUtils;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

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
    private String name;
    private String address;
    private String email;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Booking> bookings;

    public User(String username, String password, String name, String address, String email) {
        this.username = username;
        this.salt = PasswordUtils.generateSalt(170).get(); //170 ist för 512 pga fick inte plats med mer i db
        this.password = PasswordUtils.hashPassword(password, salt).get();
        this.name = name;
        this.address = address;
        this.email = email;
    }

}
