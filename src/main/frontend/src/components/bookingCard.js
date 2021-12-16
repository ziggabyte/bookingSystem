import { Card, CardContent, Typography } from "@mui/material";

export default function BookingCard({ booking }) {
    const [name, address, date, time, service] = booking

    return (
        <Card>
            <CardContent>
                <Typography variant="body2">{date}{time}</Typography>
                <Typography variant="h3">{service}</Typography>
                <Typography>{name}</Typography>
                <Typography>{address}</Typography>
            </CardContent>
        </Card>
    )
}