function getAssignment() {
    var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQw6-Mg_cmUoRhrOEhi8jXJEsoFYug595Bm4R8mFlKXOUZ35TpJkq1Oiel1Hgt9I09Z3xvhWyabu5Xz/pub?gid=1904388392&single=true&output=csv';
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
                    for (var cell_count = 1; cell_count < cell_data.length; cell_count++) {
                        if (count == 0) {
                            table_data += '<th>' + cell_data[cell_count] + '</th>';
                        }
                        else {
                            if (cell_count == 3) {
                                table_data += '<td>' + '<a href="' + cell_data[cell_count] + '" class="main-btn main-btn-sm" target="_blank" title="Click here to View" >View</a>' + '</td>';
                            }
                            else {
                                table_data += '<td>' + cell_data[cell_count] + '</td>';
                            }
                        }
                    }
                    table_data += '</tr>';
                }
                table_data += '</table>';
                $('#nptel_iot_table').html(table_data);
            }
        });
    });
}