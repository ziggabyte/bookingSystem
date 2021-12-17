package com.example.BookingSystem.Models.DTOs;

import com.example.BookingSystem.Models.Entities.BookingEntity;
import lombok.Data;

import java.util.List;

@Data
public class GdprUserDto {
    private final String username;
    private final String name;
    private final String address;
    private final String email;
    private final List<BookingEntity> bookingEntities;
}
