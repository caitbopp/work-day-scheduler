$(document).ready(function () {

    // Added current day of week and date
    var todaysDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(todaysDate);
    // Add button click
    $(".saveBtn").on('click', function () {
        //console.log(this);
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        // Save to local storage
        localStorage.setItem(time, value);
    });
// Pulling descriptions from local storage and displaying on schedule
    $(".time-block").each(function() {
        var timeBlock = $(this).attr('id');
        $(this).children('.description').val(localStorage.getItem(timeBlock));
    })


    // Adding classes to hour blocks based on current hour 
    function timeTracker() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
            //console.log(blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }
    timeTracker();
    setInterval(timeTracker, 1000);
});