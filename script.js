// Display date and time
function displayDateTime() {
    const now = new Date();
    document.getElementById('dateTime').textContent = now.toLocaleString();
    setTimeout(displayDateTime, 1000);
}

// Change font size
function changeFontSize() {
    const size = document.getElementById('fontSize').value;
    document.body.style.fontSize = size + 'px';
}

// Change background color
function changeBgColor() {
    const color = document.getElementById('bgColor').value;
    document.body.style.backgroundColor = color;
}
