package com.example.BookingSystem.Repositories;

import com.example.BookingSystem.Models.Entities.UserEntity;
import com.example.BookingSystem.Models.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findUserByUsername(String username);

    Optional<UserEntity> findUserByEmail(String email);

    List<UserEntity> findAllByPermission(Permission employee);
}
