const rotateBox = document.getElementById('header-updown-js');
const header = document.getElementById('headerjs');
const links = document.getElementById('header-links-js');
const htj = document.getElementById('hello-tile-js');
const sousyoku1 = document.getElementById('')

let isExpanded = false;

rotateBox.addEventListener('click', () => {
    if (!isExpanded) {
        header.style.top = '0vh';
        header.style.transform = 'scale(1)';
        header.style.opacity = '1';
        rotateBox.style.transform = 'rotate(180deg)';
    } else {
        header.style.top = '-180vh';
        header.style.transform = 'scale(2.5)';
        header.style.opacity = '0';
        rotateBox.style.transform = 'rotate(0deg)';
    }
    isExpanded = !isExpanded;
});

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

particlesJS("hello-js", {"particles":{"number":{"value":500,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":146.17389821424212,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;