import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";

export default function BookingCardHolder({ initialBookings, bookingsMessage, noBookingsMessage, isAdmin }) {
    const [bookings, setBookings] = useState(initialBookings);
    useEffect(() => setBookings(initialBookings), [initialBookings])
    
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    const deleteBooking = (bookingId) => {
        axios
        .delete(`http://localhost:8080/api/deleteBooking/${bookingId}`, config)
        .then(({ data }) => console.log("delete response data", data))
        .catch((error) => console.log(error));

        const currentBookings = bookings.filter(
        (booking) => booking.bookingId !== bookingId
        )
        setBookings(currentBookings);
    }

  return (
    <Box>
      {bookings.length > 0 ? (
        <>
          <Typography id="bookingCardTypography">
            {bookingsMessage}
          </Typography>
          {bookings.map((booking, index) => {
            return (
              <div id="bookingCard">
                <BookingCard
                    booking={booking}
                    deleteBooking={deleteBooking}
                    key={index}
                    isAdmin={isAdmin}
                />
              </div>
            );
          })}
        </>
      ) : (
        <Typography id="bookingCardTypography">
          {noBookingsMessage}
        </Typography>
      )}
    </Box>
  );
}
