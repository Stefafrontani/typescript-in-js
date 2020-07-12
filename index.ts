// COMPILING TO ESX
async function asyncFunction() {
    let pepe = await 3;
}

// DOCUMENTATION
// const url  = new URL('url');


// DECLARATION
// Explicit
let explicitName : string = 'Tano';




explicitName = 23;

// IMPLICIT
let implicitName = 'Tano';

// DEFAULT
let default_type_name;
default_type_name = true

// DEFAULT DISADVANTAGE
let default_type;
default_type = 'String';
default_type = 10;


// CUSTOM TYPES

// Type with primitive type
type FontFamily = String;
const fontFamily : FontFamily = 'Arial';

// Type with specific values
type FontWeight = '300' | '500';
const fontWeight : FontWeight = '500';

// Objects
interface Person {
    name: string,
    surname: string,
    age: number
};

const person : Person = {
    name    : 'Tano',
    surname : 'Frontanini',
    age     : 25,
    // notValidKey : 'notValidValue'
};


// Objects
interface ValidPerson {
    name: string,
    surname: string,
    age: number,
    [key: string]: any,
};

const validPerson : ValidPerson = {
    name     : 'Tano',
    surname  : 'Frontanini',
    age      : 25,
    validKey : 'validValue'
};

// Functions
function exponential(number : number, exponent : number) : number {
    if (exponent === 0) return 1;

    return number * exponential(number, exponent - 1);
};

let state : number;

function exponentialSideEffect(number : number, exponent : number) : void {
    state = number**exponent;
};

exponentialSideEffect(5, 3);
state // Output : 125


// Arrays
// 1 - same type -> other than objects:
const numbers : number[] = [];

numbers.push(1);
// numbers.push('string'); // Output : error
// numbers.push(true);     // Output : error

// 2 - same type -> objects:
const persons : Person[] = [];

// 3 - diferent type -> AKA: "tuple"

type MyList = [number?, string?, boolean?];
const array : MyList = [];

array.push(1);
array.push('string');
array.push(true);

function optionalArgsFunc(number/* ? */ : number, _exponent : number) : number {
    let exponent = _exponent || 1;

    return number ** exponent;
};

// optionalArgsFunc(3); // Error -> optional argument followed by another required
