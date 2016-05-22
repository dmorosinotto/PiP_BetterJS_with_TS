// BASIC TYPES
var n: number = 123;
var s: string = "Hello World";
var b: boolean = true;
var x: any = {y: null, z: 123};
x.y = 456; x = undefined; x = ""; // ALL VALID
// ARRAY
var a: string[] = ['a', 'b', 'c'];
// INTERFACES
interface Person {
	name: string;
	age: number;
}
// GENERICS
var people: Array<Person> = [
	{name: "Pippo", age:78},
]
// UNION TYPES
var u: number | string | string[];
u = 123; u = "456"; u = ["789"]; // ALL VALID