export default function displayTime(hour, minutes, seconds, stopwatch) {
  const leadZeroTime = [hour, minutes, seconds].map((time) =>
    time < 10 ? `0${time}` : time
  );
  stopwatch.currentTime = leadZeroTime.join(":");
}
