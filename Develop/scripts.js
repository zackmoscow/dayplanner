$(document).ready(function() {

    //SET ALL NECESSARY TIME VARIABLES VIA MOMENT.JS

    var currentDay = moment().format("dddd, MMMM Do, YYYY");
        $("#currentDay").text(currentDay);

    var currentTime = moment().hour();
    var currentTimeNum = Number(currentTime);

    //CREATE PLANNER BODY WITH NECESSARY CLASS AND ID ATTRIBUTES

    for (i = 9; i < 18; i++) {
        var rowDiv = $("<div class='row dateRow'>");
        var leftCol = $("<div class='col-2 hour'>");
        var centerCol = $("<div class='col-8 activity'>");
            centerCol.attr("id", i);
        var rightCol = $("<div class='col-2 saveBtn'>");
            rightCol.attr("id", i)
        var hourOfDay = $("<p>").text(i + ":00");
        var taskInput = $("<textarea>");
            taskInput.attr("class", i)
        var saveButton = $("<span class'fas fa-save fa-2x'>");
        rowDiv.append(leftCol);
        rowDiv.append(centerCol);
        rowDiv.append(rightCol);
        rightCol.append(saveButton);
        centerCol.append(taskInput);
        leftCol.append(hourOfDay);
        $(".container").append(rowDiv);
    };
        
    //ASSIGN STYLE CLASSES TO HOUR ROWS BASED ON IDS SET ABOVE

    for (i = 9; i < 18; i++) {  
        var timeCheck = '#' + i;
        if (i > currentTimeNum) {
            $(timeCheck).addClass("future");
        };
        if (i === currentTimeNum) {
            $(timeCheck).addClass("present");
        };
        if (i < currentTimeNum) {
            $(timeCheck).addClass("past"); 
        };      
    };

    //LOAD LOCAL STORAGE IF IT EXISTS

    var activities = JSON.parse(localStorage.getItem('planner')) || {};

    function loadActivities() {
        for (i = 9; i < 18; i++) {
            $(`.${i}`).text(activities[i]);
        }
    }

    //SAVE USER INPUT TO LOCAL STORAGE
    $(".saveBtn").on('click', function() {
        var activityTime = $(this).attr("id");
        var activityDetail = $(this).prev().find("textarea").val();
        activities[activityTime] = activityDetail;
        localStorage.setItem('planner', JSON.stringify(activities));
    });

    loadActivities();

});