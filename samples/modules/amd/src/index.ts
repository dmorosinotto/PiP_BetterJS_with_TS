import { Log } from "./log";
var init = 123;

var l = new Log( document.getElementById("output") );
l.print("World");

var o = new Log( $("#output").get(0), "Ciao" )
o.print("Pippo");

