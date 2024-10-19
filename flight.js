//importing cities data
// Load cities data from cities.json dynamically
let cityData = { cities: [] }; // Default structure in case fetch fails

fetch("./cities.json")
  .then((response) => response.json())
  .then((data) => {
    cityData = data;
  })
  .catch((error) => {
    console.error("Error loading city data:", error);
  });

// Show passenger form when the icon is clicked
// Show or hide the passenger form when the icon is clicked and set required attribute accordingly
function showPassengerForm() {
  const passengerForm = document.getElementById("passengerForm");
  const isVisible = passengerForm.style.display === "block";

  // Toggle form visibility
  passengerForm.style.display = isVisible ? "none" : "block";

  // Get passenger input fields
  const adults = document.getElementById("adults");
  const children = document.getElementById("children");
  const infants = document.getElementById("infants");

  // Set required attributes based on form visibility
  if (isVisible) {
    adults.removeAttribute("required");
    children.removeAttribute("required");
    infants.removeAttribute("required");
  } else {
    adults.setAttribute("required", true);
    children.setAttribute("required", true);
    infants.setAttribute("required", true);
  }
}

// Toggle return date field visibility
function toggleReturnDate(show) {
  const returnDateField = document.getElementById("returnDate");
  const returnDateContainer = document.getElementById("returnDateContainer");

  if (show) {
    returnDateContainer.style.display = "block";
    returnDateField.setAttribute("required", true); // Add required when visible
  } else {
    returnDateContainer.style.display = "none";
    returnDateField.removeAttribute("required"); // Remove required when hidden
  }
}

// Validate the flight form including passenger and flight details
// Validate the flight form including passenger and flight details
function validateFlightForm() {
  // Get input values
  const origin = document.getElementById("origin").value.trim().toLowerCase();
  const destination = document
    .getElementById("destination")
    .value.trim()
    .toLowerCase();
  const departureDate = document.getElementById("departureDate").value;
  const returnDateElement = document.getElementById("returnDate");
  const returnDate = returnDateElement.value ? returnDateElement.value : null;

  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;
  const infants = document.getElementById("infants").value;

  // Regular expression for Texas and California cities
  const validCities = cityData.cities;

  // Regex for the date validation (YYYY-MM-DD format)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const startDate = new Date("2024-09-01");
  const endDate = new Date("2024-12-01");

  // Regex to validate that passengers are between 0 and 4
  const passengerRegex = /^[0-4]$/;

  // Validation for origin and destination
  if (!validCities.includes(origin)) {
    alert("Origin must be a city in Texas or California.");
    return;
  }

  if (!validCities.includes(destination)) {
    alert("Destination must be a city in Texas or California.");
    return;
  }

  // Validation for departure date
  if (!dateRegex.test(departureDate)) {
    alert("Please enter a valid departure date in the format YYYY-MM-DD.");
    return;
  }
  const depDateObj = new Date(departureDate);
  if (depDateObj < startDate || depDateObj > endDate) {
    alert("Departure date must be between Sep 1, 2024, and Dec 1, 2024.");
    return;
  }

  // Validation for return date (only if round trip is selected)
  if (returnDate) {
    if (!dateRegex.test(returnDate)) {
      alert("Please enter a valid return date in the format YYYY-MM-DD.");
      return;
    }
    const returnDateObj = new Date(returnDate);
    if (returnDateObj <= depDateObj) {
      alert("Return date must be after the departure date.");
      return;
    }
  }

  // Passenger count validation using regex
  if (!passengerRegex.test(adults)) {
    alert("Number of adults must be between 0 and 4.");
    return;
  }
  if (!passengerRegex.test(children)) {
    alert("Number of children must be between 0 and 4.");
    return;
  }
  if (!passengerRegex.test(infants)) {
    alert("Number of infants must be between 0 and 4.");
    return;
  }

  // Build the alert message for the flight details
  let flightDetails = `Flight Details:\nOrigin: ${capitalize(
    origin
  )}\nDestination: ${capitalize(
    destination
  )}\nDeparture Date: ${depDateObj.toDateString()}`;

  // Include the return date if it exists
  if (returnDate) {
    flightDetails += `\nReturn Date: ${new Date(returnDate).toDateString()}`;
  }

  // Include passengers only if they have been set
  if (adults) {
    flightDetails += `\nAdults: ${adults}`;
  }
  if (children) {
    flightDetails += `\nChildren: ${children}`;
  }
  if (infants) {
    flightDetails += `\nInfants: ${infants}`;
  }

  // Display the flight details
  alert(flightDetails);

  // Reset the form after displaying details
  document.getElementById("flightForm").reset();
}

// Helper function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
