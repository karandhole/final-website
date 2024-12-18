document.addEventListener('DOMContentLoaded', function () {
    // Sidebar Navigation
    const sidebarLinks = document.querySelectorAll('.product-side-navbar a');
    const sections = document.querySelectorAll('.product-container-area .product-wrapper');

    // Handle click event for sidebar links
    sidebarLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            // Scroll to the corresponding section
            sections[index].scrollIntoView({ behavior: 'smooth' });

            // Update active state in sidebar
            sidebarLinks.forEach(item => item.classList.remove('current'));
            link.classList.add('current');
        });

        // Add hover effect for sidebar links
        link.addEventListener('mouseover', () => {
            link.classList.add('hovered'); // Add class for hover effect
        });

        link.addEventListener('mouseout', () => {
            link.classList.remove('hovered'); // Remove class when hover ends
        });
    });

    // Intersection Observer to highlight active section in sidebar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust this threshold based on when you want to trigger the active link
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                sidebarLinks.forEach(link => link.classList.remove('current'));
                sidebarLinks[index].classList.add('current');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // Handle click event for submenu items
    const submenuItems = document.querySelectorAll('.submenu-item a');
    submenuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Allow default link behavior to proceed
            const dropdownContent = item.closest('.dropdown-content'); // Select the correct dropdown
            if (dropdownContent) {
                dropdownContent.classList.remove('show'); // Close the dropdown after click
            }
        });
    });
});




/**     ///////////////////////for buttons  /////////////////////////////*/


// const buttons = document.querySelectorAll('button');

// buttons.forEach( button =>{
// button.addEventListener('click',()=>{
// const faq = button.nextElementSibling;
// const icon = button.children[1];

// faq.classList.toggle('show');
// icon.classList.toggle('rotate');
// })
// } )



const buttons = document.querySelectorAll('.question button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.nextElementSibling; // Select the <p> below the button
    const icon = button.querySelector('i'); // Select the <i> inside the button

    // Close all other FAQs except the clicked one
    buttons.forEach(btn => {
      const otherFaq = btn.nextElementSibling;
      const otherIcon = btn.querySelector('i');

      // Close all other FAQs that are not the clicked one
      if (otherFaq !== faq) {
        otherFaq.classList.remove('show');
        otherIcon.classList.remove('rotate');
      }
    });

    // Toggle the clicked FAQ open/close
    faq.classList.toggle('show');
    icon.classList.toggle('rotate');
  });
});





const button1= document.querySelectorAll('.question1 button');

button1.forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.nextElementSibling; // Select the <p> below the button
    const icon = button.querySelector('i'); // Select the <i> inside the button

    // Close all other FAQs except the clicked one
    button1.forEach(btn => {
      const otherFaq = btn.nextElementSibling;
      const otherIcon = btn.querySelector('i');

      // Close all other FAQs that are not the clicked one
      if (otherFaq !== faq) {
        otherFaq.classList.remove('show');
        otherIcon.classList.remove('rotate');
      }
    });

    // Toggle the clicked FAQ open/close
    faq.classList.toggle('show');
    icon.classList.toggle('rotate');
  });
});



/*             for side bar  */



    document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.product-side-navbar');
    const lastSection = document.querySelector('.last-section');

    function handleSidebarVisibility() {
        const sidebarHeight = sidebar.offsetHeight;
        const sidebarBottom = window.scrollY + sidebarHeight + 60; // 60px is the top offset for the sidebar
        const lastSectionTop = lastSection.offsetTop;

        // Check if the sidebar bottom is reaching the last section's top
        if (sidebarBottom >= lastSectionTop) {
            sidebar.classList.add('hidden'); // Hide the sidebar
        } else {
            sidebar.classList.remove('hidden'); // Show the sidebar again when above the last section
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleSidebarVisibility);
});

      

/* for sidebar      */


$(document).ready(function() {
// Set 'Expertise' menu item active
$('.nav a[href="#"]').addClass('active');


});



// for slider

