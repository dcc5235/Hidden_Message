document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault(); // Stop default browser behavior to submit form to a non-existing backend server

  const input = document.querySelector('input');
  console.log(input.value);
});