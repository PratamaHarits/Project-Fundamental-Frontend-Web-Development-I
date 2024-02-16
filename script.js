$(document).ready(function () {
    
    //fitur sidebar
    $('#button-menu').click(function () { 
        $('.side-nav').toggleClass('button-menu-active');       
    });

    //hilangkan sidebar selain button-menu
    const buttonMenu = $('#button-menu');
    const sideNav = $('.side-nav');
    $(document).click(function (e) { 
        if(!buttonMenu.is(e.target)&& !sideNav.is(e.target)){
            $('.side-nav').removeClass('button-menu-active');
        }
    });

});