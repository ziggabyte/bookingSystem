package com.example.BookingSystem.Exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;


@Getter
@AllArgsConstructor
public class LoginFailureException extends Exception{
    private final String message;
}
