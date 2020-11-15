document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault(); // Stop default browser behavior to submit form to a non-existing backend server

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector('#link-input')
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});