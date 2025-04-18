// asyc  always return the promise
async function consum() {
    return 10;
}
console.log(consum());


// 2 : 

function returnDummyPromise(){
      setTimeout(function f(){
        console.log("Hashhh Print Jhalo!");
      }, 10000);
}


async  function Con(){
    console.log("Start!");
      const  response  = await returnDummyPromise();
      const  response1 = await returnDummyPromise();
      const  response2 = await  returnDummyPromise();
    console.log("Response is : "+response);
}
Con();
console.log("Mi pn!")