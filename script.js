const wrapper = document.querySelector(".testimonial-wrapper");
const testimonials = document.querySelectorAll(".testimonial");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let index = 0;
const visibleTestimonials = 3;
const totalTestimonials = testimonials.length;
const step = 32; // Adjust based on card width + margin

function updateSlider() {
    let offset = -index * step;
    wrapper.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    if (index < totalTestimonials - visibleTestimonials) {
        index++;
    } else {
        index = 0; // Loop back to the start
    }
    updateSlider();
}

function prevSlide() {
    if (index > 0) {
        index--;
    } else {
        index = totalTestimonials - visibleTestimonials; // Loop to the end
    }
    updateSlider();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

setInterval(nextSlide, 5000); // Auto-slide every 5 seconds