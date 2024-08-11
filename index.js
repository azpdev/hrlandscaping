const START_HOUR = 7;
const END_HOUR = 17;
const currentDate = new Date(
  new Date().toLocaleString("en-US", { timeZone: "America/Denver" })
);

function getOpening(date) {
  // Check Sunday
  let day = date.getDay();
  if (day === 0) {
    return "Opens tomorrow at 7 AM MST";
  }

  // Check Hour
  let hour = date.getHours();

  if (hour < START_HOUR) {
    return "Opening at 7 AM MST";
  }
  if (hour >= END_HOUR) {
    if (day === 6) {
      return "Opens on Monday at 7 AM MST";
    }
    return "Opens tomorrow at 7 AM MST";
  }
  return "Open until 5 PM MST";
}

window.addEventListener("load", () => {
  document.getElementById("business-hours").innerHTML = getOpening(currentDate);
  setTimeout(() => {
    document.getElementById("business-hours").classList.add("animate-hours");
  }, 100);
});

console.log(currentDate.getHours());
