let currentData = {
    currentTableName:'',
    currentTableData:[],
    currentHeaderNames:[]
};

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();
    // Append table with add row form on add new button click
    $(".add-new").click(function(){
        $(this).attr("disabled", "disabled");
        var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="department" id="department"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
            '<td>' + actions + '</td>' +
            '</tr>';
        $("table").append(row);
        $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
    // Add row on add button click
    $(document).on("click", ".add", function(){
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
            if(!$(this).val()){
                $(this).addClass("error");
                empty = true;
            } else{
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if(!empty){
            let rowData = [];
            input.each(function(){
                $(this).parent("td").html($(this).val());
                rowData.push($(this).val());
            });
            sendUpdateQuery(editRow(rowData),true);
            $(this).parents("tr").find(".add, .edit").toggle();
            $(".add-new").removeAttr("disabled");
        }
    });
    // Edit row on edit button click
    $(document).on("click", ".edit", function(){
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
            $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").attr("disabled", "disabled");
    });
    // Delete row on delete button click
    $(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
        $(".add-new").removeAttr("disabled");
        
        let rowData = getTableRowData($(this).parents("tr")[0]);
        sendUpdateQuery(deleteRow(rowData),true);
    });
});

document.getElementById('searchTableButton').addEventListener('click',  () => {
    const query = `SELECT *
            FROM ${document.getElementById('searchTableInput').value}`;
    sendSelectQuery(query);
});

document.getElementById('submitBtn').addEventListener('click', () => {
    const query = document.getElementById('queryInput').value;
    
    sendSelectQuery(query);
});

document.getElementById('sortBtn').addEventListener('click', () => {
    query = `SELECT *
        FROM ${currentData.currentTableName}
        ORDER BY ${document.getElementById('colNames').value} ${document.getElementById('sortType').value}`;
    sendSelectQuery(query);
});

