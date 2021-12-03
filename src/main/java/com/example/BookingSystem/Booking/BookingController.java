package com.example.BookingSystem.Booking;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/api")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class BookingController {

    private final BookingService bookingService;

    @PostMapping( path = "/addBooking")
    public void addBooking(@RequestBody Booking booking) {
        bookingService.addNewBooking(booking);
    }
}
