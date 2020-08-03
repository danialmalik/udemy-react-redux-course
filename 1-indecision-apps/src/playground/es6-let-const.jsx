var varName = 'Name1';
var varName = 'Name2';
console.log('varName', varName);

let letName = 'Name1';
// let letName = 'Name2';
console.log('letName', letName);

const constName = 'Name1';
// const constName = 'Name2';
console.log('constName', constName);


/**
 * Block Scopping
 */

var fullname = 'Test Name';

if (fullname){
    var [firstName, lastName] = fullname.split(' ');
    console.log('Inside block', firstName)
    console.log('Inside block', lastName)

}
console.log('Outside block', firstName)



let letFullname = 'Test Name';

if (letFullname){
    let [letFirstName, lastName] = letFullname.split(' ');
    console.log('Inside block', letFirstName)
    console.log('Inside block', lastName)

}

// exception
// console.log('Outside block', letFirstName)



const constFullname = 'Test Name';

if (constFullname){
    const [constFirstName, lastName] = constFullname.split(' ');
    console.log('Inside block', constFirstName)
    console.log('Inside block', lastName)

}

// exception
// console.log('Outside block', constFirstName)
