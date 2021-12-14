package com.example.BookingSystem.Services;

import com.example.BookingSystem.Models.Booking;
import com.example.BookingSystem.Repositories.BookingRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class BookingService {

    private final BookingRepository bookingRepository;

    public void addNewBooking(Booking booking) {
        bookingRepository.save(booking);
    }

    public Optional<List<Booking>> getBookingsByUserId(Long customerId) {
        return bookingRepository.findByUserId(customerId);
    }

    public void deleteBooking(Long bookingId) {
        bookingRepository.deleteById(bookingId);
    }
}
