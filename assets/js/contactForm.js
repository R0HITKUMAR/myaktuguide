// circular Form Functions
function contactForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwvGycbQmfbDMeIUN43dFpZDO-m5DYt1WYMAw8ErEJbwb9aPlN3dhUl0dkjCOEkHVE7Fg/exec'
    const form = document.forms['contact-form']
    form.addEventListener('submit', e => {
        document.getElementById("contactSubmitButton").disabled = true;
        document.getElementById("contactSubmitButton").value = "Loading..";
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => submittedcontactForm())
            .catch(error => console.error('Error!', error.message))
    })
}

function submittedcontactForm() {
    document.getElementById("contactSubmitButton").value = "Submitted";
    document.getElementById("contactFormAlert").innerHTML = "Thanks For Contacting Us";
    document.getElementById("contact-Form").reset();
}

// circular Form Functions
function feedbackForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwvGycbQmfbDMeIUN43dFpZDO-m5DYt1WYMAw8ErEJbwb9aPlN3dhUl0dkjCOEkHVE7Fg/exec'
    const form = document.forms['feedback-form']
    form.addEventListener('submit', e => {
        document.getElementById("feedbackSubmitButton").disabled = true;
        document.getElementById("feedbackSubmitButton").value = "Loading..";
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => submittedfeedbackForm())
            .catch(error => console.error('Error!', error.message))
    })
}

function submittedfeedbackForm() {
    document.getElementById("feedbackSubmitButton").value = "Thanks For Your Feedback";
    document.getElementById("feedback-Form").reset();
}
