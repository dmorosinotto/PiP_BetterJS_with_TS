var movie = { title: "The Matrix", year: 1999, IMDb: 8.7, 
              genre: ["action","science fiction"], title: "Matrix" };
var ratings = movie.IMDB;
alert(movie.title + ' ' + ratings);



function Point(x, x) {
    this.x = x;
    this.y = y;
}
Point.prototype.dist = function () {
    return Math.sqrt(x * x + y * y);
}
p = new Point(10, 20);
output(p, p.dist(), "------ POINT ------");



function isPast(date) {
    var now = Date().getTime();
    return date.getTime() < now;
}
var Natale = new Date(2016, 12, 25);
output(Natale, isPast(Natale), "------ ISPAST -----");



function ask(question) {
    var answer = confirm(question);
    var answerView = document.getElementByID("answer");
    answerView.innerText = answer;
    answerView.hidden = (answer="");
}



function handleLoad() { 
    console.log("Page loaded!"); 
    document.addEventListener("keydown", function (event) {
        console.log(event.clientX, event.clientY);
    });
}
window.onLoad = handleLoad();










function sortByName(a) {
    var result = a.slice(0);
    result.sort(function(x,y){
        return x.name.localCompare(y.name);
    });
    return result;
}
var test = sortByName(5);
//var test = sortByName([]);
//var test = sortByName([{ name: "Pippo" }, { name: "Pluto" }, { name: "Paperino" }]);
//var test = sortByName(people);
//console.log(test[0].age);
document.getElementById("sorted").innerText = JSON.stringify(test);


/* USE JQUERY
$().ready(function () {
    const SOS = [{ name: "iOS", share: 14.4, free: false }, 
               { name: "WinPhone", share: 7.2, free: true }, 
               { name: "Android", share: 78.1, free: true },
               { name: "BlackBerry", share: 0.2 , free: null }];
    let res = sortByName(SOS);
    $("#sorted").text(JSON.stringify(test));
    output(res[0], `--- RES[0].free = ${res[0].free} ---`);
});
*/