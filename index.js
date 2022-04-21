// 1.

function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter(); // function names are case sensitive.
alert(counter());
alert(counter());
alert(counter());
alert(counter());


// 2.

let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count); // What is logged? - 1
    }
  console.log(count); // What is logged? - 0
})();


// 3.

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? - three times 3, for loop will run 3 times
    }, 1000);
}

// 4. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

const outerFunction = function(length){
    innerFunction = function(breadth){
        console.log(`the area of rectangle is ${length*breadth}`);
    }
}
outerFunction(20);
innerFunction(50);


// 5. Take a variable in outer function and create an inner function to increase the counter every time it is called

let outer = function(){
    variableCount = 0;
    inner = function(){
        console.log(`the count is ${variableCount+=1}`)
    }
}

outer();
inner();//1
inner();//2
inner();//3
inner();//4
inner();//5

// 6.
// Print Output

var a = 12;
(function () {
  alert(a);
})();

// 7.

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

// 8.

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + "outerArg" + "\n" +
        "innerArg = " + "innerArg" + "\n" +
        "outerVar = " + "outerVar" + "\n" +
        "innerVar = " + "innerVar" + "\n" +
        "globalVar = " + "globalVar");
    
    })(456);
})(123);
























