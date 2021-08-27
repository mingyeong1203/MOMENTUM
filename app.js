/* learn Objects */

/*
const playerName = "mingyeong";
const PlayerPoints = 121212;
const PlayerCute = True;
const PlayerFat = "little bit";
*/

//player[0] = name
//player[1] = points
//player[2] = cute
//palyer[3] = Fat

//const player = ["mingyeong", 1203, True, "little bit"];

const player = {
    name: "mingyeong",
    points: 10,
    fat: true,
}; //Object is not list. 리스트는 모든 값이 같은 의미를 갖는다.

console.log(player);
console.log(player.name);

player.fat = false; //update object 가능.
player.favorite = "IU"; //add object 가능.
console.log(player);
player.points = player.points + 15;
console.log(player);