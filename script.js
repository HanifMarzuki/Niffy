// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Down Arrow Animation
const scrollDownArrow = document.querySelector('.scroll-down-arrow');
scrollDownArrow.addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.about').offsetTop,
        behavior: 'smooth'
    });
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

// Auto-slide testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// Initial Display
showTestimonial(currentTestimonial);
