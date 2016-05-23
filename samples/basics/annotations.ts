// BASIC TYPES
var idx: number = 123;
var str: string = "Hello World";
var flag: boolean = true;
var obj: any = {}
obj = undefined; obj = {x: 123, y: null}; obj.y = "456";
// ARRAY
var arr: string[] = ['a', 'b', 'c'];
// INTERFACES
interface Person {
	name: string;
	age?: number;
}
// GENERICS
var people: Array<Person> = [
	{name: "Pippo", age:84},
	{name: "Pluto"},
	{name: "Paperino", age:82}
]
// UNION TYPES
var opt: number | string | string[];
opt = 123; opt = "456"; opt = ["8","9"];
// FUNCTIONS
function output(...args: any[]):void
function output(sep?: string, ...args: any[]): void
function output(sep = '\n', ...args: any[]):void {
	if (typeof sep !== "string") {
		args.unshift(sep);
		sep = '\n';
	}
	args.forEach(arg => document.getElementById("output").innerText += JSON.stringify(arg) + sep); 
};
output(idx,str,flag,obj,arr,people,opt,"--- ANNOTATIONS ---");