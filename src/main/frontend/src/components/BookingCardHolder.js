import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";

export default function BookingCardHolder({ initialBookings }) {
  const [bookings, setBookings] = useState(initialBookings);

  useEffect(() => setBookings(initialBookings), [initialBookings]);

  const deleteBooking = (bookingId) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .delete(`http://localhost:8080/api/deleteBooking/${bookingId}`, config)
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));

    const currentBookings = bookings.filter(
      (booking) => booking.bookingId !== bookingId
    );
    setBookings(currentBookings);
  };

  return (
    <Box>
      {bookings.length > 0 ? (
        <>
          <Typography>Dina bokade städningar</Typography>
          {bookings.map((booking, index) => {
            return (
              <>
                <BookingCard
                  booking={booking}
                  deleteBooking={deleteBooking}
                  key={index}
                />
              </>
            );
          })}
        </>
      ) : (
        <Typography>Du har inga bokade städningar</Typography>
      )}
    </Box>
  );
}
