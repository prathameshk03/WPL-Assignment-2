// Show passenger form when the icon is clicked
function showPassengerForm() {
    document.getElementById('passengerForm').style.display = 'block';
}

// Toggle return date field visibility
function toggleReturnDate(show) {
    document.getElementById('returnDateContainer').style.display = show ? 'block' : 'none';
}

// Validate the flight form including passenger and flight details
function validateFlightForm() {
    // Get input values
    const origin = document.getElementById('origin').value.trim().toLowerCase();
    const destination = document.getElementById('destination').value.trim().toLowerCase();
    const departureDate = new Date(document.getElementById('departureDate').value);
    const returnDateElement = document.getElementById('returnDate');
    const returnDate = returnDateElement.value ? new Date(returnDateElement.value) : null;
    const adults = parseInt(document.getElementById('adults').value);
    const children = parseInt(document.getElementById('children').value);
    const infants = parseInt(document.getElementById('infants').value);

    // Regular expression for Texas and California cities
    const validCities = ['austin', 'dallas', 'houston', 'san antonio', 'los angeles', 'san francisco', 'sacramento', 'san diego'];
    const startDate = new Date('2024-09-01');
    const endDate = new Date('2024-12-01');

    // Validation for origin and destination
    if (!validCities.includes(origin)) {
        alert('Origin must be a city in Texas or California.');
        return;
    }

    if (!validCities.includes(destination)) {
        alert('Destination must be a city in Texas or California.');
        return;
    }

    // Validation for departure date
    if (departureDate < startDate || departureDate > endDate) {
        alert('Departure date must be between Sep 1, 2024, and Dec 1, 2024.');
        return;
    }

    // Validation for return date (only if round trip is selected)
    if (returnDate && returnDate <= departureDate) {
        alert('Return date must be after the departure date.');
        return;
    }

    // Validation for number of passengers (max 4 per category)
    if (adults > 4 || children > 4 || infants > 4) {
        alert('Number of passengers for each category cannot exceed 4.');
        return;
    }

    // Display entered information
    let flightDetails = `Flight Details:\nOrigin: ${origin.charAt(0).toUpperCase() + origin.slice(1)}\nDestination: ${destination.charAt(0).toUpperCase() + destination.slice(1)}\nDeparture Date: ${departureDate.toDateString()}\nPassengers:\nAdults: ${adults}\nChildren: ${children}\nInfants: ${infants}`;
    
    // Add return date information if applicable
    if (returnDate) {
        flightDetails += `\nReturn Date: ${returnDate.toDateString()}`;
    }

    alert(flightDetails);

    document.getElementById("flightForm").reset();
}
