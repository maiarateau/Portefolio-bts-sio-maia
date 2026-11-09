const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Ouvrir et fermer le menu sur mobile
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Fermer le menu après avoir cliqué sur un lien
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

     ctx.beginPath();
        ctx.arc(
            star.x + offsetX,
            star.y + offsetY,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(220, 225, 235, 0.9)";        
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#dce2ec";
        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}

resizeCanvas();
animateStars();
