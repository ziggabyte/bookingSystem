package com.example.BookingSystem.Models;

import lombok.Data;

@Data
public class PermissionPackage {
    private final Permission permission;
    private final Long userId;
}
