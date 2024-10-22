let cityData = { cities: [] }; // Default structure in case fetch fails

fetch("./cities.json")
  .then((response) => response.json())
  .then((data) => {
    cityData = data;
  })
  .catch((error) => {
    console.error("Error loading city data:", error);
  });

function validateStayForm() {
  const checkInDate = new Date(document.getElementById("checkIn").value);
  const checkOutDate = new Date(document.getElementById("checkOut").value);
  const startDate = new Date("2024-09-01");
  const endDate = new Date("2024-12-01");

  const city = document.getElementById("city").value.toLowerCase();
  const validCities = cityData.cities;

  // City validation
  if (!validCities.includes(city)) {
    alert("City must be in Texas or California.");
    return;
  }

  // Date validation
  if (checkInDate < startDate || checkOutDate > endDate) {
    alert(
      "Check-in and Check-out dates must be between Sep 1, 2024, and Dec 1, 2024."
    );
    return;
  }

  if (checkInDate >= checkOutDate) {
    alert("Check-in date must be before the Check-out date.");
    return;
  }

  const adults = parseInt(document.getElementById("adults").value);
  const children = parseInt(document.getElementById("children").value);
  const infants = parseInt(document.getElementById("infants").value);

  // Ensure non-negative numbers for all fields
  if (adults < 0 || children < 0 || infants < 0) {
    alert("The number of adults, children, and infants must be non-negative.");
    return;
  }

  // Total guests excluding infants
  const totalGuests = adults + children;

  // Calculate the number of rooms required
  let roomsRequired = Math.ceil(totalGuests / 2);

  // Show the information entered and the number of rooms required in an alert
  displayStayDetailsInAlert(
    city,
    checkInDate,
    checkOutDate,
    adults,
    children,
    infants,
    roomsRequired
  );
}

// Function to format and display the user's entered information in an alert
function displayStayDetailsInAlert(
  city,
  checkInDate,
  checkOutDate,
  adults,
  children,
  infants,
  roomsRequired
) {
  const formattedCheckIn = checkInDate.toLocaleDateString();
  const formattedCheckOut = checkOutDate.toLocaleDateString();

  // Formatting the message to show in the alert
  const alertMessage = `
    Stay Details:
    City: ${city.charAt(0).toUpperCase() + city.slice(1)}
    Check-in Date: ${formattedCheckIn}
    Check-out Date: ${formattedCheckOut}
    Number of Adults: ${adults}
    Number of Children: ${children}
    Number of Infants: ${infants}
    Total Rooms Required: ${roomsRequired}
  `;

  // Show the alert with the formatted details
  alert(alertMessage);

  // Reset the form after successful validation
  document.getElementById("validateStayForm").reset();
}
