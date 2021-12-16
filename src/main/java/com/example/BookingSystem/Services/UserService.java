package com.example.BookingSystem.Services;

import com.example.BookingSystem.Exceptions.LoginFailureException;
import com.example.BookingSystem.Exceptions.UserRegistrationException;
import com.example.BookingSystem.Models.GdprUserData;
import com.example.BookingSystem.Models.PermissionPackage;
import com.example.BookingSystem.Models.User;
import com.example.BookingSystem.Models.UserForClient;
import com.example.BookingSystem.Repositories.UserRepository;
import com.example.BookingSystem.Utils.PasswordUtils;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserService {

    private final UserRepository userRepository;

    public Optional<PermissionPackage> login(String username, String password) throws LoginFailureException {
        Optional<User> user = userRepository.findUserByUsername(username);
        if (user.isPresent()) {
            if (PasswordUtils.verifyPassword(password, user.get().getPassword(), user.get().getSalt())) {
                return Optional.of(new PermissionPackage(user.get().getPermission(), user.get().getId()));
            }
        }
        return Optional.empty();
    }

    public void addUser(User user) throws UserRegistrationException {
        Optional<User> userOptional = userRepository.findUserByUsername(user.getUsername());
        if (userOptional.isPresent()) {
            throw new UserRegistrationException("The username is already taken");
        } else {
            userOptional = userRepository.findUserByEmail(user.getEmail());
            if (userOptional.isPresent()) {
                throw new UserRegistrationException("This email is already registered");
            } else {
                userRepository.save(new User(
                        user.getUsername(),
                        user.getPassword(),
                        user.getName(),
                        user.getAddress(),
                        user.getEmail(),
                        user.getPermission()));
            }
        }
    }

    public UserForClient getUser(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.map(value -> new UserForClient(
                value.getId(),
                value.getUsername(),
                value.getName(),
                value.getAddress(),
                value.getEmail())).orElse(null);
    }

    public List<UserForClient> getAllEmployees() {
        List<User> employees = userRepository.findAllByPermission("EMPLOYEE");
        return employees.stream()
                .map(employee -> new UserForClient(
                        employee.getId(),
                        employee.getUsername(),
                        employee.getName(),
                        employee.getAddress(),
                        employee.getEmail()))
                .collect(Collectors.toList());
    }

    public GdprUserData getGdprUserData(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.map(value -> new GdprUserData(
                value.getUsername(),
                value.getName(),
                value.getAddress(),
                value.getEmail(),
                value.getBookings()
        )).orElse(null);
    }
}
