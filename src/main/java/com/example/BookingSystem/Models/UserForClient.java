package com.example.BookingSystem.Models;

import lombok.Data;

@Data
public class UserForClient {
    private final Long userId;
    private final String username;
    private final String name;
    private final String address;
    private final String email;
}




