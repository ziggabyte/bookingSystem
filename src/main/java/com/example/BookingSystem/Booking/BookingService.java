package com.example.BookingSystem.Booking;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class BookingService {

    private final BookingRepository bookingRepository;

    public void addNewBooking(Booking booking) {
        bookingRepository.save(booking);
    }
}
