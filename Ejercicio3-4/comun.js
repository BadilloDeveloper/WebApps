document.getElementById('btNavbar').addEventListener('click', function(ev) {
    var navbar = document.getElementById('navbar');
    navbar.style.display = 'block';
    ev.stopPropagation();
});
window.addEventListener('click', function(ev) {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display &&
        navbar.style.display !== 'none' &&
        ev.x > 200)
        navbar.style.display = '';
});

var begin, end, minOffset = 100,
    tracking = false;
var currentPageId;

window.addEventListener('touchstart', function(ev) {
    var navbar = document.getElementById('navbar');
    if (screen.availWidth >= 1024) return;
    if (ev.touches.length > 1) {
        tracking = false;
    } else {
        tracking = true;
        begin = ev.targetTouches[0].clientX;
        end = ev.targetTouches[0].clientX;
    }
});
window.addEventListener('touchmove', function(ev) {
    if (tracking) {
        end = ev.targetTouches[0].clientX;
        var offset = end - begin;
        var navbar = document.getElementById('navbar');
        if (offset > 200) {
            navbar.style.left = '';
            navbar.style.display = 'block';
        } else if (offset > 0) {
            navbar.style.left = (-200 + offset) + 'px';
            navbar.style.display = 'block';
        } else {
            navbar.style.left = '';
            navbar.style.display = '';
        }
    }
});
window.addEventListener('touchend', function(ev) {
    tracking = false;
    var offset = end - begin;
    var navbar = document.getElementById('navbar');
    if (offset > minOffset) {
        navbar.style.left = '';
        navbar.style.display = 'block';
    } else if (offset > 0) {
        navbar.style.display = '';
        navbar.style.left = '';
    }
});




function navigate(pageId) {
    console.log('navigate(' + pageId + ')');
    var navbar = document.getElementById('navbar');
    navbar.style.display = '';
    if (currentPageId === pageId) return;
    var currentPage, page;
    if (currentPageId) {
        currentPage = document.getElementById(currentPageId);
        currentPage.style.display = 'none';
    }
    page = document.getElementById(pageId);
    page.style.display = 'block';
    currentPageId = pageId;
}