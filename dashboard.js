// Password Change Toggle 
function togglepasswordchange() {
    var passwordChangeOption = document.getElementById("password_change_option");
    passwordChangeOption.classList.toggle("fade-in-animation");
    if (passwordChangeOption.style.display === "none") {
        passwordChangeOption.style.display = "flex";
    } else {
        passwordChangeOption.style.display = "none";
    }
}

// Toggle mobile menu
function toggleHideOnMobile() {
    console.log('Toggle Hide On Mobile');
    const sideNavbar = document.getElementById('side-navbar');
    sideNavbar.classList.toggle('hide-on-mobile');
    console.log('Toggle Hide On Mobile');
}


document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('scroll-container');
    const scrollAmount = 330; // Adjust the scroll amount as needed
    let currentScroll = 0;
  
    function scrollLeft() {
      currentScroll = Math.max(currentScroll - scrollAmount, 0);
      container.style.transform = `translateX(-${currentScroll}px)`;
    }
  
    function scrollRight() {
      const maxScroll = container.scrollWidth - container.clientWidth;
      currentScroll = Math.min(currentScroll + scrollAmount, maxScroll);
      container.style.transform = `translateX(-${currentScroll}px)`;
    }
  
    const leftButton = document.getElementById('scroll-left-button');
    const rightButton = document.getElementById('scroll-right-button');
  
    leftButton.addEventListener('click', scrollLeft);
    rightButton.addEventListener('click', scrollRight);
  });
  


// Courses Carousel
// $(document).ready(function(){
//     $('.customer-logos').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 1500,
//     arrows: true,
//     dots: false,
//     pauseOnHover: false,
//     prevArrow: '<div>Prev</div>',
//     nextArrow: '<div>Next</div>',
//     responsive: [{
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3
//       }
//     }, {
//       breakpoint: 520,
//       settings: {
//         slidesToShow: 2
//       }
//     }]
//     });
//   });