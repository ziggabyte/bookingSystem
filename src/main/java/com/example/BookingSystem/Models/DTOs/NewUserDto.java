package com.example.BookingSystem.Models.DTOs;

import com.example.BookingSystem.Models.Permission;
import lombok.Data;

@Data
public class NewUserDto {
    private final String username;
    private final String password;
    private final String name;
    private final String address;
    private final String email;
    private final Permission permission;
}
