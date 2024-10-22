function validateCruiseForm() {
  const destination = $("#destination").val();
  const departingDate = new Date($("#departing").val());
  const minDuration = parseInt($("#minDuration").val());
  const maxDuration = parseInt($("#maxDuration").val());

  // Get the values from the new fields without validation
  const adults = parseInt($("#adults").val());
  const children = parseInt($("#children").val());
  const infants = parseInt($("#infants").val());

  const startDate = new Date("2024-09-01");
  const endDate = new Date("2024-12-01");

  if (departingDate < startDate || departingDate > endDate) {
    alert("Departing date must be between Sep 1, 2024, and Dec 1, 2024.");
    return;
  }

  if (minDuration < 3 || maxDuration > 10 || minDuration > maxDuration) {
    alert("Duration must be between 3 and 10 days.");
    return;
  }

  // Check if the number of adults is at least one
  if (adults < 1) {
    alert("At least one adult is required for booking.");
    return;
  }

  // Ensure non-negative numbers for all fields
  if (adults < 0 || children < 0 || infants < 0) {
    alert("The number of adults, children, and infants must be non-negative.");
    return;
  }

  // Total guests excluding infants
  const totalGuests = adults + children;

  // Calculate the number of rooms required
  let roomsRequired = Math.ceil(totalGuests / 2);

  // Display all information in an alert
  alert(`
        Cruise Search Details:
        Destination: ${destination}
        Departing Date: ${departingDate.toLocaleDateString()}
        Duration: ${minDuration} - ${maxDuration} Days
        Adults: ${adults}
        Children: ${children}
        Infants: ${infants}
        Total Rooms Required: ${roomsRequired}
    `);

  // Reset the form after successful validation
  document.getElementById("cruiseForm").reset();
}
