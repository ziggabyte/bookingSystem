package com.example.BookingSystem.Exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class BookingException extends Exception {
    private final String message;
}
