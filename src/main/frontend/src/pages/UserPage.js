import "../App.css";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import CustomerPageContent from "../components/CustomerPageContent";
import AdminPageContent from "../components/AdminPageContent";

export default function UserPage() {
    const { userContext } = useContext(UserContext)
    const { permission, userId } = userContext
    const [userProfile, setUserProfile] = useState({});
    const [bookings, setBookings] = useState({});

    useEffect(() => {
        const config = {
            headers: {
            "Access-Control-Allow-Origin": "*",
            },
        };

        axios
        .get(`http://localhost:8080/api/getUser/${userId}`, config)
            .then(({ data }) => setUserProfile(data))
        .catch((error) => console.log(error));

        if (permission === "CUSTOMER") {
            axios
            .get(`http://localhost:8080/api/getBookings/${userId}`, config)
            .then(({ data }) => setBookings(data))
            .catch((error) => console.log(error))
        } else if (permission === "ADMIN") {
            axios
            .get(`http://localhost:8080/api/getAllBookings`, config)
            .then(( {data }) => setBookings(data))
            .catch((error) => console.log(error))
        }
  }, [])


    return (
        <div id="pageDiv">
            {                
                permission === "CUSTOMER" ?
                <CustomerPageContent bookings={bookings} userProfile={userProfile} />
                :
                <AdminPageContent bookings={bookings} userProfile={userProfile} />
            }
        </div>
    )    
}
