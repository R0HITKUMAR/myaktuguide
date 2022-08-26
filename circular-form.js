
const scriptURL = 'https://script.google.com/macros/s/AKfycbyQdkUbgumcXUlJxE8PrQGdCfi9W8t4G1RGFav90hTLUhzxA9i9h_gx2i3zdH4-9CJZAg/exec'
const form = document.forms['circular-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting Us"))
        .catch(error => console.error('Error!', error.message))
})
