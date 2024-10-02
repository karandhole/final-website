$(document).ready(function() {
    // Set 'Expertise' menu item active
    $('.nav a[href="services-1.html"]').addClass('active');

    // Also check for submenu items
    if (window.location.pathname.split("/").pop() === 'expertise1.html') {
        $('.submenu-item a[href="expertise1.html"]').addClass('active');
        $('.dropdown-toggle[href="services-1.html"]').addClass('active'); // Parent menu
    } else if (window.location.pathname.split("/").pop() === 'expertise2.html') {
        $('.submenu-item a[href="expertise2.html"]').addClass('active');
        $('.dropdown-toggle[href="services-1.html"]').addClass('active');
    } else if (window.location.pathname.split("/").pop() === 'expertise3.html') {
        $('.submenu-item a[href="expertise3.html"]').addClass('active');
        $('.dropdown-toggle[href="services-1.html"]').addClass('active');
    } else if (window.location.pathname.split("/").pop() === 'expertise4.html') {
        $('.submenu-item a[href="expertise4.html"]').addClass('active');
        $('.dropdown-toggle[href="services-1.html"]').addClass('active');
    } else if (window.location.pathname.split("/").pop() === 'expertise5.html') {
        $('.submenu-item a[href="expertise5.html"]').addClass('active');
        $('.dropdown-toggle[href="services-1.html"]').addClass('active');
    }
});


