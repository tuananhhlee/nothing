// aFunction("A");
// function aFunction(a){
//     console.log("Hello " +a);
// }

// var bFunction = function(name,printName){
//     printName(name);
// }
// bFunction("Huy",aFunction);

//Callback
// function add5(getNumber, printNum){
//     var num = getNumber() +5;
//     printNum(num);
// }

// function randomNumber(){
//     return Math.floor(Math.random()*1000);
// }

// function printNumber(num){
//     console.log(num);
// }
// //add5(randomNumber, printNumber);

// setTimeout(function(){
//     add5(randomNumber,printNumber);
// },1000*1);

// console.log("Ahihi");

// var cFunction = () =>{
//     console.log("Hello C");
// }


//fuction scope
// var a = 10;

// function abc(){
//     var b = 15;
//     function abcd(){
//         var c = 25;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     abcd();
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// abc();
// console.log(a);
// console.log(b);

// function printNum(num, waitTime){
//     setTimeout(function(){
//         console.log(num);
//     },waitTime*1000);
// }

//Block scope{ }
function countDown(num){
    for(let i = num; i >= 0; i--){
        //i==-1;
        setTimeout(function(){
            console.log(i);
        },(num-i)*1000);
    }
}
countDown(5);