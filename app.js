/* learn Conditionals */


/*
const age = prompt("How old are you?");
//prompt : 사용자에게 입력창을 줌.
//prompt(message(string), default)
*/

/* ["15" => 15] */

/* 
//출력에서 타입 변경.
console.log(age, parseInt(age)); //문자 타입의 age, 정수 타입의 age 가 출력됨. 
console.log(typeof age, typeof parseInt(age)); //각 age의 type인 string number 이 출력됨.
*/


//입력에서 타입 설정.
const age = parseInt(prompt("How old are you?"));
//type이 Int인 age 입력을 받겠습니다.

/*
console.log(age);
console.log(isNaN(age));
//숫자가 아닌 다른 문자 작성 시 NaN(Not a Number)
//isNaN : return Boolean, 숫자 입력 시, age가 NaN이 아니므로 false, 숫자가 아니면 true를 return.
*/

if(isNaN(age) || age < 0) {
    console.log("😒 Please write a real positive number.");
}else if(age <18){
    console.log("😂 You are too young.");
}else if(age >= 18 && age <=50){
    console.log("😉 You can drink.");
}else if(age > 50 && age <= 80){
    console.log("😎 You should exercise.")
}else if(age > 80) {
    console.log("😁 You can do whatever you want.")
} else {
    console.log("😊 You can't drink.");
}
