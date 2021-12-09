package com.example.BookingSystem.Services;

import com.example.BookingSystem.Exceptions.LoginFailureException;
import com.example.BookingSystem.Models.User;
import com.example.BookingSystem.Repositories.LoginRepository;
import com.example.BookingSystem.Utils.PasswordUtils;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class LoginService {

    private final LoginRepository loginRepository;

    public Boolean login(String username, String password) throws LoginFailureException {
        Optional<User> userOptional = loginRepository.findUserByUsername(username);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (PasswordUtils.verifyPassword(password, user.getPassword(), user.getSalt())) {
                return true;
            } else {
                throw new LoginFailureException("The password is incorrect");
            }
        } else {
            throw new LoginFailureException("The user does not exist");
        }
    }
}
