import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function BookingCard({ booking, deleteBooking }) {
    const { bookingId, name, address, date, time, service } = booking

    return (
        <Card>
            <CardContent>
                <Typography variant="body1">{date} {time}</Typography>
                <Typography variant="h5">{service}</Typography>
                <Typography>{name}</Typography>
                <Typography>{address}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    color="warning"
                    fullWidth={true}
                    variant="contained"
                    onClick={() => deleteBooking(bookingId) }>
                    Cancel cleaning
                </Button>
            </CardActions> 
        </Card>
    )
}
