const bookings = [
  {
    id: 1,
    patientName: "Samah Mohamed",
    date: "2025-10-15",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    date: "2025-09-16",
    time: "2:00 PM",
    status: "Confirmed",
  },
  {
    id: 3,
    patientName: "Mustafa Mohamed",
    date: "2025-09-17",
    time: "11:00 AM",
    status: "Pending",
  },
  {
    id: 4,
    patientName: "Ahmed Mohamed",
    date: "2023-05-18",
    time: "3:00 PM",
    status: "Cancelled",
  },
];

const getBookings = () => {
  // Simulate an API call to fetch the bookings
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(bookings);
    }, 1000);
  });
};

const cancelBooking = (id) => {
  // Simulate an API call to cancel the booking
  return new Promise((resolve) => {
    setTimeout(() => {
      const cancelledBooking = bookings.find((booking) => booking.id === id);
      cancelledBooking.status = "Cancelled";
      resolve();
    }, 1000);
  });
};

export { getBookings, cancelBooking };
