package com.example.BookingSystem.Repositories;

import com.example.BookingSystem.Models.BookingStatus;
import com.example.BookingSystem.Models.Entities.BookingEntity;
import com.example.BookingSystem.Models.Entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<BookingEntity, Long> {

    Optional<List<BookingEntity>> findByUserEntity(UserEntity userEntity);

    @Modifying
    @Query(value = "UPDATE bookings SET status = status, cleanerId = cleanerId WHERE id = id", nativeQuery = true)
    void assignCleaner(
            @Param(value = "id") Long id,
            @Param(value = "status") BookingStatus status,
            @Param(value = "cleanerId") Long cleanerId);
}