document.addEventListener('DOMContentLoaded', function () {
// Sidebar Navigation
const sidebarLinks = document.querySelectorAll('.product-side-navbar a');
const sections = document.querySelectorAll('.product-container-area .product-wrapper > div');

sidebarLinks.forEach((link, index) => {
link.addEventListener('click', () => {
    // Scroll to the corresponding section
    sections[index].scrollIntoView({ behavior: 'smooth' });

    // Update active state
    sidebarLinks.forEach(item => item.classList.remove('current'));
    link.classList.add('current');
});
});

// Intersection Observer to highlight active section in sidebar
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.5
};

const observerCallback = (entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);
        sidebarLinks.forEach(link => link.classList.remove('current'));
        sidebarLinks[index].classList.add('current');
    }
});
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));
});




/*  for get quote and brochure form */




// Get the modal for Get Quote
const popupForm = document.getElementById('popupForm');
// Get the button that opens the Get Quote form
const openFormButton = document.getElementById('openForm');
// Get the <span> element that closes the Get Quote form
const closeFormButton = document.getElementById('closeForm');

// When the user clicks on the button, open the Get Quote form
openFormButton.onclick = function () {
    popupForm.style.display = 'block';
}

// When the user clicks on <span> (x), close the Get Quote form
closeFormButton.onclick = function () {
    popupForm.style.display = 'none';
}

// When the user clicks anywhere outside of the Get Quote form, close it
window.onclick = function (event) {
    if (event.target == popupForm) {
        popupForm.style.display = 'none';
    }
}

// Handle Get Quote form submission using Web 3 Forms
document.getElementById('form').onsubmit = function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data for Get Quote
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const productType = document.getElementById('productType').value;
    const area = document.getElementById('area').value;
    const description = document.getElementById('description').value;

    // Send form data to Web 3 Forms
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            access_key: '618c52b8-03f3-4d43-a6c0-5749ea08409b', // Replace with your Web 3 Forms access key
            name: name,
            email: email,
            phone: phone,
            productType: productType,
            area: area,
            description: description,
        }),
    }).then(function (response) {
        if (response.ok) {
            alert('Form submitted successfully!'); // Show success message
            popupForm.style.display = 'none'; // Close the form popup
        } else {
            alert('Error submitting the form.'); // Show error message
        }
    }).catch(function (error) {
        alert('Error: ' + error.message); // Show error message
    });
}

// // Get the modal for Get Brochure
const popupBrochureForm = document.getElementById('popupBrochureForm');
// Get the button that opens the Get Brochure form
const openBrochureFormButton = document.getElementById('brochure-form-btn');
// Get the <span> element that closes the Get Brochure form
const closeBrochureFormButton = document.getElementById('closeBrochureForm');

// When the user clicks on the button, open the Get Brochure form
openBrochureFormButton.onclick = function () {
    popupBrochureForm.style.display = 'block';
}

// When the user clicks on <span> (x), close the Get Brochure form
closeBrochureFormButton.onclick = function () {
    popupBrochureForm.style.display = 'none';
}

// When the user clicks anywhere outside of the Get Brochure form, close it
window.onclick = function (event) {
    if (event.target == popupBrochureForm) {
        popupBrochureForm.style.display = 'none';
    }
}

// Handle Get Brochure form submission using Web 3 Forms
document.getElementById('brochureForm').onsubmit = function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data for Get Brochure
    const name = document.getElementById('brochureName').value;
    const email = document.getElementById('brochureEmail').value;
    const phone = document.getElementById('brochurePhone').value;
    const city = document.getElementById('brochurecity').value;

    // Send form data to Web 3 Forms
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            access_key: '618c52b8-03f3-4d43-a6c0-5749ea08409b', // Replace with your Web 3 Forms access key
            name: name,
            email: email,
            phone: phone,
            city: city,
        }),
    }).then(function (response) {
        if (response.ok) {
            alert('Brochure request submitted successfully!'); // Show success message
            popupBrochureForm.style.display = 'none'; // Close the form popup
        } else {
            alert('Error submitting the form.'); // Show error message
        }
    }).catch(function (error) {
        alert('Error: ' + error.message); // Show error message
    });
}



