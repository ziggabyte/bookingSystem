package com.example.BookingSystem.Controllers;

import com.example.BookingSystem.Exceptions.BookingException;
import com.example.BookingSystem.Models.Booking;
import com.example.BookingSystem.Services.BookingService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class BookingController {

    private final BookingService bookingService;

    @PostMapping( path = "/addBooking")
    public void addBooking(@RequestBody Booking booking) {
        bookingService.addNewBooking(booking);
    }

    @GetMapping(path = "/getBookings/{userId}")
    public List<Booking> getBookingsByUserId(@PathVariable Long userId) throws BookingException {
        return bookingService.getBookingsByUserId(userId)
                .orElseThrow(() -> new BookingException("Customer has no bookings"));
    }
}
