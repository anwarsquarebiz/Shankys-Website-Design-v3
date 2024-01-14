console.clear();

function toggleMobileNav() {
  var menu = document.getElementById("navlinks-mobile");
  menu.style.display = (menu.style.display === "none") ? "block" : "none";
}




//   document.addEventListener("DOMContentLoaded", function() {
//     // Function to handle the intersection changes
//     function handleIntersection(entries, observer) {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Add the animation class when the element is visible
//           entry.target.classList.add("animate__animated", "animate__fadeIn");        
//           // Stop observing once the animation class is added
//           observer.unobserve(entry.target);
//         }
//       });
//     }
  
//     // Create an Intersection Observer
//     const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  
//     // Target the element you want to observe
//     const serviceTitleElement = document.querySelector(".service-section-title");
  
//     // Start observing the element
//     if (serviceTitleElement) {
//       observer.observe(serviceTitleElement);
//     }
//   });

// document.addEventListener("DOMContentLoaded", function() {
//   // Function to handle the intersection changes
//   function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // Add the animation class when the element is visible
//         entry.target.classList.add("animate__animated", "animate__fadeIn");        
//         // Stop observing once the animation class is added
//         observer.unobserve(entry.target);
//       }
//     });
//   }

//   // Create an Intersection Observer
//   const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

//   // Target the element you want to observe
//   const serviceTitleElement = document.querySelector(".service-section-title");

//   // Start observing the element
//   if (serviceTitleElement) {
//     observer.observe(serviceTitleElement);
//   }
// });

// document.addEventListener("DOMContentLoaded", function() {
//   // Function to handle the intersection changes
//   function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // Add the animation classes when the element is visible
//         entry.target.classList.add("animate__animated", "animate__fadeInUp");

//         // Stop observing once the animation classes are added
//         observer.unobserve(entry.target);
//       }
//     });
//   }

//   // Create an Intersection Observer
//   const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

//   // Target the elements you want to observe
//   const gridItems = document.querySelectorAll(".grid-container > div");

//   // Start observing each grid item
//   gridItems.forEach(item => {
//     observer.observe(item);
//   });
// });


// Class to add CSS Classes when in view

class IntersectionObserverHandler {
  constructor(targetSelector, classesToAdd = []) {
    this.targetSelector = targetSelector;
    this.classesToAdd = classesToAdd;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver(this.handleIntersection, { threshold: 0.2 });
      const targetElement = document.querySelector(this.targetSelector);

      if (targetElement) {
        observer.observe(targetElement);
      }
    });
  }

  handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.classesToAdd.forEach(className => {
          entry.target.classList.add(className);
        });
        observer.unobserve(entry.target);
      }
    });
  }
}

// Usage

// Add Animate class to service-section-title 
const servicesectiontitle = new IntersectionObserverHandler(".service-section-title", ["animate__animated", "animate__fadeIn"]);

// Add Animate class to grid-container 
const gridcontainer = new IntersectionObserverHandler(".grid-container", ["animate__animated", "animate__fadeInUp"]);

// Add Animate class to pricing-section-title 
const pricingsectiontitle = new IntersectionObserverHandler(".pricing-section-title", ["animate__animated", "animate__fadeIn"]);

// Add Animate class to plans-container 
const planscontainer = new IntersectionObserverHandler(".plans-container", ["animate__animated", "animate__fadeInUp"]);

// Add Animate class to features-section-title
const featuressectiontitle = new IntersectionObserverHandler(".features-section-title", ["animate__animated", "animate__fadeIn"]);

// Add Animate class to features-container
const featurescontainer = new IntersectionObserverHandler(".features-container", ["animate__animated", "animate__fadeInUp"]);

// Add Animate class to seminar-section
const seminarsection = new IntersectionObserverHandler(".seminar-section", ["animate__animated", "animate__fadeInUp"]);

// Add Animate class to testimonial-subtitle
const testimonialsubtitle = new IntersectionObserverHandler(".testimonial-subtitle", ["animate__animated", "animate__fadeInRight"]);

// Add Animate class to single-testimonial
const singletestimonial = new IntersectionObserverHandler(".single-testimonial", ["animate__animated", "animate__fadeInRight"]);

// Add Animate class to testimonial-scrolls
const testimonialscrolls = new IntersectionObserverHandler(".testimonial-scrolls", ["animate__animated", "animate__fadeInUp"]);

// Add Animate class to accomplishments-section-title
const accomplishmentssectiontitle = new IntersectionObserverHandler(".accomplishments-section-title", ["animate__animated", "animate__fadeIn"]);

// Add Animate class to accomplishments
const accomplishments = new IntersectionObserverHandler(".accomplishments", ["animate__animated", "animate__fadeInUp"]);

// Add Animate class to accordian-section-title
const accordiansectiontitle = new IntersectionObserverHandler(".accordian-section-title", ["animate__animated", "animate__fadeIn"]);

// Add Animate class to accordion
const accordion = new IntersectionObserverHandler(".accordion", ["animate__animated", "animate__fadeInUp"]);

// Add Animate class to contact-us-section
const contactussection = new IntersectionObserverHandler(".contact-us-section", ["animate__animated", "animate__fadeInUp"]);



