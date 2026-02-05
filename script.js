document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("taskButton");

  if (!btn) {
    console.warn('Button with id="taskButton" not found.');
    return;
  }

  btn.addEventListener("click", () => {
    alert("Task completed! Notification sent.");
  });
});