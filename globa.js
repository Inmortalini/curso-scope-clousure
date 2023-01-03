// // variables
// var a; //declarando la variable
// var b= "b"; //declaramos e inicializamos
// b = 'bb';
// var a = 'aa' //redeclaracion 

// //Global Scope
// var fruit= 'apple';

//  function beastFruit (){
//     console.log(fruit);
//  }
//  beastFruit();
 
// function sumWithClosure(firstNum) {
//    let a = firstNum;
//    function segunda(secondNum) {
//      let b = secondNum;
//      if (!b) {
//        return a
//      }
//      else {
//        return a + b
//      }
//    }
//    return segunda
//  }
// Money box
// function moneyBox(){
//    let saves=0;
//    console.log(saves);
//    function counter(coins){
//       saves+=coins;
//       console.log(`Your account balance is :$${saves}`)
//    }
//    console.log(`Your saves could be:$${saves}`)
//    return counter
// }
// const myAccount =moneyBox();

// myAccount(5);
// myAccount(5);
// myAccount(5);
//Pet Ex
function createPetList() {
   let myPet = [];
   function agrega(pet) {
     if (pet) {
       myPet.push(pet)
       console.log(myPet);
     }
     else{return myPet}
   }
   mylist=[]
   mylist.push(myPet)
   return agrega
 }
 
 createPetList()("rat")
 createPetList()("rat")
 createPetList()("rata")
 createPetList()("raton")
console.log(createPetList()())

//Call Back
function sum(numero,numero2){
  return numero +numero2
}
function cal(n1,n2,callback){
  return callback(n1,n2)
}
const tuTurrito=cal(5,2,sum)
console.log(tuTurrito);

//Cow counts
const cows = 101;
const countCows = new Promise(function(resolve, reject) {
	if(cows > 10){
		resolve(`Tenemos ${cows} vacas en la granja`);
	} else {
		reject("No tenemos las suficientes vacas en la granja");
	}
});

/*
	Con '.then' se obtiene el resultado de la promesa de acuerdo a resolve o reject
	Con '.catch' se obtene más información de un futuro error que se presente
	Con '.finally' se puede indicar con un mensaje que ya se ejecutó la promesa (opcional))
*/
countCows
	.then((result) =>	console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log('Finally promise'))