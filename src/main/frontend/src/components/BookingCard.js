import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { CustomButton } from "../App";


export default function BookingCard({ booking, deleteBooking }) {
    const { bookingId, name, address, date, time, service } = booking;

  return (
    <Card>
      <CardContent>
        <Typography variant="body1">
          {date} {time}
        </Typography>
        <Typography variant="h5">{service}</Typography>
        <Typography>{name}</Typography>
        <Typography>{address}</Typography>
      </CardContent>
      <CardActions>
        <CustomButton
          color="warning"
          fullWidth={true}
          variant="contained"
          onClick={() => deleteBooking(bookingId)}
        >
          Avboka städning
        </CustomButton>
      </CardActions>
    </Card>
  );
}
