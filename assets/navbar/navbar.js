// Mengaktifkan atau menonaktifkan navbar saat hamburger di-klik
document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});

// Menutup menu jika pengguna mengklik di luar menu
document.addEventListener("click", function(event) {
    const navbar = document.querySelector(".navbar");
    const navbarRight = document.querySelector(".navbar-right");
    const hamburger = document.getElementById("hamburger");

    if (!navbarRight.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove("active");
    }
});
