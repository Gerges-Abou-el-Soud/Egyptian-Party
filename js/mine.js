
/*Side Menu*/

$(".openNav").click(function () {
    $("#sideMenu").animate({ width: '250px' }, 50);
    $("#homeContent").animate({ marginLeft: '250px' }, 50);
})
$(".closebtn").click(function () {
    $("#sideMenu").animate({ width: '0px' }, 50);
    $("#homeContent").animate({ marginLeft: '0px' }, 50);
})

/*scrollmenu*/
$("#sideMenu a").click(function () {
    var sectionId = $(this).attr("href");
    var positionOfSection = $(sectionId).offset().top;
    $("html , body").animate({ scrollTop: positionOfSection }, 2000);
})

/*Collapse Menus*/

$('#downMenus .toggle').click(function () {
    $('.content').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

/*Counters*/

window.onload = function () {
    CountDown("10 october 2022 9:56:00");
}

function CountDown(countTo) {
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);
    let now = new Date();
    now = (now.getTime() / 1000);
    timeDifference = (futureDate - now);
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)));
    $("#days").html(`${days} D`);
    $("#hours").html(`${hours} h`);
    $("#minutes").html(`${mins} m`);
    $('#seconds').html(`${secs} s`);
    setInterval(function () { CountDown(countTo); }, 1000);
}
/*textarea*/

var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");
    }
    else {
        $("#chars").text(AmountLeft);
    }
});