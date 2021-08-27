/* learn Arrays */

//Arrays : 배열.

/* ---------------------------------------------------------------------
//Arrays가 없을 경우
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

//const daysOfWeek = mon + tue + wed + thu + fri + sat + sun; -> 불편하고 특정 문자 호출 불가.

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]; //변수 선언 후 배열 작성
-----------------------------------------------------------------------*/

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; //변수 선언 없이 ["**","--"]
const nonsense = [1, 2, "hello", false, null, true, undefined, "mingyeong"]; //배열 안에 숫자, 문자 등 가능.

console.log(daysOfWeek, nonsense);

//Get Item from Array
console.log(daysOfWeek[4]);

//Add one more day to the array
daysOfWeek.push("sun")

console.log(daysOfWeek);


/* Example */

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

console.log(toBuy);
// console.log(toBuy[99999]); -> undifined
