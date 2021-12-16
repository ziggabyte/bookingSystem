package com.example.BookingSystem.Controllers;

import com.example.BookingSystem.Exceptions.LoginFailureException;
import com.example.BookingSystem.Exceptions.UserRegistrationException;
import com.example.BookingSystem.Models.GdprUserData;
import com.example.BookingSystem.Models.PermissionPackage;
import com.example.BookingSystem.Models.User;
import com.example.BookingSystem.Models.UserForClient;
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
    public void addUser(@RequestBody User user) throws UserRegistrationException {
        userService.addUser(user);
    }

    @GetMapping(path = "/getUser/{userId}")
    public UserForClient getUser(@PathVariable Long userId) {
        return userService.getUser(userId);
    }

    @GetMapping(path = "/getAllEmployees")
    public List<UserForClient> getAllEmployees() {
        return userService.getAllEmployees();
    }

    @GetMapping(path = "/getGdprUserData/{userId}")
    public GdprUserData geGdprUserData(@PathVariable Long userId) {
        return userService.getGdprUserData(userId);
    }
}
