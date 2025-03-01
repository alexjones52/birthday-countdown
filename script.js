// Set the date you're counting down to
const countdownDate = new Date("Aug 9, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Find the time difference between now and the countdown date
  const distance = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Happy Birthday!";
    document.querySelector(".message").innerHTML = "Let's celebrate!";
  }
}, 1000);
