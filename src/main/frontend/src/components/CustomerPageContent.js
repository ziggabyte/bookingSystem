import { CustomButton } from "../App";
import BookingCardHolder from "../components/BookingCardHolder";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function CustomerPageContent({ bookings, userProfile }) {
  return (
    <>
      <h1>{userProfile.name}'s profile</h1>

      <ul id="profileInfoList">
        <li>Username: {userProfile.username}</li>
        <li>Name: {userProfile.name}</li>
        <li>Address: {userProfile.address}</li>
        <li>Email: {userProfile.email}</li>
      </ul>

        <Link to="/booking">
            <CustomButton id="formButton" type="submit" variant="contained">
                New booking
            </CustomButton>
          </Link>
        <BookingCardHolder
            bookingsMessage="Dina bokade städningar"
            initialBookings={bookings}
            isAdmin={false}
            noBookingsMessage="Du har inga bokade städningar"
        />
    </>
  );
}