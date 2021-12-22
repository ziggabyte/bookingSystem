package com.example.BookingSystem.Models.DTOs;

import lombok.Data;

@Data
public class NewBookingDto {
    private final String name;
    private final String address;
    private final String date;
    private final String time;
    private final String service;
    private final Long userId;
}
