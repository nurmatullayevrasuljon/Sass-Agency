// Theme switching functionality
const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme
document.documentElement.setAttribute('data-theme',
    localStorage.getItem('theme') ||
    (prefersDark.matches ? 'dark' : 'light')
);

themeToggle.addEventListener('click', () => {
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => themeToggle.style.transform = '', 150);

    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Enhanced mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    const icon = mobileMenuBtn.querySelector('i');

    // Toggle menu state
    navLinks.classList.toggle('active');

    // Update icon and button state
    if (!isOpen) {
        icon.className = 'ri-close-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
        icon.className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') &&
        !e.target.closest('.mobile-menu') &&
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Enhanced active link handling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        e.target.closest('.nav-link').classList.add('active');

        // Close mobile menu after link click
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Add animation to nav links
const navLinkItems = document.querySelectorAll('.nav-link');
navLinkItems.forEach((link, index) => {
    link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
});

// Add hover effect to logo
const logo = document.querySelector('.nav-logo');
logo.addEventListener('mousemove', (e) => {
    const bound = logo.getBoundingClientRect();
    const x = e.clientX - bound.left;
    const y = e.clientY - bound.top;

    logo.style.setProperty('--x', `${x}px`);
    logo.style.setProperty('--y', `${y}px`);
});

// ------------------- Zoom-image --------------------- //
const modal = document.getElementsByClassName('idMyModal');
const img = document.getElementsByClassName('toZoom');
const modalImg = document.getElementsByClassName('modal-content');
for (let i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        modal[i].style.display = "block";
        // modal[i].style.element = "block";
        modalImg[i].src = this.src;
    }
}

var span = document.getElementsByClassName("close");
for (let i = 0; i < span.length; i++) {
    span[i].onclick = function() {
        modal[i].style.display = "none";
    }
}
// ------------------- Zoom-image --------------------- //

// ------------------- Counter-number --------------------- //
function animateCounter(id, target, duration) {
    let element = document.getElementById(id);
    let start = 0;
    let step = target / (duration / 15);

    function updateCounter() {
        start += step;
        if (start >= target) {
            element.innerText = target;
        } else {
            element.innerText = Math.floor(start);
            requestAnimationFrame(updateCounter);
        }
    }

    updateCounter();
}

window.onload = function() {
    animateCounter("count1", 8.2, 4000);
    animateCounter("count2", 120, 4000);
    animateCounter("count3", 97, 4000);
};

// ------------------- Counter-number --------------------- //

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
});

////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);

const animatedEls = document.querySelectorAll(
    '.bg-banner, .h-text, .h-text2, .a-text, .arrow, .star-text, .star-text2, .select-text, .select-text2, .proces-card, .price-card, .star-text3, .footer, [class*="row"]'
);

animatedEls.forEach((el, index) => {
    gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        delay: index * 0.02,
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// $(document).ready(function() {
//     const owl = $(".owl-carousel");
//     owl.owlCarousel({
//         items: 1,
//         loop: true,
//         margin: 10,
//         nav: true,
//         dots: true,
//         autoplay: true,
//         autoplayTimeout: 5000,
//         autoplayHoverPause: true
//     });

//     // Fix: Refresh GSAP triggers when carousel changes
//     owl.on('changed.owl.carousel', function() {
//         ScrollTrigger.refresh();
//     });
// });

// Servic-modal //
document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('open');
});