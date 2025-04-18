// 1 parameter 
const sqar = (n) =>{
    return n * n;
};
console.log(sqar(2));

// 2 :  multiple parameter 
const Add = ( a , b ) => {
      console.log(a+b);
}
Add( 2 , 3);

// 3 : Multiple Statement 

const Mul = ( x , y ) => {
     console.log(`The X : ${x} and Y : ${y}`);
     return x * y;
}
console.log(Mul(4,2));


// 4 : Retuning an object
const SumandDiff = ( x , y ) => ({
    sum : x + y,
    Diff : x  - y 
})
console.log(SumandDiff(4,2));