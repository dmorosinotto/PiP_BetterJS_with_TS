/**
 * Make all properties in T optional
 */
type MYPartial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Make all properties in T readonly
 */
type MYReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * From T pick a set of properties K
 */
type MYPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

/**
 * Construct a type with a set of properties K of type T
 */
type MYRecord<K extends string | number, T> = {
    [P in K]: T;
}




interface Person {
    name: string;
    age: number;
    sex: boolean | string;
}

var me: Person = {
    name: "Daniele",
    age: 40,
    sex: true
}

var p: MYPartial<Person> = {age: 20}

var a: Person["age"];
type PA = MYPick<Person, "age" | "name">
var f: MYRecord<keyof PA,boolean>

function HasValues<T>(p: MYPartial<T>): MYRecord<keyof T, boolean> {
    var r: MYRecord<keyof T, boolean> = {} as MYRecord<keyof T, boolean>;
    for(let k in p) {
        r[k] = !!p[k];
    }
    return r;
} 

var k = HasValues(p);
k.sex
var pa: MYPick<Person, "age" | "name"> = { age: me.age, name: me.name };

var h = HasValues(pa);
h.age //.sex //ERROR ^_^
