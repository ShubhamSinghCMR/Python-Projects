   
(function (){
    "use strict";

    var total = parseInt($("#id_members-TOTAL_FORMS").val());
    var lastRow = $("#contact_group_form .browse-widget:last").closest("tr");
    var blankRow = lastRow.clone();
    var nextRow;
    var newRow;

    blankRow.find("input").each(function() {
        var name = $(this).attr("name").replace("-" + (total - 1) + "-", "--");
        $(this).attr({
            "name": name
        });
    });

    $("#add-more").on("click", function(event) {
        event.preventDefault();
        nextRow = blankRow.clone();
        newRow = nextRow.clone();
        newRow.find("input").each(function() {
            var name = $(this).attr("name").replace("--","-" + total + "-");
            var id = "id_" + name;
            $(this).attr({
                "name": name,
                "id": id
            }).val("");
        });
        total = total + 1;
        $("#id_members-TOTAL_FORMS").val(total);
        newRow.appendTo(lastRow.closest("tbody"));
        lastRow = newRow;
    });
}());
