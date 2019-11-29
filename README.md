# dayplanner

## https://zackmoscow.github.io/dayplanner/

## INDEX.HTML

- added all necessary style/script links, including bootstrap, moment.js, jquery, fontawesome
- otherwise all content generated dynamically

## STYLE.CSS

- slight modification for save button hovering but otherwise untouched

## SCRIPTS.JS

### TIME VARIABLES

- set currentDay variable to pull moment.js data and populate into jumbotron
- get current time (hour only) and convert string to number

### PLANNER BODY

- originally built this in static html and then "translated" into JS
- note "i" id assignments for use later in the application

### ASSIGN STYLE CLASSES TO ROWS

- this should be pretty self-explanatory

### LOAD LOCAL STORAGE

- here's where this got complicated for me...
- figured out that i needed to let activities array equal saved values OR that it needed to be empty
- getting local storage to populate into the correct textarea was very challenging. after a lot of research,  it was clear that using a template literal would be the easiest solution. i had to look at some examples    to get it right...

### SAVE TO LOCAL STORAGE

- added on(click) functionality to saveBtn class
- activityTime was easy
- activityDetail was tougher. researched .prev() jQuery function and then had to play with .find() to make    sure the text area was targeted (this took a lot of trial and error). 
- make sure to use .val() as it is targeting an input
- stringify final result in preparation for local storage
