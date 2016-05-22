// BASIC TYPES
var idx: number = 123;
var str: string = "Hello World";
var flag: boolean = true;
var obj: any = {y: null, z: 123};
obj.y = 456; obj = undefined; obj = "";
// ARRAY
var arr: string[] = ['a', 'b', 'c'];
// INTERFACES
interface Person {
	name: string;
	age?: number;
}
// GENERICS
var people: Array<Person> = [
	{name: "Pippo", age:78},
]
// UNION TYPES
var opt: number | string | string[];
opt = 123; opt = "456"; opt = ["8","9"];