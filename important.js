var _day = false;
var _jailed = " ";

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
