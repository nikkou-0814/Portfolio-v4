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

const htj = document.getElementById('hello-tile-js');

htj.addEventListener('mousemove', (e) => {
    const boxRect = htj.getBoundingClientRect();
    const boxCenterX = boxRect.left + boxRect.width / 2;
    const boxCenterY = boxRect.top + boxRect.height / 2;

    const dx = e.clientX - boxCenterX;
    const dy = e.clientY - boxCenterY;
    const maxDistance = Math.sqrt(
        Math.pow(boxRect.width, 2) + 
        Math.pow(boxRect.height, 2)
    );

    const angle = Math.atan2(dy, dx);
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), maxDistance);
    const pushDepth = 20 * (1 - distance / maxDistance);

    const transformX = pushDepth * Math.cos(angle);
    const transformY = pushDepth * Math.sin(angle);

    htj.style.transform = `translate(-50%, -50%) translate3d(${transformX}px, ${transformY}px, ${pushDepth}px)`;
});

htj.addEventListener('mouseleave', () => {
    htj.style.transform = 'translate(-50%, -50%) translate3d(0, 0, 0)';
});
