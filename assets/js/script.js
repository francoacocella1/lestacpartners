// Menu Toggle Functionality
function toggleMenu(header) {
    const menuItem = header.parentNode;
    const isExpanded = menuItem.classList.contains('expanded');

    // Collapse all items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('expanded');
        item.querySelector('.menu-content').style.maxHeight = "0"; // Collapse
        const toggleSpan = item.querySelector('.menu-toggle');
        if (toggleSpan) toggleSpan.textContent = '+'; // Reset to '+'
    });

    // Expand the clicked item
    if (!isExpanded) {
        menuItem.classList.add('expanded');
        const content = menuItem.querySelector('.menu-content');
        content.style.maxHeight = content.scrollHeight + "px"; // Expand to content height
        const toggleSpan = menuItem.querySelector('.menu-toggle');
        if (toggleSpan) toggleSpan.textContent = '−'; // Set to '−'
    }
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header Scroll Behavior
let lastScrollY = 0;
const header = document.querySelector('.header');
const scrollThreshold = 10; // Minimum scroll difference to detect changes

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add the "scrolled" class only when not at the top of the page
    if (currentScrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Check scrolling direction and threshold for hiding the header
    if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            header.classList.add('hidden'); // Hide the header when scrolling down
        } else {
            header.classList.remove('hidden'); // Show the header when scrolling up
        }
        lastScrollY = currentScrollY;
    }
});

// Hamburger Menu Toggle
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});