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

  //////////////////////////////////////////////////////for 3d images ///////////////////////////////////////////////////////////////

 









  const sliderContainer = document.querySelector('.dslider-container');
  const slides = Array.from(document.querySelectorAll('.slide1'));
  let currentIndex = 1;
  
  // Clone the first and last slides
  const firstSlideClone = slides[0].cloneNode(true);
  const lastSlideClone = slides[slides.length - 1].cloneNode(true);
  
  // Append and prepend the clones
  sliderContainer.appendChild(firstSlideClone);
  sliderContainer.insertBefore(lastSlideClone, slides[0]);
  
  // Update the slides list after adding clones
  const updatedSlides = Array.from(document.querySelectorAll('.slide1'));
  
  // Set the initial position to the first actual slide
  sliderContainer.style.transform = `translateX(-${100}%)`;
  
  // Function to move to the next slide
  function showNextSlide() {
      currentIndex++;
      updateSlidePosition();
  }
  
  // Function to move to the previous slide
  function showPreviousSlide() {
      currentIndex--;
      updateSlidePosition();
  }
  
  // Function to update the slide position
  function updateSlidePosition() {
      sliderContainer.style.transition = 'transform 0.5s ease-in-out';
      sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  
      // Adjust position after transition ends for a continuous loop
      sliderContainer.addEventListener('transitionend', handleTransitionEnd);
  }
  
  // Adjusts the index to create a seamless loop
  function handleTransitionEnd() {
      if (currentIndex === updatedSlides.length - 1) {
          // If it's the last clone, reset to the first slide
          sliderContainer.style.transition = 'none';
          currentIndex = 1;
          sliderContainer.style.transform = `translateX(-${100}%)`;
      } else if (currentIndex === 0) {
          // If it's the first clone, reset to the last slide
          sliderContainer.style.transition = 'none';
          currentIndex = updatedSlides.length - 2;
          sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      
      // Remove event listener to avoid stacking events
      sliderContainer.removeEventListener('transitionend', handleTransitionEnd);
  }
  
  ///////////////////////////


  // Add a click event listener to the link
  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
