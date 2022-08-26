function contactForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzVS3yO3Svs8XPvCXw1tu1nt7yo_0NBsTFAdY4mCoqbtebsnjtU6QOpQlQQUHZ-i4FUYg/exec'
    const form = document.forms['contact-form']
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thanks for Contacting Us"))
            .catch(error => console.error('Error!', error.message))
    })
}

function circularForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyQdkUbgumcXUlJxE8PrQGdCfi9W8t4G1RGFav90hTLUhzxA9i9h_gx2i3zdH4-9CJZAg/exec'
    const form = document.forms['circular-form']
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thanks for your Information"))
            .catch(error => console.error('Error!', error.message))
    })
}

function newsletterForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycby3HSSLbuQK7E3Q_Ajmgxi0W-EWVZAufMtjikx4CO0q1PxsczX_pvguuAppXoTwj98UFQ/exec'
    const form = document.forms['newsletter-form']
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thanks for Subscribing Us"))
            .catch(error => console.error('Error!', error.message))
    })
}
function validateForm() {
    a = prompt("Enter Password:");
    if (a == 999)
        pass;
    else
        window.location = "certificates-form.html";
}