package com.example.BookingSystem.Models.DTOs;

import com.example.BookingSystem.Models.BookingStatus;
import lombok.Data;

@Data
public class BookingDto {
    private final Long bookingId;
    private final String name;
    private final String address;
    private final String date;
    private final String time;
    private final String service;
    private final Long userId;
    private final BookingStatus status;
    private final Long cleanerId;
}
