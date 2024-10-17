function validateCarForm() {
    const checkInDate = new Date(document.getElementById('carCheckIn').value);
    const checkOutDate = new Date(document.getElementById('carCheckOut').value);
    const startDate = new Date('2024-09-01');
    const endDate = new Date('2024-12-01');

    const city = document.getElementById('carCity').value.toLowerCase();
    const validCities = ['austin', 'dallas', 'houston', 'san antonio', 'los angeles', 'san francisco'];

    if (!validCities.includes(city)) {
        alert('City must be in Texas or California.');
        return;
    }

    if (checkInDate < startDate || checkOutDate > endDate) {
        alert('Check-in and Check-out dates must be between Sep 1, 2024, and Dec 1, 2024.');
        return;
    }
    
    if (checkInDate >= checkOutDate) {
        alert("Check-in date must be before the Check-out date.")
    }

    const carType = document.getElementById('carType').value;
    alert(`Car search initiated for a ${carType} car!`);
}
