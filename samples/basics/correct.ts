/// <reference path="output.d.ts" />


var movie = { title: "Matrix", year: 1999, IMDb: 8.7 };
var ratings = movie.IMDb;
output(movie.title + ' ' + ratings);



function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.dist = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
}
var p = new Point(10, 20);
output(p, p.dist());



function isPast(date) {
    var now = new Date().getTime();
    return date.getTime() < now;
}
var Natale = new Date(2015, 11, 25);
output(Natale, isPast(Natale));



function ask(question) {
    var answer = prompt(question);
    var answerView = document.getElementById("answer");
    answerView.innerText = answer;
}



function handleLoad() { console.log("Page loaded!"); }
document.onload = handleLoad;



function newCoinToss() {
    return Math.random() > 0.5 ? "TESTA" : "CROCE";
}
var tiri = [1, 2, 3, 4, 5].map(newCoinToss);
var allHeads = tiri.every(function (tiro) {
    return tiro == "TESTA";
});
if (allHeads) alert(tiri.length + " volte TESTA di fila!?!");



document.addEventListener("mousedown", function (event) {
    console.log(event.clientX, event.clientY);
});


interface Named {
    name: string;
}
function sortByName<T extends Named>(a: T[]) {
    var result = a.slice(0);
    result.sort(function(x,y){
        return x.name.localeCompare(y.name);
    });
    return result;
}

var data = [{ name: "Pippo", age: 123, geek: true }, { name: "Pluto", age: 45, geek: false }, { name: "Paperino", age: 67, geek: null }]
var res = sortByName(data);
document.getElementById('content').innerText = JSON.stringify(res);


//declare var $:any

$().ready(function () {
    var arr = [{ name: "Pippo" }, { name: "Pluto" }, { name: "Paperino" }]
    var test = sortByName(arr);
    $("#content").text(JSON.stringify(test));
});
