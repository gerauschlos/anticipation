var _day = false;
var _jailed = "";
var jailor = "226034191047983114"
var trial = "noone"
var votes = 0


exports.setday = function(day) {
  _day = day;
};

exports.getday = function() {
  return _day;
};

exports.setjailed = function(jailed){
  _jailed = jailed;
}

exports.getjailed = function() {
  return _jailed;
}

exports.gettrail = function() {
  return trial
}

exports.settrail = function(victim){
  trial = victim;
}

exports.getvotes = function() {
  return votes
}

exports.setvotes = function(number1){
  votes += number1;
}
