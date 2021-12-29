package com.example.BookingSystem.Services;

import com.example.BookingSystem.Exceptions.LoginFailureException;
import com.example.BookingSystem.Exceptions.UserRegistrationException;
import com.example.BookingSystem.Models.DTOs.GdprUserDto;
import com.example.BookingSystem.Models.DTOs.NewUserDto;
import com.example.BookingSystem.Models.Permission;
import com.example.BookingSystem.Models.PermissionPackage;
import com.example.BookingSystem.Models.Entities.UserEntity;
import com.example.BookingSystem.Models.DTOs.UserDto;
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
        Optional<UserEntity> user = userRepository.findUserByUsername(username);
        if (user.isPresent()) {
            if (PasswordUtils.verifyPassword(password, user.get().getPassword(), user.get().getSalt())) {
                return Optional.of(new PermissionPackage(user.get().getPermission(), user.get().getId()));
            }
        }
        return Optional.empty();
    }

    public void addUser(NewUserDto newUserDto) throws UserRegistrationException {
        Optional<UserEntity> userOptional = userRepository.findUserByUsername(newUserDto.getUsername());
        if (userOptional.isPresent()) {
            throw new UserRegistrationException("The username is already taken");
        } else {
            userOptional = userRepository.findUserByEmail(newUserDto.getEmail());
            if (userOptional.isPresent()) {
                throw new UserRegistrationException("This email is already registered");
            } else {
                userRepository.save(new UserEntity(
                        newUserDto.getUsername(),
                        newUserDto.getPassword(),
                        newUserDto.getName(),
                        newUserDto.getAddress(),
                        newUserDto.getEmail(),
                        newUserDto.getPermission()));
            }
        }
    }

    public UserDto getUser(Long userId) {
        Optional<UserEntity> user = userRepository.findById(userId);
        return user.map(value -> new UserDto(
                value.getId(),
                value.getUsername(),
                value.getName(),
                value.getAddress(),
                value.getEmail(),
                value.getPermission())).orElse(null);
    }

    public List<UserDto> getAllEmployees() {
        List<UserEntity> employees = userRepository.findAllByPermission(Permission.EMPLOYEE);
        return employees.stream()
                .map(employee -> new UserDto(
                        employee.getId(),
                        employee.getUsername(),
                        employee.getName(),
                        employee.getAddress(),
                        employee.getEmail(),
                        employee.getPermission()))
                .collect(Collectors.toList());
    }

    public GdprUserDto getGdprUserData(Long userId) {
        Optional<UserEntity> user = userRepository.findById(userId);
        return user.map(value -> new GdprUserDto(
                value.getUsername(),
                value.getName(),
                value.getAddress(),
                value.getEmail()
        )).orElse(null);
    }
}
