import { CustomButton } from "../App";
import BookingCardHolder from "../components/BookingCardHolder";
import { useNavigate } from "react-router-dom";

export default function CustomerPageContent({ bookings, userProfile }) {
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/booking", { state: userProfile })
    }
    
  return (
    <>
      <h1>{userProfile.name}'s profile</h1>

      <ul id="profileInfoList">
        <li>Username: {userProfile.username}</li>
        <li>Name: {userProfile.name}</li>
        <li>Address: {userProfile.address}</li>
        <li>Email: {userProfile.email}</li>
      </ul>

      <form id="customerpageForm" onSubmit={(event) => handleSubmit(event)}>
        <CustomButton id="formButton" type="submit" variant="contained">
          New booking
        </CustomButton>
      </form>
          <BookingCardHolder
              bookingsMessage="Dina bokade städningar"
              initialBookings={bookings}
              isAdmin={false}
              noBookingsMessage="Du har inga bokade städningar"
          />
    </>
  );
}