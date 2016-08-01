(function () {
  // 'use strict';

var expect = chai.expect;
// var should = chai.should();

describe ('pureSplice', function() {
  var testArray = [1, 2, 3];
  it ('pureSplice(arr) should return a copy of the inputted array', function() {
    expect(pureSplice(testArray)).to.eql([1, 2, 3]);
});
});
// sample!
// describe('Compare Numbers', function() {
//   it('1 should equal 1', function() {
//     expect(1).to.equal(1);
//   });
// });
// describe('getDayName()', function() {
//   it('getDayName(0) should return "Monday"', function() {
//     expect(getDayName(0)).to.equal('Monday');
//   });
//   it('getDayName(1) should return "Tuesday"', function() {
//      expect(getDayName(1)).to.equal('Tuesday');
//   });
//   it('getDayName(2) should return "Wednesday"', function() {
//      expect(getDayName(2)).to.equal('Wednesday');
//   });
//   it('getDayName(3) should return "Thursday"', function() {
//      expect(getDayName(3)).to.equal('Thursday');
//   });
//   it('getDayName(4) should return "Friday"', function() {
//      expect(getDayName(4)).to.equal('Friday');
//   });
//   it('getDayName(5) should return "Saturday"', function() {
//      expect(getDayName(5)).to.equal('Saturday');
//   });
//   it('getDayName(6) should return "Sunday"', function() {
//      expect(getDayName(6)).to.equal('Sunday');
//   });
//   xit('getDayName(7) should return "Please enter a number from 0-6"', function() {
//      expect(getDayName(7)).to.equal('Please enter a number from 0-6');
//   });
//   it('getDayName("x") should return "Please enter a number from 0-6"', function() {
//      expect(getDayName("x")).to.equal('Please enter a number from 0-6');
//   });
// });
})();
