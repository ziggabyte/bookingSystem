package com.example.BookingSystem.Controllers;

import com.example.BookingSystem.Exceptions.BookingException;
import com.example.BookingSystem.Exceptions.LoginFailureException;
import com.example.BookingSystem.Exceptions.ApiErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(LoginFailureException.class)
    public ResponseEntity<ApiErrorResponse> handleLoginException(
            LoginFailureException exception) {
        ApiErrorResponse response =
                new ApiErrorResponse("Login failure",
                        exception.getMessage());
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(BookingException.class)
    public ResponseEntity<ApiErrorResponse> handleBoookingException(
            BookingException exception) {
        ApiErrorResponse response =
                new ApiErrorResponse("Booking error",
                        exception.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
