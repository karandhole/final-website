$(document).ready(function() {
    // Set 'Expertise' menu item active
    $('.nav a[href="projects.html"]').addClass('active');

    // Also check for submenu items
    if (window.location.pathname.split("/").pop() === 'Project1.html') {
        $('.submenu-item a[href="Project1.html"]').addClass('active');
        $('.dropdown-toggle[href="Project.html"]').addClass('active'); // Parent menu
    } else if (window.location.pathname.split("/").pop() === 'Project2.html') {
        $('.submenu-item a[href="Project2.html"]').addClass('active');
        $('.dropdown-toggle[href="Project.html"]').addClass('active');
    } else if (window.location.pathname.split("/").pop() === 'Project3.html') {
        $('.submenu-item a[href="Project3.html"]').addClass('active');
        $('.dropdown-toggle[href="Project.html"]').addClass('active');
    } else if (window.location.pathname.split("/").pop() === 'Project4.html') {
        $('.submenu-item a[href="Project4.html"]').addClass('active');
        $('.dropdown-toggle[href="Project.html"]').addClass('active');
    } else if (window.location.pathname.split("/").pop() === 'Project5.html') {
        $('.submenu-item a[href="Project5.html"]').addClass('active');
        $('.dropdown-toggle[href="Project.html"]').addClass('active');
    }else if (window.location.pathname.split("/").pop() === 'Project6.html') {
        $('.submenu-item a[href="Project6.html"]').addClass('active');
        $('.dropdown-toggle[href="Project.html"]').addClass('active');
    }
});



document.addEventListener('DOMContentLoaded', () => {
const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const prevBtn = document.getElementById('prev'); // Corrected button selector
const nextBtn = document.getElementById('next'); // Corrected button selector
const paginationBullets = document.querySelectorAll('.indicators ul li');

let currentIndex = 0;
const totalSlides = slides.length;

const updateSliderPosition = () => {
swiperWrapper.style.transition = 'transform 0.5s ease-in-out';
swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

// Update pagination bullets
paginationBullets.forEach((bullet, index) => {
  bullet.classList.toggle('active', index === currentIndex);
});
};

const showNextSlide = () => {
if (currentIndex >= totalSlides - 1) {
  swiperWrapper.style.transition = 'none'; // Remove transition
  swiperWrapper.style.transform = 'translateX(0)'; // Jump to the first slide
  currentIndex = 0;
  setTimeout(() => {
      swiperWrapper.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      currentIndex++;
      updateSliderPosition();
  }, 200); // Delay for smooth transition
} else {
  currentIndex++;
  updateSliderPosition();
}
};

const showPrevSlide = () => {
if (currentIndex <= 0) {
  swiperWrapper.style.transition = 'none'; // Remove transition
  swiperWrapper.style.transform = `translateX(-${(totalSlides - 1) * 100}%)`; // Jump to the last slide
  currentIndex = totalSlides - 1;
  setTimeout(() => {
      swiperWrapper.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      currentIndex--;
      updateSliderPosition();
  }, 50); // Delay for smooth transition
} else {
  currentIndex--;
  updateSliderPosition();
}
};

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

paginationBullets.forEach((bullet, index) => {
bullet.addEventListener('click', () => {
  currentIndex = index;
  updateSliderPosition();
});
});

// Initialize the slider
updateSliderPosition();
});

  //for products page highlight

 