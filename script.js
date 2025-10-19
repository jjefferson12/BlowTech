$(document).ready(function () {
    $('#mobile_botao').on('click', function () {
        $('#mobile_menu').toggleClass('active')
        $('#mobile_botao').find('i').toggleClass('fa-x')
    });
    
});