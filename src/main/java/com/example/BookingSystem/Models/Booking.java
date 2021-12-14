package com.example.BookingSystem.Models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table
@Data
public class Booking {
    @Id
    @SequenceGenerator(
            name = "booking_sequence",
            sequenceName = "booking_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "booking_sequence"
    )
    private final Long id;
    private final String name;
    private final String address;
    private final String date;
    private final String time;
    private final String service;
    @ManyToOne(optional = false)
    @JoinColumn(nullable = false)
    private final User user;
}
