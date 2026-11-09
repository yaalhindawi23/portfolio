const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fields = [
      { id: 'fullName', errorId: 'nameError', message: 'Please enter your full name.' },
      { id: 'email', errorId: 'emailError', message: 'Please enter a valid email address.' },
      { id: 'country', errorId: 'countryError', message: 'Please enter your country.' },
      { id: 'comments', errorId: 'commentsError', message: 'Please enter your comments.' }
    ];

    let isValid = true;

    fields.forEach(function (field) {
      const input = document.getElementById(field.id);
      const error = document.getElementById(field.errorId);
      const value = input.value.trim();

      error.textContent = '';
      input.classList.remove('input-error');

      let fieldIsValid = value !== '';
      if (field.id === 'email' && value !== '') {
        fieldIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }

      if (!fieldIsValid) {
        isValid = false;
        input.classList.add('input-error');
        error.textContent = field.message;
      }
    });

    if (isValid) {
      alert('Your form has been submitted successfully!');
      form.reset();
    }
  });
}
