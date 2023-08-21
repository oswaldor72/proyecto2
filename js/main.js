const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach( function(item) {
    item.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.current');
        currentItem.classList.remove('current');
        e.target.classList.add('current');
        window.scrollTo(0,0);
    });
});
