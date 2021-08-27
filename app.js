/* learn Function */

console.log("Hello my name is Mingyeong");
console.log("Hello my name is Mingu");
console.log("Hello my name is Mimgong");
console.log("Hello my name is Mingong");

//Function : 코드의 반복을 줄이기, 코드를 캡슐화해서, 여러 번 실행할 수 있음.

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age + ".");
}

sayHello("mingyeong", 23);
sayHello("mingu", 20);
sayHello("mimgong", 27);
sayHello("mingong", 19);


function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(a, b){
    console.log(a/b);
}

plus(8, 60);
plus(8, 6);
divide(8, 6);
divide(98, 20);


/* Example */

const player = {
    name: "mingyeong",
    sayHello: function(otherPersonName) {
        console.log("hello! " + otherPersonName +". nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("mingong");
player.sayHello("mingu");