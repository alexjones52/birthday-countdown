// Trigger confetti as soon as the page loads
window.onload = function() {
    confetti(); // This triggers the confetti effect on page load
};

// Set the date for your wife's birthday
const birthday = new Date("August 9, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = birthday - now;

    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // When the countdown is over, display a message
    if (timeLeft <= 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Happy Birthday!";
    }
}, 1000);
