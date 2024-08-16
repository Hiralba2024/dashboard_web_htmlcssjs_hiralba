document.addEventListener('DOMContentLoaded', () => {
    const navigationItems = document.querySelectorAll('.navigation > div');

    navigationItems.forEach(item => {
        const icon = item.querySelector('i');
        const nav = item.querySelector('nav');

        if (icon && nav) {
            icon.addEventListener('click', () => {
                // Toggle active class on nav to show/hide it
                nav.classList.toggle('active-nav');
            });
        }
    });
});