package com.example.BookingSystem.Controllers;

import com.example.BookingSystem.Exceptions.LoginFailureException;
import com.example.BookingSystem.Exceptions.UserRegistrationException;
import com.example.BookingSystem.Models.User;
import com.example.BookingSystem.Services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin("*")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

    private final UserService userService;

    @PostMapping(path="/login")
    public Boolean login(
            @RequestParam("username") String username,
            @RequestParam("password") String password) throws LoginFailureException {
        return userService.login(username, password);
    }

    @PostMapping(path="/addUser")
    public void addUser(@RequestBody User user) throws UserRegistrationException {
        userService.addUser(user);
    }
}
