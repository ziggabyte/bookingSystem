package com.example.BookingSystem.Controllers;

import com.example.BookingSystem.Models.Booking;
import com.example.BookingSystem.Services.BookingService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class BookingController {

    private final BookingService bookingService;

    @PostMapping( path = "/addBooking")
    public void addBooking(@RequestBody Booking booking) {
        System.out.println(booking);
        bookingService.addNewBooking(booking);
    }
}
