// circular Form Functions
function newsletterForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwzhKzDN7q-RGXq4YBJEeXcK-flmEDW4-4N53NwNlK9GCO0-8Wz76bm4y4IX5x_iHWaTA/exec'
    const form = document.forms['newsletter-form']
    form.addEventListener('submit', e => {
        document.getElementById("newsletterSubmitButton").disabled = true;
        document.getElementById("newsletterSubmitButton").value = "Loading..";
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => submittednewsletterForm())
            .catch(error => console.error('Error!', error.message))
    })
}

function submittednewsletterForm() {
    document.getElementById("newsletterSubmitButton").value = "Submitted";
    // document.getElementById("newsletterFormAlert").innerHTML = "Subscription Successfully!";
    document.getElementById("newsletter-Form").reset();
}
