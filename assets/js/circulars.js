// circular Form Functions
function validateCircularForm() {
    a = prompt("Please Enter Password:");
    if (a == 2310)
        pass;
    else
        window.location = "index.html";

}
function circularsForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbynr_KEVf2vECvLGtGHLuBYvOiXUDCoODMdduUKHYul3qg8EVd64EyxLaZkt1QbsmgGRg/exec'
    const form = document.forms['circular-form']
    form.addEventListener('submit', e => {
        document.getElementById("circularSubmitButton").disabled = true;
        document.getElementById("circularSubmitButton").value = "Loading..";
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => submittedcircularForm())
            .catch(error => console.error('Error!', error.message))
    })
}

function submittedcircularForm() {
    document.getElementById("circularSubmitButton").value = "Submitted";
    document.getElementById("circularFormAlert").innerHTML = "Thanks For Your Submission";
    document.getElementById("circular-Form").reset();
}

var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS2gFp_98dMn1dGMRBLatZlgW6080fs96U7nG_N9CuOQuHkUBDZ3Sc3pZ--bNvrWv5N2ddd_hM5C2I_/pub?gid=8341289&single=true&output=csv';
$(document).ready(function () {
    $.ajax({
        url: url,
        dataType: "text",
        success: function (data) {
            var data = data.split(/\r?\n|\r/);
            var table_data = '<table>';
            for (var count = data.length - 1; count > 0; count--) {
                var cell_data = data[count].split(",");
                table_data += '<tr>';
                if (cell_data[0] == 1) {
                    table_data += '<td>' + '<img src="https://myaktuguide.ml/assets/images/new.gif" width="20px">' + '&nbsp;&nbsp;' + '<a href="' + cell_data[2] + '"  target="_blank" title="Click here to View" >' + cell_data[1] + '</a>' + '</td>';
                }
                else if (cell_data[0] != 1) {
                    table_data += '<td>' + '<img src="https://myaktuguide.ml/assets/images/dot.png" width="20px">' + '&nbsp;&nbsp;'  + '<a href="' + cell_data[2] + '"  target="_blank" title="Click here to View" >' + cell_data[1] + '</a>' + '</td>';
                }
            }
            table_data += '</tr>';
            table_data += '</table>';
            $('#circular_table').html(table_data);
        }
    });
});
