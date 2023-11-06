const rotateBox = document.getElementById('header-updown-js');
const header = document.getElementById('headerjs');
const links = document.getElementById('header-links-js');
const htj = document.getElementById('hello-tile-js');

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
    const pushDepth = 30 * (1 - distance / maxDistance);

    const transformX = pushDepth * Math.cos(angle);
    const transformY = pushDepth * Math.sin(angle);

    htj.style.transform = `translate(-50%, -50%) translate3d(${transformX}px, ${transformY}px, ${pushDepth}px)`;
});

htj.addEventListener('mouseleave', () => {
    htj.style.transform = 'translate(-50%, -50%) translate3d(0, 0, 0)';
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var scrollingElement = document.getElementById("nftos-motion");
        scrollingElement.style.right = "0";
    }, 100);
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var scrollingElement = document.getElementById("nftos-motion");
        scrollingElement.style.right = "-205px";
    }, 4000);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var scrollingElement = document.getElementById("bgwavejs");
        scrollingElement.style.bottom = "-4vh";
    }, 0);
});

var userAgent = navigator.userAgent;

var deviceType;
if (userAgent.match(/Mac/i)) {
  deviceType = "Mac";
} else if (userAgent.match(/iPhone/i)) {
  deviceType = "iPhone";
} else if (userAgent.match(/Windows/i)) {
  deviceType = "Windows";
} else {
  deviceType = "Other";
}

var deviceInfo = document.getElementById('device-info');
deviceInfo.textContent = "Loading Completed Device>" + deviceType;

var unit = 100,
    canvasList,
    info = {},
    colorList;

function init() {
    info.seconds = 0;
    info.t = 0;
		canvasList = [];
    colorList = [];
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#666', '#ffffff']);
for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth;
        canvas.height = 150;
        canvas.contextCache = canvas.getContext("2d");
    }
		update();
}

function update() {
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        draw(canvas, colorList[canvasIndex]);
    }
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    setTimeout(update, 35);
}

function draw(canvas, color) {
    var context = canvas.contextCache;
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawWave(canvas, color[0], 0.5, 5, 0);
    drawWave(canvas, color[1], 0.4, 4, 250);
}

function drawWave(canvas, color, alpha, zoom, delay) {
		var context = canvas.contextCache;
    context.fillStyle = color;
    context.globalAlpha = alpha;
    context.beginPath();
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height);
    context.lineTo(0, canvas.height);
    context.closePath()
    context.fill();
}

function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    var x = t;
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis);

    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();

particlesJS("hello-js", {"particles":{"number":{"value":500,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":146.17389821424212,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
