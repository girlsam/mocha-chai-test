//add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

//first test to return day of week based on index
// var dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//
// function getDayName(num) {
//   for (var i = 0; i < dayArray.length; i++) {
//     if (num >= 7) {
//       return "Please enter a valid number from 0-6";
//     } else {
//       return dayArray[num];
//     }
//   }
// }
//
// getDayName(0);
// getDayName(1);
// getDayName(2);
// getDayName(3);
// getDayName(4);
// getDayName(5);
// getDayName(6);
// getDayName(7);
// getDayName("x");

//second test to return new copy of array passed in as argument
function pureSplice(arr) {
  return arr.splice();
}
pureSplice([1, 2, 3]);
