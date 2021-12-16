package com.example.BookingSystem.Models;

import lombok.Data;

import java.util.List;

@Data
public class GdprUserData {
    private final String username;
    private final String name;
    private final String address;
    private final String email;
    private final List<Booking> bookings;
}
