const searchKeywords = {
    "home": "index.html",
    "about": "about-us.html",
    "expertise": "services-1.html",
    "projects": "projects.html",
    "prefabricated homes": "product1.html",
    "wooden homes": "product2.html",
    "prefab restaurants": "product3.html",
    "hybrid homes": "product4.html",
    "mud homes": "product5.html",
    "ssbh": "product6.html",
    "interior design": "product7.html",
    "contact": "contact.html",
    "faq": "faq.html",
    "careers": "careers.html",

    "architecture":"expertise1.html",
    "products":"product.html",
    "careers": "careers.html",
    "commitment": "careers.html",
    "Offer": "careers.html",
    "Work": "careers.html",
    "Culture": "careers.html",
    "architectural plans":"expertise1.html",
    "feasibility":"expertise1.html",
    "collaboration":"expertise1.html",
    "environmental planning":"expertise1.html",
    "endeavor":"expertise1.html",
    "Sustainable Architecture":"expertise1.html",
    "People-centric indoor ":"expertise2.html",
    "harmonious":"expertise2.html",
    " ecological footprint":"expertise2.html",
    "renewable":"expertise2.html",
    " sanctuary":"expertise2.html",
    "sresidential":"expertise2.html",
    "high-quality":"expertise3.html",
    "interior solutions":"expertise3.html",
    "delightful blend":"expertise3.html",
    " interior embodies":"expertise3.html",
    " formal design":"expertise3.html",
    "exquisite design":"expertise3.html",
    " landscape ":"expertise4.html",
    " hardscaping":"expertise4.html",
    "landscape features":"expertise4.html",
    "reflection":"expertise4.html",
    "eco-friendly":"expertise4.html",
    
};

// Selecting the search elements
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

// Toggle the display of the search input on search icon click
searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('show');  // Show/Hide the search input
    searchInput.focus();  // Focus the input when shown
});

// Add the 'Enter' key press event listener to the input field
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {  // Trigger on 'Enter' key
        const query = searchInput.value.trim().toLowerCase();  // Get input and trim
        if (searchKeywords[query]) {
            window.location.href = searchKeywords[query];  // Redirect if keyword matches
        } else {
            alert('No search found');  // Alert if no keyword match
        }
    }
});

// Optional: Hide search input if clicking outside of the search box
document.addEventListener('click', function (event) {
    if (!document.querySelector('.search-box').contains(event.target)) {
        searchInput.classList.remove('show');
    }
});
