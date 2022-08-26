$("<link/>", {
    rel: "stylesheet",
    type: "text/css",
    href: "../css/styles.css"
}).appendTo("head");

var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS2gFp_98dMn1dGMRBLatZlgW6080fs96U7nG_N9CuOQuHkUBDZ3Sc3pZ--bNvrWv5N2ddd_hM5C2I_/pub?gid=1303021765&single=true&output=csv';
$(document).ready(function () {
    $.ajax({
        url: url,
        dataType: "text",
        success: function (data) {
            var c = 1;
            var data = data.split(/\r?\n|\r/);
            var table_data = '<table class="table table-bordered table-striped">';
            for (var count = 0; count < data.length; count++) {
                var cell_data = data[count].split(",");
                table_data += '<tr>';
                for (var cell_count = 0; cell_count < cell_data.length - 1; cell_count++) {
                    if (cell_count == 0) {
                        table_data += '<td class ="remove">' + c++ + '</td>';
                    }
                    else if (cell_count == 2) {
                        table_data += '<td>' + cell_data[cell_count] + '</td>';
                    }
                    else if ((cell_count == cell_data.length - 2) && (count != 0)) {
                        table_data += '<td>' + '<a href="' + cell_data[cell_count] + '" class="btn custom-btn custom-btn2 custom-btn-bg custom-btn-link" target="_blank" title="Click here to View" >🔗</a>' + '</td>';
                    }
                    else {
                        table_data += '<td class ="remove">' + cell_data[cell_count] + '</td>';
                    }
                }
                table_data += '</tr>';
            }
            table_data += '</table>';
            $('#theory_table').html(table_data);
        }
    });
});
