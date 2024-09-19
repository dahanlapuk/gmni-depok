feather.replace();
function rearrangeForMobile() {
    if (window.innerWidth <= 768) {
        // Tentang Kami Section - Left-Right layout but smaller
        const tentangSections = document.querySelectorAll('.subsection');
        tentangSections.forEach(section => {
            section.style.flexDirection = 'row'; // Tetap kiri-kanan
            section.style.alignItems = 'center';
            section.querySelector('img').style.width = '40%'; // Gambar lebih kecil
            section.querySelector('.text').style.maxWidth = '40%'; // Teks lebih kecil
            section.querySelector('.text').style.fontSize = '0.9rem'; // Teks lebih kecil
        });

        // Komisariat Section - Two logos per row
        const komisariatLogos = document.querySelectorAll('.logo-item');
        komisariatLogos.forEach((logo, index) => {
            logo.style.width = '50%'; // Atur agar dua logo per baris
            logo.style.margin = '5%';
            logo.querySelector('img').style.width = '10rem'; // Ukuran logo lebih kecil
            // logo.querySelector('img').style.height = '90px';
        }); 
        const komisariatLogoSolo = document.querySelectorAll('.logo-item-solo');
        komisariatLogoSolo.forEach((logo, index) => {
            logo.style.marginTop = '1rem';
            logo.style.marginLeft = '4.7rem';
            logo.querySelector('img').style.width = '10rem'; // Ukuran logo lebih kecil
            // logo.querySelector('img').style.height = '90px';
        });

        // Komisariat Section - Single Logo
        const singleLogo = document.querySelector('.single-logo');
        if (singleLogo) {
            singleLogo.style.marginTop = '3rem'; // Adjust spacing
            singleLogo.style.marginLeft = '-2.5rem'; // Adjust spacing
            singleLogo.style.display = 'flex';
            singleLogo.style.justifyContent = 'center'; // Keep center
        }

        // Kontak Kami Section - Map and Form same size
        const contactForm = document.querySelector('.kontak-form');
        const mapPlaceholder = document.querySelector('.map-placeholder');
        if (contactForm && mapPlaceholder) {
            contactForm.style.width = '100%'; // Set form to full width
            mapPlaceholder.style.width = '100%'; // Set map to full width
            contactForm.style.height = mapPlaceholder.offsetHeight + '2%'; // Same height as map
        }
    } else {
        // Reset to default when not in mobile view
        resetLayout();
    }
}

// Reset the layout for larger screens
function resetLayout() {
    const tentangSections = document.querySelectorAll('.subsection');
    tentangSections.forEach(section => {
        section.style.flexDirection = ''; // Reset to default
        section.querySelector('img').style.width = ''; // Reset image size
        section.querySelector('.text').style.maxWidth = ''; // Reset text size
        section.querySelector('.text').style.fontSize = ''; // Reset text font size
    });

    const komisariatLogos = document.querySelectorAll('.logo-item');
    komisariatLogos.forEach((logo) => {
        logo.style.width = ''; // Reset to original layout
        logo.style.margin = '';
        logo.querySelector('img').style.width = ''; // Reset logo size
        logo.querySelector('img').style.height = '';
    });

    const singleLogo = document.querySelector('.single-logo');
    if (singleLogo) {
        singleLogo.style.marginTop = ''; // Reset single logo
    }

    const contactForm = document.querySelector('.kontak-form');
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (contactForm && mapPlaceholder) {
        contactForm.style.width = '';
        mapPlaceholder.style.width = ''; // Reset map width
        contactForm.style.height = '';
    }
}

// Call the function on load and when window is resized
window.addEventListener('load', rearrangeForMobile);
window.addEventListener('resize', rearrangeForMobile);