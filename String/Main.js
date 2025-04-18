// String is a sequence of characters used to represent text

let Str = "Suraj Mali";

console.log("The Length Of the String : "+Str.length);
// Space is also part of the length

console.log("\nUsing Indexing Print : "+Str[0] , Str[1] , Str[Str.length - 1]);
// Inedxing priting

//Iterate using normal for or for of 
console.log("\nIterate Using the normal for : \n");
for( let i = 0; i < Str.length ; i++ ){
      process.stdout.write(Str[i]);
}

// Iteratr Using the for of loop
console.log("\nIterate Using The For of loop :\n");
for( let Val of Str){
    process.stdout.write(Val);
}


// Conver the string Upper letter 
console.log(" To Upper Letter : "+Str.toUpperCase());
// Conver the string Lower letter 
console.log(" To Lower Letter : "+Str.toLowerCase());

let Str1 = "  Appa Cha  Vishay Lay Hard   " 
// Remove the whitespace  { Remove the  unneccessary Space }
console.log("Normal String Is : "+Str1+" And "+"Trim String is : "+Str1.trim());

// Slice they print the or cut the strin between the starting  index and ending index
console.log("Original String Is : "+Str +" and Slice String Is : "+Str.slice(0,4));


let a  = "Vishal";
let b = "koli";
console.log(" String a : "+a+" String b : "+" Concatination OS the String : "+a.concat(b));

// Print the element which is present at the give index
console.log(a.charAt(2));

/// Replace the a string to the Str string .
console.log(" String a : "+a+" String b : "+b+" Concatination OS the String : "+Str.replace(Str , a));

console.log(Str.endsWith("i")); // true
console.log(Str.startsWith("V")) ;//false

// Check the element index you want ot see 
console.log(Str.indexOf("S")); 

// More present insted of the that string method . 
// you can refer chat Gpt


// https://chatgpt.com/share/6801e8d0-ef28-8003-989d-b04a50c86955