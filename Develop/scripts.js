var currentDay = moment().format("dddd, MMMM Do, YYYY");
    $("#currentDay").text(currentDay);

var colorAssign = $(".col-8");
var currentTime = moment().hour();
    if (parseInt(colorAssign.attr("data-moment")) > currentTime) {
        colorAssign.attr("class", "col-8 future");
    } 
    if (parseInt(colorAssign.attr("data-moment")) < currentTime) {
        colorAssign.attr("class", "col-8 past");
    } 
    if (parseInt(colorAssign.attr("data-moment")) === currentTime) {
        colorAssign.attr("class", "col-8 present");
    } 

var saveBtn = $(".saveBtn");

