function getCurrentUTCTime() {
  const now = new Date();

  // Get the current hours, minutes, and seconds in UTC
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();

  // Format the time as HH:MM:SS
  const formattedUTCTime =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  return formattedUTCTime;
}

document.getElementById("currentTimeUTC").textContent = getCurrentUTCTime();

// Update the time every second
setInterval(() => {
  document.getElementById("currentTimeUTC").textContent = getCurrentUTCTime();
}, 1000);

// Function to get the current day of the week
function getCurrentDayOfWeek() {
  const now = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[now.getDay()]; // getDay() returns 0-6, representing Sunday-Saturday
  return currentDay;
}

// Display the current day of the week
document.getElementById("currentDay").textContent = getCurrentDayOfWeek();
