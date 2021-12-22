import { Card, CardActions, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CustomButton } from "../App";
import AssignCleanerDialog from "./AssignCleanerDialog";


export default function BookingCard({ booking, deleteBooking, isAdmin }) {
    const { bookingId, name, address, date, time, service, cleanerId } = booking;
    
    const [dialogOpen, setDialogOpen] = useState(false)
    const [cleaner, setCleaner] = useState({})
    const [allCleaners, setAllCleaners] = useState({})
    const [hasLoaded, setHasLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/getAllEmployees`)
            .then(({ data }) => {
                setAllCleaners(data)
                setHasLoaded(true)
            })
            .catch((error) => console.log(error))
        
        if (cleanerId != null) {
            axios.get(`http://localhost:8080/api/getUser/${cleanerId}`)
                .then(({ data }) => setCleaner(data))
                .catch((error) => console.log(error))
        }
    }, [])

    const handleClose = (cleaner) => {
        const config = {
            headers: {
            "Access-Control-Allow-Origin": "*",
            },
        };
        const cleanerId = cleaner.userId

        setDialogOpen(false)
        setCleaner(cleaner)
        axios
            .post(
                "http://localhost:8080/api/assignBooking",
                {},
                { params: { bookingId, cleanerId } },
                config
            )
            .then((response) => console.log("response data posted to assign Booking", response.data))
            .catch((error) => console.log(error))
    }

    const handleOpen = () => { setDialogOpen(true) }

  return (
    <Card>
      <CardContent>
        <Typography variant="body1">
          {date} {time}
        </Typography>
        <Typography variant="h5">{service}</Typography>
        <Typography>{name}</Typography>
            <Typography>{address}</Typography>
            <Typography>{"Utförs av: " + cleaner.name}</Typography>
              
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
        {isAdmin &&
        <>
            <CustomButton
                color="warning"
                fullWidth={true}
                variant="contained"
                onClick={() => handleOpen()}
            >
                Tilldela städare
            </CustomButton>
            <AssignCleanerDialog
                    allCleaners={allCleaners}
                    hasLoaded={hasLoaded}
                open={dialogOpen}
                selectedCleaner={cleaner}
                onClose={handleClose}
            />
        </>
        }
      </CardActions>
    </Card>
  );
}
