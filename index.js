// write your code below!
var happyHolidays = function happyHolidays(){
  return 'Happy holidays!';
}
happyHolidays();
function happyHolidays(name){
  return `Happy holidays, ${name}!`;
}
happyHolidays('Carlos');
function happyCustomHolidayTo(holiday,name){
  return `Happy ${holiday}, ${name}!`;
}
happyCustomHolidayTo('Halloween','Carlos');
function holidayCountdown(holiday,days){
  return`It's ${days} days until ${holiday}!`;
}
holidayCountdown('Halloween',20);
