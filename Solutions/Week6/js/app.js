//#Week 6 JQuery Code Challenge

//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
var box = {
  height: 0,
  width: 0,
  volume: 0
};
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Create a button that prints the object and its attributes to the page (use the span "output".
 
function printObject(){
  var output = 'height: ' + box.height + '; width: ' + box.width + '; volume: ' + box.volume;
  $('#output').html(output);
}

$('#HeightIncrease').click(function(){
  box.height += 1;
});
$('#HeightDecrease').click(function(){
  box.height -= 1;
});
$('#WidthIncrease').click(function(){
  box.width += 1;
});
$('#WidthDecrease').click(function(){
  box.width -= 1;
});
$('#VolumeIncrease').click(function(){
  box.volume += 1;
});
$('#VolumeDecrease').click(function(){
  box.volume -= 1;
});
$('#Print').click(printObject);
$('#Print').click(printObject);

//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume