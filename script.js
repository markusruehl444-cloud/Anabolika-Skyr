function selectFlavor(flavorName) {
    alert(`⚡ ${flavorName} wurde deiner Probierbox hinzugefügt! Eiskalte Frische ist auf dem Weg.`);
}

function orderNow() {
    alert("🔥 Anabolika Skyr Probierbox reserviert! Die arktische Lieferung startet in Kürze.");
}

// Parallax/Hover animation for hero image
document.addEventListener('mousemove', (e) => {
    const heroImg = document.querySelector('.hero-img');
    if (!heroImg) return;
    
    const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    
    heroImg.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
