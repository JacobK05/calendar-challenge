// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs()
// var now = today.format('MMMM, DD YYYY')
var now = dayjs().format('MMMM, DD YYYY ');
$('#currentDay').text(now);



var calenderBlocks = [
  { id: '1', hour: '9', Meridiem: 'am' },
  { id: '2', hour: '10',Meridiem: 'am' },
  { id: '3', hour: '11',Meridiem: 'am' },
  { id: '4', hour: '12',Meridiem: 'pm' },
  { id: '5', hour: '1', Meridiem: 'pm' },
  { id: '6', hour: '2', Meridiem: 'pm' },
  { id: '7', hour: '3', Meridiem: 'pm' },
  { id: '8', hour: '4', Meridiem: 'pm' },
  { id: '9', hour: '5', Meridiem: 'pm' }
  ]
  
  console.log(calenderBlocks)

  var blockContainer = $(".container")
  calenderBlocks.forEach(function(block) {
    var blockEL = $('<div>')
      .attr("id", block.id)
      .addClass('col-2 col-md-1 hour text-center py-3 float-left')
      .text(block.hour + '' + block.Meridiem);
  
    var hourContainer = $('<div>')
      .addClass('row')
      .css('padding-bottom', '5px')
      .append(blockEL);
  
    var textBox = $('<textarea>')
    .addClass('col-10 col-md-11 ' + boxColor(block.hour))
    .appendTo(hourContainer);
  
    blockContainer.append(hourContainer);
  });

  function boxColor(hour) {
    var timeNow = dayjs();
    var timeEntry = dayjs(hour + ' ' + now, 'h A MMMM, DD YYYY');
  
    console.log("timeNow:", timeNow.format('MMMM, DD YYYY H A'));
    console.log("timeEntry:", timeEntry.format('MMMM, DD YYYY H A'));
  
    if (timeNow.isBefore(timeEntry)) {
      return "future";
    } else if (timeNow.isAfter(timeEntry)) {
      return "past";
    } else {
      return "present";
    }
  }





$(function (event) {
  $('.saveBtn').on("click", function(){
    event.preventDefault();
    console.log('clicked')
    var text = localStorage.getItem("text")
    localStorage.setItem('text', text)
  
  })
  
});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
