import BookingCardHolder from "../components/BookingCardHolder";

export default function AdminPageContent({ bookings, userProfile }) {
    return (
        <>
            <h1>{userProfile.name}'s admin page</h1>

            <ul id="profileInfoList">
                <li>Username: {userProfile.username}</li>
                <li>Name: {userProfile.name}</li>
                <li>Address: {userProfile.address}</li>
                <li>Email: {userProfile.email}</li>
            </ul>

            <BookingCardHolder
                bookingsMessage="Alla bokade städningar"
                initialBookings={bookings}
                noBookingsMessage="Det finns inga bokade städningar"
                isAdmin={true}
            />
        </>
    )
}