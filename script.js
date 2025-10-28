const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

// Mousedown
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

// Mouseleave
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mouseup
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mousemove
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();

  // Calculate drag distance
  const walk = (e.pageX - startX) * 2;

  // Update scroll position
  slider.scrollLeft = scrollLeft - walk;
});
