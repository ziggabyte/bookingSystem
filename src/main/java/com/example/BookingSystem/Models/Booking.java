package com.example.BookingSystem.Models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
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
    private Long id;
    private String name;
    private String address;
    private String date;
    private String time;
    private String service;
    @ManyToOne(optional = false)
    @JoinColumn(nullable = false)
    private User user;
    private BookingStatus status;
    private Long cleanerId;

    public Booking(String name, String address, String date, String time, String service, User user) {
        this.name = name;
        this.address = address;
        this.date = date;
        this.time = time;
        this.service = service;
        this.user = user;
        this.status = BookingStatus.UNASSIGNED;
        this.cleanerId = null;
    }
}
