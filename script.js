$(document).ready(function () {

    // Added current day of week and date
    var todaysDate = moment().format("dddd, MMMM Do");
    $("#currentDay").text(todaysDate);
    // Add button click
    $(".saveBtn").on('click', function () {
        console.log(this);
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        // Save to local storage
        localStorage.setItem(value, time);
    });

    // How to pull from local storage and keep info on table?

    // Adding classes to hour blocks based on current hour 
    function timeTracker() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        })
    }
    timeTracker();
});