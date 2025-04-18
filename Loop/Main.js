// For loop 
console.log("\nSimple For loop : ");

for(let i = 1 ; i <= 5 ; i++){
    console.log(i+" ");
}
/*
Infinite Loop :
console.log("Infinite loop : ");
for( let i = -1 ; i < 0 ; i--){
     console.log(i);
}
*/

// While Loop :
console.log("\nWhile Loop :");
let i = 1 ;
while( i <= 5){
    console.log(i);
    i++;
}

// for of loop used for the array , map , set string
let arr = [10 , 20 , 30 , 40 , 50];
console.log("\nfor-of loop :")
for(let Val of arr){
    console.log(Val);
}

// for in loop used for the object :
let object = {
    id : "61",
    name : "Suraj Mali",
    Class : "SY BTech!"
};
console.log("\nfor-in loop");
for(let Val in object){
    console.log(`${Val} : ${object[Val]} `);
}