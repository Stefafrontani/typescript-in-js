// COMPILING TO ESX
async function asyncFunction() {
    let pepe = await 3;
}
// DOCUMENTATION
// const url  = new URL('url');
// DECLARATION
// Explicit
let explicitName = 'Tano';
// explicitName = 23;
// IMPLICIT
let implicitName = 'Tano';
// DEFAULT
let default_type_name;
default_type_name = true;
// DEFAULT DISADVANTAGE
let default_type;
default_type = 'String';
default_type = 10;
const fontFamily = 'Arial';
const fontWeight = '500';
;
const person = {
    name: 'Tano',
    surname: 'Frontanini',
    age: 25,
};
;
const validPerson = {
    name: 'Tano',
    surname: 'Frontanini',
    age: 25,
    validKey: 'validValue'
};
// Functions
function exponential(number, exponent) {
    if (exponent === 0)
        return 1;
    return number * exponential(number, exponent - 1);
}
;
let state;
function exponentialSideEffect(number, exponent) {
    state = number ** exponent;
}
;
exponentialSideEffect(5, 3);
state; // Output : 125
// Arrays
// 1 - same type -> other than objects:
const numbers = [];
numbers.push(1);
// numbers.push('string'); // Output : error
// numbers.push(true);     // Output : error
// 2 - same type -> objects:
const persons = [];
const array = [];
array.push(1);
array.push('string');
array.push(true);
function optionalArgsFunc(number /* ? */, _exponent) {
    let exponent = _exponent || 1;
    return number ** exponent;
}
;
// optionalArgsFunc(3); // Error -> optional argument followed by another required
