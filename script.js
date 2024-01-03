document.addEventListener("DOMContentLoaded", function() {
  // Function to handle the intersection changes
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation class when the element is visible
        entry.target.classList.add("animate__animated", "animate__jackInTheBox");        
        // Stop observing once the animation class is added
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  // Target the element you want to observe
  const serviceTitleElement = document.querySelector(".service-section-title");

  // Start observing the element
  if (serviceTitleElement) {
    observer.observe(serviceTitleElement);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Function to handle the intersection changes
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation classes when the element is visible
        entry.target.classList.add("animate__animated", "animate__fadeInDown");

        // Stop observing once the animation classes are added
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  // Target the elements you want to observe
  const gridItems = document.querySelectorAll(".grid-container > div");

  // Start observing each grid item
  gridItems.forEach(item => {
    observer.observe(item);
  });
});