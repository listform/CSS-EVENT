const scriptURL = 'https://script.google.com/macros/s/AKfycbzCEyScumFAMKEcNTgPgj8bPARWNPXshoCGrV6d2tjF5a0N7yYSW2j9HvwbzSnKtT19zA/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
