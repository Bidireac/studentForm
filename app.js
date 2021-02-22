const form = document.getElementById('form');
const messageContainer = document.querySelector('.message-container');
const modal = document.querySelector('.modalBackground');
const modalClose = document.querySelector('.modalClose');

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
}

function storeFormData() {
  const user = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    phone: form.phone.value,
    email: form.email.value,
  };

  const jsonData = JSON.stringify(user);
  console.log(jsonData);

  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'sendData.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(jsonData);
  modal.classList.add('activeModal');
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
  if (isValid) {
    storeFormData();
  }
}

form.addEventListener('submit', processFormData);
modalClose.addEventListener('click', () => {
  modal.classList.remove('activeModal');
});
