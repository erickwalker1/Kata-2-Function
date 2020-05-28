//KATA 01

function add(a, b){
    return a + b;
}
console.log(add(15, 4))

//KATA 02

function multiply(a, b){

     let total = 0

    for( let i = 0; i < b; i++){

        total = add(a, total);
    }
    return total;
}
    console.log(multiply(15, 4))

//KATA 03 

function power(a, b){

    let product = 1
 
    for(let i = 0; i < b; i++){

        product = multiply(a, product)
    }
       return product;
}
console.log(power(2, 8))

//KATA 04 

function factorial(a){

    let factor = 1 

    for(let i = a; i >= 1; i --){
        factor = multiply(factor, i) 
    }
    return factor;
}
console.log(factorial(5));

/*function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);
  SOURECE: EDPRESSO HOW TO FIND THE FACTORIAL OF A NUMBER IN JAVASCRIPT 
  
  
  METHODS FOR KATA 02: 

  /*function multiply(num, times){
let n = num
    for(i = 1; i < times; i++ ){
        num += n;
    return num;
    }
}*/
//METHOD 1 ~ USING FOR LOOPS

/*function multiply(num, times){
let n = num
    for(i = 1; i < times; i++ ){
        num += n;
    return num;
    }
}*/

/*function multiply (a, b){

    let originalA = a

    for (i = 2; i <=b; i++){

        a += originalA;
    }
    return a;
}
console.log(multiply(15, 4))*/

//METHOD 2 ~ SHORTCUT USING ('c'.repeat(a).repeat(b).length)

/*function multiply(a, b){

return ("c".repeat(a).repeat(b).length)
}
console.log(multiply(15, 4))*/