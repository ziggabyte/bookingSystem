package com.example.BookingSystem.Services;

import com.example.BookingSystem.Exceptions.BookingException;
import com.example.BookingSystem.Models.DTOs.BookingDto;
import com.example.BookingSystem.Models.DTOs.NewBookingDto;
import com.example.BookingSystem.Models.Entities.BookingEntity;
import com.example.BookingSystem.Models.BookingStatus;
import com.example.BookingSystem.Models.Entities.UserEntity;
import com.example.BookingSystem.Repositories.BookingRepository;
import com.example.BookingSystem.Repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class BookingService {

    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;

    public void addNewBooking(NewBookingDto newBookingDto) throws BookingException {
        Optional<UserEntity> user = userRepository.findById(newBookingDto.getUserId());

        if (user.isPresent()) {
            bookingRepository.save(new BookingEntity(
                    newBookingDto.getName(),
                    newBookingDto.getAddress(),
                    newBookingDto.getDate(),
                    newBookingDto.getTime(),
                    newBookingDto.getService(),
                    user.get()
                    ));
        } else {
            throw new BookingException("Cannot create booking with invalid user Id");
        }
    }

    public List<BookingDto> getBookingsByUserId(Long userId) throws BookingException {
        UserEntity userEntity = userRepository.getById(userId);
        Optional<List<BookingEntity>> bookingEntityList = bookingRepository.findByUserEntity(userEntity);

        if (bookingEntityList.isPresent()) {
            return bookingEntityList.get().stream().map(
                    bookingEntity -> new BookingDto(
                            bookingEntity.getId(),
                            bookingEntity.getName(),
                            bookingEntity.getAddress(),
                            bookingEntity.getDate(),
                            bookingEntity.getTime(),
                            bookingEntity.getService(),
                            bookingEntity.getUserEntity().getId(),
                            bookingEntity.getStatus(),
                            bookingEntity.getCleanerId()
                    )
            ).collect(Collectors.toList());
        } else {
            throw new BookingException("Customer has no bookings");
        }
    }

    public void deleteBooking(Long bookingId) {
        bookingRepository.deleteById(bookingId);
    }

    public List<BookingDto> getAllBookings() {
        List<BookingEntity> bookingEntityList = bookingRepository.findAll();

        return bookingEntityList.stream().map(
                bookingEntity -> new BookingDto(
                        bookingEntity.getId(),
                        bookingEntity.getName(),
                        bookingEntity.getAddress(),
                        bookingEntity.getDate(),
                        bookingEntity.getTime(),
                        bookingEntity.getService(),
                        bookingEntity.getUserEntity().getId(),
                        bookingEntity.getStatus(),
                        bookingEntity.getCleanerId()
                )
        ).collect(Collectors.toList());
    }

    public void assignBooking(Long bookingId, Long cleanerId) {
        BookingEntity bookingEntity = bookingRepository.getById(bookingId);
        bookingEntity.setStatus(BookingStatus.ASSIGNED);
        bookingEntity.setCleanerId(cleanerId);
        bookingRepository.save(bookingEntity);
    }
}
