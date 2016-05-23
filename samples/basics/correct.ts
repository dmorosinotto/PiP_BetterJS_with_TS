var movie = { title: "The Matrix", year: 1999, IMDb: 8.7, genre: ["science fiction"] };
var ratings = movie.IMDb;
alert(movie.title + ' ' + ratings);



function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.dist = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
}
var p = new Point(10, 20);
output(p, p.dist(), "------ POINT ------");



function isPast(date) {
    var now = new Date().getTime();
    return date.getTime() < now;
}
var Natale = new Date(2015, 11, 25);
output(Natale, isPast(Natale), "------ ISPAST -----");



function ask(question) {
    var answer = prompt(question);
    var answerView = document.getElementById("answer");
    answerView.innerText = answer;
    answerView.hidden = (answer == "");
}



function handleLoad() { 
    console.log("Page loaded!"); 
    document.addEventListener("mousedown", function (event) {
        console.log(event.clientX, event.clientY);
    });
}
window.onload = handleLoad;


interface IName {
    name: string;
}
function sortByName<T extends IName>(a: T[]) {
    var result = a.slice(0);
    result.sort(function(x,y){
        return x.name.localeCompare(y.name);
    });
    return result;
}

//var test = sortByName(5);
//var test = sortByName([]);
//var test = sortByName([{ name: "Pippo" }, { name: "Pluto" }, { name: "Paperino" }]);
var test = sortByName(people);
console.log(test[0].age);
document.getElementById("sorted").innerText = JSON.stringify(test);


declare var $:any // BETTER USE typings install jquery --ambient
$().ready(function () {
    const SOS = [{ name: "iOS", share: 14.4, free: false }, 
               { name: "WinPhone", share: 7.2, free: true }, 
               { name: "Android", share: 78.1, free: true },
               { name: "BlackBerry", share: 0.2 , free: null }];
    let res = sortByName(SOS);
    $("#sorted").text(JSON.stringify(test)).css("color","red");
    output(res[0], `--- RES[0].free = ${res[0].free} ---`);
});
