package com.example.BookingSystem.Models.DTOs;

import lombok.Data;

@Data
public class UserDto {
    private final Long userId;
    private final String username;
    private final String name;
    private final String address;
    private final String email;
}




