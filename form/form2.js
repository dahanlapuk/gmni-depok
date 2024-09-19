document.addEventListener('DOMContentLoaded', function () {
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    const universityDropdown = document.getElementById('university');
    const otherUniversityLabel = document.getElementById('other-university-label');
    const facultyDropdown = document.getElementById('faculty');
    const otherFacultyLabel = document.getElementById('other-faculty-label');
    const recapContent = document.getElementById('recap-content');

    // Add validation for required fields and enable next buttons
    document.querySelectorAll('.form-section').forEach(section => {
        section.querySelectorAll('.required-field').forEach(input => {
            input.addEventListener('input', () => {
                const form = input.closest('form');
                const allFilled = Array.from(form.querySelectorAll('.required-field')).every(field => field.value.trim() !== '');
                form.querySelector('.next-btn').disabled = !allFilled || !validateInputs();
            });
        });
    });

    // Show/hide other university/faculty input fields
    document.getElementById('university').addEventListener('change', function () {
        const otherInput = document.getElementById('other-university');
        const otherLabel = document.getElementById('other-university-label');
        if (this.value === 'other') {
            otherInput.disabled = false;
            otherLabel.classList.remove('hidden');
        } else {
            otherInput.disabled = true;
            otherLabel.classList.add('hidden');
        }
    });
    document.getElementById('faculty').addEventListener('change', function () {
        const otherInput = document.getElementById('other-faculty');
        const otherLabel = document.getElementById('other-faculty-label');
        if (this.value === 'other') {
            otherInput.disabled = false;
            otherLabel.classList.remove('hidden');
        } else {
            otherInput.disabled = true;
            otherLabel.classList.add('hidden');
        }
    });

    // Handle section transitions
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nextSection = document.getElementById(button.dataset.next);
            document.querySelector('.form-section.active').classList.remove('active');
            nextSection.classList.add('active');

            if (button.dataset.next === 'section-recap') {
                populateRecap();
            }

            toggleNextButtonState();
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const prevSection = document.getElementById(button.dataset.prev);
            document.querySelector('.form-section.active').classList.remove('active');
            prevSection.classList.add('active');

            toggleNextButtonState();
        });
    });


    // Handle "Other" option for university
    universityDropdown.addEventListener('change', function () {
        if (this.value === 'other') {
            otherUniversityLabel.classList.remove('hidden');
            const otherUniversityInput = otherUniversityLabel.querySelector('input');
            otherUniversityInput.disabled = false; // Enable input
            otherUniversityInput.focus();
        } else {
            otherUniversityLabel.classList.add('hidden');
            otherUniversityLabel.querySelector('input').disabled = true; // Disable input
        }
        toggleNextButtonState(); // Update button state
    });

    // Handle "Other" option for faculty
    facultyDropdown.addEventListener('change', function () {
        if (this.value === 'other') {
            otherFacultyLabel.classList.remove('hidden');
            const otherFacultyInput = otherFacultyLabel.querySelector('input');
            otherFacultyInput.disabled = false; // Enable input
            otherFacultyInput.focus();
        } else {
            otherFacultyLabel.classList.add('hidden');
            otherFacultyLabel.querySelector('input').disabled = true; // Disable input
        }
        toggleNextButtonState(); // Update button state
    });

    // Enable/disable next button based on input validation
    function toggleNextButtonState() {
        nextButtons.forEach(button => {
            const isActiveSection = document.querySelector('.form-section.active');
            const isFirstSection = isActiveSection.id === 'section-1';

            button.disabled = !validateInputs() || (isFirstSection);
        });
    }

    // Validate inputs
    function validateInputs() {
        const email = document.getElementById('email').value.trim();
        const telephone = document.getElementById('telephone').value.trim();

        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const telephoneIsValid = telephone.length >= 12;

        return emailIsValid && telephoneIsValid;
    }
    // Enable/disable next button based on input validation
    function toggleNextButtonState() {
        nextButtons.forEach(button => {
            const isActiveSection = document.querySelector('.form-section.active');
            const isFirstSection = isActiveSection.id === 'section-1'; // Check if it's the first section

            const name = document.getElementById('name')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const telephone = document.getElementById('telephone')?.value.trim() || '';
            const university = universityDropdown.value === 'other' ? document.getElementById('other-university').value.trim() : universityDropdown.value;
            const faculty = facultyDropdown.value === 'other' ? document.getElementById('other-faculty').value.trim() : facultyDropdown.value;

            // Enable the button if in the first section, or all required fields are filled
            button.disabled = !(isFirstSection || (name && email && telephone && university && faculty));
        });
    }
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

    // Initial check to set button state
    toggleNextButtonState();
});
