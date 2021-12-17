package com.example.BookingSystem.Controllers;

import com.example.BookingSystem.Exceptions.BookingException;
import com.example.BookingSystem.Models.DTOs.BookingDto;
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
    public void addBooking(@RequestBody BookingDto bookingDto) throws BookingException {
        bookingService.addNewBooking(bookingDto);
    }

    @PostMapping(path = "/assignBooking")
    public void setBookingAssigned(@RequestParam Long bookingId, @RequestParam Long cleanerId) {
        bookingService.assignBooking(bookingId, cleanerId);
    }

    @GetMapping(path = "/getAllBookings")
    public List<BookingDto> getAllBookings() throws BookingException {
        return bookingService.getAllBookings();
    }

    @GetMapping(path = "/getBookings/{userId}")
    public List<BookingDto> getBookingsByUserId(@PathVariable Long userId) throws BookingException {
        return bookingService.getBookingsByUserId(userId);
    }

    @DeleteMapping(path = "/deleteBooking/{bookingId}")
    public void deleteBookingById(@PathVariable Long bookingId) {
        bookingService.deleteBooking(bookingId);
    }
}
