document.addEventListener('DOMContentLoaded', function () {
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    const universityDropdown = document.getElementById('university');
    const otherUniversityLabel = document.getElementById('other-university-label');
    const facultyDropdown = document.getElementById('faculty');
    const otherFacultyLabel = document.getElementById('other-faculty-label');
    const recapContent = document.getElementById('recap-content');

    // Handle section transitions
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nextSection = document.getElementById(button.dataset.next);
            document.querySelector('.form-section.active').classList.remove('active');
            nextSection.classList.add('active');

            // If we're on the recap section, populate the recap
            if (button.dataset.next === 'section-recap') {
                populateRecap();
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const prevSection = document.getElementById(button.dataset.prev);
            document.querySelector('.form-section.active').classList.remove('active');
            prevSection.classList.add('active');
        });
    });

    // Handle "Other" option for university
    universityDropdown.addEventListener('change', function () {
        if (this.value === 'other') {
            otherUniversityLabel.classList.remove('hidden');
            otherUniversityLabel.querySelector('input').focus();
        } else {
            otherUniversityLabel.classList.add('hidden');
        }
    });

    // Handle "Other" option for faculty
    facultyDropdown.addEventListener('change', function () {
        if (this.value === 'other') {
            otherFacultyLabel.classList.remove('hidden');
            otherFacultyLabel.querySelector('input').focus();
        } else {
            otherFacultyLabel.classList.add('hidden');
        }
    });

    // Populate the recap section with form data
    function populateRecap() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const telephone = document.getElementById('telephone').value;
        const university = universityDropdown.value === 'other' ? document.getElementById('other-university').value : universityDropdown.value;
        const faculty = facultyDropdown.value === 'other' ? document.getElementById('other-faculty').value : facultyDropdown.value;
        const reason = document.getElementById('reason').value;

        recapContent.innerHTML = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>No Telepon:</strong> ${telephone}</p>
            <p><strong>Asal Universitas:</strong> ${university}</p>
            <p><strong>Fakultas:</strong> ${faculty}</p>
            <p><strong>Alasan Masuk GMNI:</strong> ${reason}</p>
        `;
    }
});
