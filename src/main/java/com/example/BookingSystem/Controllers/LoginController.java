package com.example.BookingSystem.Controllers;

import com.example.BookingSystem.Exceptions.LoginFailureException;
import com.example.BookingSystem.Services.LoginService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin("*")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class LoginController {

    private final LoginService loginService;

    @PostMapping(path="/login")
    public Boolean login(
            @RequestParam("username") String username,
            @RequestParam("password") String password) throws LoginFailureException {
        return loginService.login(username, password);
    }
}
