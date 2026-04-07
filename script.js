// Toggle the main mobile menu
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Toggle the submenu on mobile devices
const hobbiesBtn = document.getElementById('hobbies-btn');
const hobbiesSubmenu = document.getElementById('hobbies-submenu');

hobbiesBtn.addEventListener('click', (e) => {
    // Check if we are on a mobile screen (width less than 768px)
    if (window.innerWidth <= 768) {
        e.preventDefault(); // Prevents the link from navigating away immediately
        
        // Toggle the display of the submenu
        if (hobbiesSubmenu.style.display === 'block') {
            hobbiesSubmenu.style.display = 'none';
        } else {
            hobbiesSubmenu.style.display = 'block';
        }
    }
});

// Ensure submenu resets if the window is resized back to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hobbiesSubmenu.style.display = ''; 
        navLinks.classList.remove('active');
    }
});
