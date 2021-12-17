package com.example.BookingSystem.Repositories;

import com.example.BookingSystem.Models.Entities.BookingEntity;
import com.example.BookingSystem.Models.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<BookingEntity, Long> {

    Optional<List<BookingEntity>> findByUserEntity(UserEntity userEntity);
}
