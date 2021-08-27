/* learn cosnt, variable */

const a = 5; //const : 바뀌지 않는 값(변수). -> update X
const b = 2;

const myName = "mingyeong"; //문자(string) 도 가능. 
const veryLongVariableName = 0; //변수 이름은 공백 대신 다음 단어의 첫 문자를 대문자로 표현.

console.log(5+2); //console.log :출력.
console.log(5-2);
console.log(5*2);
console.log(5/2);

console.log(a+b); 
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log("hello " + myName);


/* learn let */

let c = 8; //let : 변수의 값 변경 가능. -> update O
let d = 3;
let myNameis = "mingyeong"; //변수 생성 시 let O

console.log("hello " + myNameis);

myNameis ="mingong"; //업데이트 시 let X

console.log("hello " + myNameis); 


/* learn Booleans */ 

//Booleans : true or false
//비디오가 재생되고 있는가?, 웹사이트가 로딩되고 있는가? ...

const amIFat = true; //"true" -> X
console.log(amIFat);

const nothing = null; //null : 아무것도 없음. 값이 존재하지 않음. 비어있음.
console.log(nothing);

let something; 
console.log(something); //출력 결과 -> undefinde : 정의되어있지 않음.

console.log(nothing, something);
