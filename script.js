
var today = dayjs()
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

    var saveButton = $('<button>')
    .addClass('saveBtn')
    .text('Save')
    .appendTo(hourContainer)
    
    blockContainer.append(hourContainer);
  });

  function boxColor(hour) {
    var timeNow = dayjs();
    var timeEntry = dayjs(hour, 'h A');

    console.log("timeNow:", timeNow.format('MMMM, DD YYYY H A'));
    console.log("timeEntry:", timeEntry.format('MMMM, DD YYYY H A'));
  
    if (timeNow.isBefore(timeEntry, 'hour')) {
      return "future";
    } else if (timeNow.isAfter(timeEntry, 'hour')) {
      return "past";
    } else {
      return "present";
    }
  }
  
  
  $(function () {
    var savedText = localStorage.getItem("text");
    if (savedText) {
      savedText = JSON.parse(savedText); 
      $('.saveBtn').each(function () {
        var blockId = parseInt($(this).parent().attr('id'));
        var textarea = $(this).siblings('textarea');
        if (savedText[blockId]) {
          textarea.val(savedText[blockId]);
        }
      });
    }
    
    $('.saveBtn').on("click", function () {
      var blockId = parseInt($(this).parent().attr('id'));
      var text = $(this).siblings('textarea').val();
      savedText = localStorage.getItem("text");
      if (!savedText) {
        savedText = {};
      } else {
        savedText = JSON.parse(savedText); 
      }
      savedText[blockId] = text;
      localStorage.setItem("text", JSON.stringify(savedText));
    });
  });

