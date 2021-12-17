package com.example.BookingSystem.Controllers;

import com.example.BookingSystem.Exceptions.LoginFailureException;
import com.example.BookingSystem.Exceptions.UserRegistrationException;
import com.example.BookingSystem.Models.DTOs.GdprUserDto;
import com.example.BookingSystem.Models.DTOs.NewUserDto;
import com.example.BookingSystem.Models.PermissionPackage;
import com.example.BookingSystem.Models.Entities.UserEntity;
import com.example.BookingSystem.Models.DTOs.UserDto;
import com.example.BookingSystem.Services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

    private final UserService userService;

    @PostMapping(path="/login")
    public PermissionPackage login(@RequestParam(name = "username") String username,
                                   @RequestParam(name = "password") String password) throws LoginFailureException {
        return userService.login(username, password)
                .orElseThrow(() -> new LoginFailureException("Username or password is incorrect."));
    }

    @PostMapping(path="/addUser")
    public void addUser(@RequestBody NewUserDto newUserDto) throws UserRegistrationException {
        userService.addUser(newUserDto);
    }

    @GetMapping(path = "/getUser/{userId}")
    public UserDto getUser(@PathVariable Long userId) {
        return userService.getUser(userId);
    }

    @GetMapping(path = "/getAllEmployees")
    public List<UserDto> getAllEmployees() {
        return userService.getAllEmployees();
    }

    @GetMapping(path = "/getGdprUserData/{userId}")
    public GdprUserDto geGdprUserData(@PathVariable Long userId) {
        return userService.getGdprUserData(userId);
    }
}
