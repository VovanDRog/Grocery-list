export default function formatDate(dateStr) {
  const date = new Date(dateStr);
  var year = date.getFullYear(),
    month = date.getMonth() + 1, // months are zero indexed
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
    minuteFormatted = minute < 10 ? "0" + minute : minute,
    morning = hour < 12 ? "am" : "pm";

  return (
    month +
    "/" +
    day +
    "/" +
    year +
    " " +
    hourFormatted +
    ":" +
    minuteFormatted +
    ":" +
    second +
    " " + 
    morning
  );
}
