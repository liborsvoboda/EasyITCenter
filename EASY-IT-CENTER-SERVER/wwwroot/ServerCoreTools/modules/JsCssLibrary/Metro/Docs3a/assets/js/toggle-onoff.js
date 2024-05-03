function toggleonfoff_init() {
    $("div.input.toggle-onoff input:hidden").parent("div").children("i.fa").removeClass("fa-toggle-on").addClass("fa-toggle-off");
    $("div.input.toggle-onoff input:hidden[value='True']").parent("div").children("i.fa").removeClass("fa-toggle-off").addClass("fa-toggle-on");
}
$("div.input.toggle-onoff").click(function() {
    console.log($(this).children("input:hidden").val());
    var value = $(this).children("input:hidden").val();
    if( value == "True" ) {
        $('#edit-button').css("pointer-events", 'initial');
        $('#edit-button').css("opacity", '1.4');
        $('#blue-color').css("pointer-events", 'none');
        $('#blue-color').css("opacity", '0.4');
        $('#changeicon').css("pointer-events", 'none');
        $('#changeicon').css("opacity", '0.4');
        $('#change-title').css("pointer-events", 'none');
        $('#change-title').css("opacity", '0.4');
        $('#textstyle').css("pointer-events", 'none');
        $('#textstyle').css("opacity", '0.4');
        $('#textsize').css("pointer-events", 'none');
        $('#textsize').css("opacity", '0.4');
        $('#tiledesign').css("pointer-events", 'none');
        $('#tiledesign').css("opacity", '0.4');
        $('#colorSelector').css("pointer-events", 'none');
        $('#colorSelector').css("opacity", '0.4');

        $(this).children("input:hidden").val("False");
        $(this).children("i.fa").removeClass("fa-toggle-on").addClass("fa-toggle-off");
    } else {
         $('#blue-color').css("pointer-events", 'initial');
        $('#blue-color').css("opacity", '1.4');
        $('#changeicon').css("pointer-events", 'initial');
        $('#changeicon').css("opacity", '1.4');
        $('#change-title').css("pointer-events", 'initial');
        $('#change-title').css("opacity", '1.4');
        $('#textstyle').css("pointer-events", 'initial');
        $('#textstyle').css("opacity", '1.4');
        $('#textsize').css("pointer-events", 'initial');
        $('#textsize').css("opacity", '1.4');
        $('#tiledesign').css("pointer-events", 'initial');
        $('#tiledesign').css("opacity", '1.4');
        $('#colorSelector').css("pointer-events", 'initial');
        $('#colorSelector').css("opacity", '1.4');
        $(this).children("input:hidden").val("True");
        $(this).children("i.fa").removeClass("fa-toggle-off").addClass("fa-toggle-on");
    }
});
$(document).ready(function() { 
    toggleonfoff_init();
});
