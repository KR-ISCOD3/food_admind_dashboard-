$(document).ready(function(){
    $('#toggle_btn').click(function(){
        $(".main").toggleClass('active'); 
        $(".b-name").toggleClass('d-none');
        $(".delivery-logo").toggleClass('d-none');
    });
});