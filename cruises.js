function validateCruiseForm() {
    const destination = $('#destination').val();
    const departingDate = new Date($('#departing').val());
    const minDuration = parseInt($('#minDuration').val());
    const maxDuration = parseInt($('#maxDuration').val());
    const guests = parseInt($('#cruiseGuests').val());
    const startDate = new Date('2024-09-01');
    const endDate = new Date('2024-12-01');

    if (departingDate < startDate || departingDate > endDate) {
        alert('Departing date must be between Sep 1, 2024, and Dec 1, 2024.');
        return;
    }

    if (minDuration < 3 || maxDuration > 10 || minDuration > maxDuration) {
        alert('Duration must be between 3 and 10 days.');
        return;
    }

    if (guests > 2) {
        alert('Each room can only have up to 2 guests. Infants can stay with adults.');
        return;
    }

    alert(`Cruise search initiated for ${destination}!`);
}
