var alert = function(s){WScript.Echo(s)};

var arg = WScript.arguments(0);
alert(arg.toUpperCase() + " now upper case");
