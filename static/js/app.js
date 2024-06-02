document.addEventListener('DOMContentLoaded', function() {
    function formatDateString(dateString) {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    }

    function updateTime() {
        const dateTimeElement = document.querySelector('h1#timezone');
        const now = new Date();
        dateTimeElement.textContent = formatDateString(now.toISOString());
    }

    // Update the time immediately when the page loads
    updateTime();

    // Update the time every second (1000 milliseconds)
    setInterval(updateTime, 1000);
});
