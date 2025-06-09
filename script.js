// Config
const TARGET_DATE = new Date('2025-07-06T11:00:00').getTime(); // Format -> YYYY-MM-DD

// Alternative: Set countdown for a specific number of days from now
// const TARGET_DATE = new Date().getTime() + (30 * 24 * 60 * 60 * 1000); // 30 days from now

// Get DOM elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Function to pad numbers with leading zero
function padNumber(num) {
    return num.toString().padStart(2, '0');
}

// Function to add update animation
function animateUpdate(element) {
    element.classList.add('updating');
    setTimeout(() => {
        element.classList.remove('updating');
    }, 200);
}

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = TARGET_DATE - now;

    // If countdown is finished
    if (distance < 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display with animation
    const newDays = padNumber(days);
    const newHours = padNumber(hours);
    const newMinutes = padNumber(minutes);
    const newSeconds = padNumber(seconds);

    if (daysElement.textContent !== newDays) {
        daysElement.textContent = newDays;
        animateUpdate(daysElement);
    }
    
    if (hoursElement.textContent !== newHours) {
        hoursElement.textContent = newHours;
        animateUpdate(hoursElement);
    }
    
    if (minutesElement.textContent !== newMinutes) {
        minutesElement.textContent = newMinutes;
        animateUpdate(minutesElement);
    }
    
    if (secondsElement.textContent !== newSeconds) {
        secondsElement.textContent = newSeconds;
        animateUpdate(secondsElement);
    }
}

// Initialize countdown
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// Optional: Log when countdown ends
setInterval(() => {
    const now = new Date().getTime();
    const distance = TARGET_DATE - now;
    
    if (distance < 0) {
        console.log('Countdown finished!');
        // You can add custom logic here when countdown ends, for now I'll leave it empty. I don't really have much time for projects
    }
}, 1000);