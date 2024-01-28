console.clear();

function toggleMobileNav() {
  var menu = document.getElementById("navlinks-mobile");
  menu.style.display = (menu.style.display === "none") ? "block" : "none";
}

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

// Add Animate class to testimonials
const testimonials = new IntersectionObserverHandler(".testimonials", ["animate__animated", "animate__fadeInRight"]);


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


document.addEventListener('DOMContentLoaded', function () {
  const monthlyButton = document.getElementById('monthlyButton');
  const annuallyButton = document.getElementById('annuallyButton');

  const annualplan1 = document.getElementById('annualplan1');
  const annualplan2 = document.getElementById('annualplan2');
  const annualplan3 = document.getElementById('annualplan3');

  const monthlyplan1 = document.getElementById('monthlyplan1');
  const monthlyplan2 = document.getElementById('monthlyplan2');
  const monthlyplan3 = document.getElementById('monthlyplan3');


  monthlyButton.addEventListener('click', function () {
      monthlyButton.classList.add('switch-button-active');
      monthlyButton.classList.remove('switch-button-inactive');
      annuallyButton.classList.add('switch-button-inactive');
      annuallyButton.classList.remove('switch-button-active');

      annualplan1.style.display = 'none';
      annualplan2.style.display = 'none';
      annualplan3.style.display = 'none';

      monthlyplan1.style.display = 'block';
      monthlyplan2.style.display = 'block';
      monthlyplan3.style.display = 'block';
     
      
  });

  annuallyButton.addEventListener('click', function () {
      annuallyButton.classList.add('switch-button-active');
      annuallyButton.classList.remove('switch-button-inactive');
      monthlyButton.classList.add('switch-button-inactive');
      monthlyButton.classList.remove('switch-button-active');

      annualplan1.style.display = 'block';
      annualplan2.style.display = 'block';
      annualplan3.style.display = 'block';

      monthlyplan1.style.display = 'none';
      monthlyplan2.style.display = 'none';
      monthlyplan3.style.display = 'none';

  });
});

// // Accordian Script

// document.addEventListener("DOMContentLoaded", function () {
//   const accordionItems = document.querySelectorAll(".accordion-item");

//   accordionItems.forEach(item => {
//     const title = item.querySelector(".accordion-title");
//     const content = item.querySelector(".accordion-content");

//     title.addEventListener("click", () => {
//       // Close all other accordion items
//       accordionItems.forEach(otherItem => {
//         if (otherItem !== item) {
//           otherItem.classList.remove("active");
//           otherItem.querySelector(".accordion-content").style.maxHeight = "0";
//         }
//       });

//       // Toggle the active class and open/close the content
//       item.classList.toggle("active");
//       content.style.maxHeight = item.classList.contains("active") ? content.scrollHeight + "px" : "0";
//     });
//   });
// });
