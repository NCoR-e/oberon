const formContainer = document.querySelector('[data-js-container-form]');
const rootElements = [...formContainer.querySelectorAll('[data-js-form')];

const tabButtons = rootElements.flatMap(loginForms =>
    [...loginForms.querySelectorAll('[data-js-tab-button]')]
);

tabButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const targetName = button.dataset.jsTabButton;

    rootElements.forEach(loginForms => {
      loginForms.classList.toggle('is-active', loginForms.dataset.jsForm === targetName);
    });
  });
});