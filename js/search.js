
   

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
    "products":"product.html"
};

const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('show');
    searchInput.focus();
});

searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim().toLowerCase();
        if (searchKeywords[query]) {
            window.location.href = searchKeywords[query];
        } else {
            alert('No search found');
        }
    }
});