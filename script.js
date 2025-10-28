// Select the container
const slider = document.querySelector('.items');

let isDown = false;    // Whether mouse is currently pressed
let startX;            // Starting X position of mouse
let scrollLeft;        // How far scrolled before drag started

// When mouse is pressed down
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active'); // Add grabbing effect
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// When mouse leaves the area
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// When mouse is released
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// When mouse moves while dragging
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Stop function if not dragging
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Speed multiplier
  slider.scrollLeft = scrollLeft - walk;
});

