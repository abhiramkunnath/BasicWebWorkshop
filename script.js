const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  window.alert(
    "Thank you for your interest! We will get in touch with you soon."
  );
});

const cursor = document.querySelector(".custom-cursor");
const cursorText = document.querySelector(".cursor-text");

// Move cursor
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Grow on links
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
});

// Show "View Image" on images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    cursor.classList.add("image-hover");
    cursorText.textContent = "View";
  });
  img.addEventListener("mouseleave", () => {
    cursor.classList.remove("image-hover");
    cursorText.textContent = "";
  });
});
