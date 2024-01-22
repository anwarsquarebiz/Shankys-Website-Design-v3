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