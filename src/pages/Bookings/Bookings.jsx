import { useEffect, useState } from "react";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
import BookingRow from "./BookingRow";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
  // const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  // const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure
      .get(`/bookings?email=${user?.email}`)
      .then((res) => setBookings(res?.data));
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setBookings(res.data);
    // });
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => setBookings(data))
  }, [user, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      axiosSecure.delete(`/bookings/${id}`).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          alert("deleted successful");
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        }
      });
      // fetch(`http://localhost:5000/bookings/${id}`, {
      //   method: "DELETE",
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     if (data.deletedCount > 0) {
      //       alert("deleted successful");
      //       const remaining = bookings.filter((booking) => booking._id !== id);
      //       setBookings(remaining);
      //     }
      //   });
    }
  };

  const handleBookingConfirm = (id) => {
    //     fetch(`http://localhost:5000/bookings/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({ status: "confirm" }),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         if (data.modifiedCount > 0) {
    //           // update state
    //           const remaining = bookings.filter((booking) => booking._id !== id);
    //           const updated = bookings.find((booking) => booking._id === id);
    //           updated.status = "confirm";
    //           const newBookings = [updated, ...remaining];
    //           setBookings(newBookings);
    //         }
    //       });
    console.log(`booking confirmed for ${id}`);
  };

  return (
    <div>
      <h2 className="text-5xl">Your bookings: {bookings?.length}</h2>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
