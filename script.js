function getColor() {
    console.log(whiteColor);
    var whiteColor = '#fff';
}

getColor();

console.log('===================== ');

let sentence = 'I like rock and my car is ford';
let result = sentence.substring(19,20) + sentence.substr(-10,4) + sentence.slice(26);
console.log(result);

console.log('===================== ');

setTimeout(
    function() {
        console.log("MR");
        setTimeout(
            function() {
                console.log("David");
            }, 2000

        );

    },2000
);
console.log("Bye");

console.log('===================== ');

function myFunc(x) {
    return function(y) {
        return Math.pow(x, y);
    }
}

console.log(myFunc(3)(2));

console.log('===================== ');
let FRAMEWORK = "framework";
console.log ( FRAMEWORK === "FRAMEWORK");



