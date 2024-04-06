(function() {
    $('#avatar-items').hide();
    $('#bell-items').hide();
    $('#bell').click(function() {
        if ($("#bell-items").is(":hidden")) {
            $('#avatar i.mif-expand-less').removeClass('mif-expand-less').addClass('mif-expand-more');
            $('#avatar-items').slideUp();
            $('#bell-items').slideDown();
            $('#bell i.mif-expand-more').removeClass('mif-expand-more').addClass('mif-expand-less');
        } else {
            $('#bell-items').slideUp();
            $('#bell i.mif-expand-less').removeClass('mif-expand-less').addClass('mif-expand-more');
        }

    });
    $('.main-div').click(function() {
        $('#bell-items').slideUp();
        $('#bell i.mif-expand-less').removeClass('mif-expand-less').addClass('mif-expand-more');
    });
    $('#avatar').click(function() {
        if ($("#avatar-items").is(":hidden")) {
            $('#bell i.mif-expand-less').removeClass('mif-expand-less').addClass('mif-expand-more');
            $('#bell-items').slideUp();
            $('#avatar-items').slideDown();
            $('#avatar i.mif-expand-more').removeClass('mif-expand-more').addClass('mif-expand-less');
        } else {
            $('#avatar-items').slideUp();
            $('#avatar i.mif-expand-less').removeClass('mif-expand-less').addClass('mif-expand-more');
        }

    });
    $('.main-div').click(function() {
        $('#avatar-items').slideUp();
        $('#avatar i.mif-expand-less').removeClass('mif-expand-less').addClass('mif-expand-more');
    });

    // Edit TiTle
       var gitHub = $('#github').text();
       //alert(gitHub);
       $('#edit-label').val(gitHub);
     // $('#edit-input').text( '#github' );
 $('#edit-label').on('input', function(){
     var input_txt = $(this).val();
     $('#github').text( input_txt );
   });
// Enable or Disable Toggle Button
// $('#togglebtn').click(function() {
// 	var togglebtn = $('#switch-button').val();
// 	alert(toggle-btn);
// });
    // Font Size Change
    $('#small').click(function() {
        $('#github').css("font-size", 'small');
    });
    $('#medium').click(function() {
        $('#github').css("font-size", 'medium');
    });
    $('#large').click(function() {
        $('#github').css("font-size", 'large');
    });
    // Font Style Change
    $('#arial').click(function() {
        $('#github').css("font-family", 'Arial');
    });
    $('#helvetica').click(function() {
        $('#github').css("font-family", 'Helvetica');
    });
    $('#roman').click(function() {
        $('#github').css("font-family", 'Times New Roman');
    });
    $('#monospace').click(function() {
        $('#github').css("font-family", 'Monospace');
    });
    $('#georgia').click(function() {
        $('#github').css("font-family", 'Georgia');
    });
    // $('#sans-serif').click(function() {
    //     $('#github').css("font-family", 'sans-serif');
    // }); 
    $('#fantasy').click(function() {
        $('#github').css("font-family", 'Fantasy');
    });
    $('#roboto').click(function() {
        $('#github').css("font-family", 'Roboto');
    });
    // Tile design Change
    $('#small-cube').click(function() {
        $('#blue-color').removeClass('tile-medium').removeClass('tile-wide').addClass('tile-small');
    });
    $('#square').click(function() {
        $('#blue-color').removeClass('tile-small').removeClass('tile-wide').addClass('tile-medium');
    });
    $('#rectangle').click(function() {
        $('#blue-color').removeClass('tile-small').removeClass('tile-medium').addClass('tile-wide');
    });
    // Icon change
    $('#paypal').click(function() {
        $('#change-icon')
        .removeClass('mif-cloud')
        .removeClass('mif-android')
        .removeClass('mif-bell')
        .removeClass('mif-database')
        .removeClass('mif-dropbox')
        .removeClass('mif-display')
        .removeClass('mif-dollars')
        .removeClass('mif-github')
        .addClass('mif-cc-paypal');
    });
    $('#cloud').click(function() {
        $('#change-icon').removeClass('mif-cc-paypal')
        .removeClass('mif-android')
        .removeClass('mif-bell')
        .removeClass('mif-database')
        .removeClass('mif-dropbox')
        .removeClass('mif-display')
        .removeClass('mif-dollars')
        .removeClass('mif-github')
        .addClass('mif-cloud');
    });
    $('#android').click(function() {
        $('#change-icon').removeClass('mif-cloud')
        .removeClass('mif-cc-paypal')
        .removeClass('mif-bell')
        .removeClass('mif-database')
        .removeClass('mif-dropbox')
        .removeClass('mif-display')
        .removeClass('mif-dollars')
        .removeClass('mif-github')
        .addClass('mif-android');
    });
    $('#bell-icon').click(function() {
        $('#change-icon').removeClass('mif-cloud')
        .removeClass('mif-android')
        .removeClass('mif-database')
        .removeClass('mif-cc-paypal')
        .removeClass('mif-dropbox')
        .removeClass('mif-display')
        .removeClass('mif-dollars')
        .removeClass('mif-github')
        .addClass('mif-bell');
    });
    $('#database').click(function() {
        $('#change-icon').removeClass('mif-cloud')
        .removeClass('mif-android')
        .removeClass('mif-bell')
        .removeClass('mif-cc-paypal')
        .removeClass('mif-dropbox')
        .removeClass('mif-display')
        .removeClass('mif-dollars')
        .removeClass('mif-github')
        .addClass('mif-database');
    });
    $('#dropbox').click(function() {
        $('#change-icon').removeClass('mif-cloud')
        .removeClass('mif-android')
        .removeClass('mif-bell')
        .removeClass('mif-database')
        .removeClass('mif-cc-paypal')
        .removeClass('mif-display')
        .removeClass('mif-dollars')
        .removeClass('mif-github')
        .addClass('mif-dropbox');
    });
    $('#display').click(function() {
        $('#change-icon').removeClass('mif-cloud')
        .removeClass('mif-android')
        .removeClass('mif-bell')
        .removeClass('mif-database')
        .removeClass('mif-dropbox')
        .removeClass('mif-cc-paypal')
        .removeClass('mif-dollars')
        .removeClass('mif-github')
        .addClass('mif-display');
    });
    $('#dollars').click(function() {
        $('#change-icon').removeClass('mif-cloud')
        .removeClass('mif-android')
        .removeClass('mif-bell')
        .removeClass('mif-database')
        .removeClass('mif-dropbox')
        .removeClass('mif-display')
        .removeClass('mif-cc-paypal')
        .removeClass('mif-github')
        .addClass('mif-dollars');
    });
    $('#github-icon').click(function() {
        $('#change-icon').removeClass('mif-cloud')
        .removeClass('mif-android')
        .removeClass('mif-bell')
        .removeClass('mif-database')
        .removeClass('mif-dropbox')
        .removeClass('mif-display')
        .removeClass('mif-dollars')
        .removeClass('mif-cc-paypal')
        .addClass('mif-github');
    });
    // $(document).ready(function(){
    //     // alert('Hey page reload');
    //     $( window ).resize(function() {
    //         $(this).resizeTo(320, 455);
    //       // $( "#log" ).append("Y: " + $(this).width());
    //       // $( "#log" ).append("X: " + $(this).height());
    //     });
    // });

    // function createWindow(src, width, height){
    //     var win = window.open(src, "_new", "width="+width+",height="+height);
    //     win.addEventListener("resize", function(){
    //         console.log("Resized");
    //         win.resizeTo(width, height);
    //     });
    // }
    // createWindow("about:blank", 500, 300);
    // // $(document).load(function(){
    // //     alert('Hey page reload');
    // // });
    // // window.reload().resizeTo(320, 455);
    // // window.reload().focus();
})(jQuery)