function validateStayForm() {
    const checkInDate = new Date(document.getElementById('checkIn').value);
    const checkOutDate = new Date(document.getElementById('checkOut').value);
    const startDate = new Date('2024-09-01');
    const endDate = new Date('2024-12-01');

    const city = document.getElementById('city').value.toLowerCase();
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

    const adults = parseInt(document.getElementById('adults').value);
    const children = parseInt(document.getElementById('children').value);
    const infants = parseInt(document.getElementById('infants').value);

    const totalGuests = adults + children;
    if (totalGuests > 2 && infants === 0) {
        alert('Each room can only have up to 2 guests. Infants can stay with adults.');
        return;
    }

    alert('Stay search initiated!');
}
