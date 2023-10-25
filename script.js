const rotateBox = document.getElementById('header-updown-js');
const header = document.getElementById('headerjs');
const links = document.getElementById('header-links-js');

let isExpanded = false;

rotateBox.addEventListener('click', () => {
    if (!isExpanded) {
        header.style.top = '0vh';
        rotateBox.style.transform = 'rotate(180deg)';
    } else {
        header.style.top = '-100vh';
        rotateBox.style.transform = 'rotate(0deg)';
    }
    isExpanded = !isExpanded;
});
