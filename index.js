// write your code below!
var happyHolidays = function happyHolidays(){
  console.log("Happy holidays!");
};
happyHolidays();
var happyHolidaysTo = function happyHolidays(name){
  console.log(`Happy holidays, ${name}!`);
};
happyHolidaysTo ("Carlos");
var happyCustomHolidayTo = function happyCustomHolidayTo(holiday,name){
  console.log(`Happy ${holiday}, ${name}!`);
};
happyCustomHolidayTo ("Halloween","Carlos");
var holidayCountdown = function holidayCountdown(holiday,days){
  console.log (`It's ${days} days until ${holiday}!`);
};
holidayCountdown ("Halloween",2);
