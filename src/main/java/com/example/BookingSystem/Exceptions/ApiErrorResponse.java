package com.example.BookingSystem.Exceptions;

import lombok.Data;

@Data
public class ApiErrorResponse {
    private final String error;
    private final String message;
}
