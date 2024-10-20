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

function validateCarForm() {
  const checkInDate = new Date(document.getElementById("carCheckIn").value);
  const checkOutDate = new Date(document.getElementById("carCheckOut").value);
  const startDate = new Date("2024-09-01");
  const endDate = new Date("2024-12-01");

  const city = document.getElementById("carCity").value.toLowerCase();
  const validCities = cityData.cities;

  if (!validCities.includes(city)) {
    alert("City must be in Texas or California.");
    return;
  }

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

  const carType = document.getElementById("carType").value;

  // Displaying all the information entered by the user in the alert
  const message = `City: ${
    city.charAt(0).toUpperCase() + city.slice(1)
  }\nCar Type: ${carType}\nCheck-in Date: ${checkInDate.toDateString()}\nCheck-out Date: ${checkOutDate.toDateString()}`;
  alert(message);
}
