// Task-1 istenilen ededin quvvetini tapmaq 

// number =3  //3*3*3*3
// power =4

// let number =5;
// let power =3;
// let result =1;

// for(let i=0;i<power;i++){
//     result *=number;   //5*1=5*5=25*5=125
// }
// console.log(result);


// DRY --Don't repeat yourself
//Function-reuseable code block

// getPower(4,5)
// function getPower(number,power){ //parametr
    
//     let result =1;
//     for(let i=0;i<power;i++){
//         result *=number;   //5*1=5*5=25*5=125
//     }
//     console.log(result);
// }
// getPower(3,5) //arguments
// getPower(3,5);
// // console.log("----------");
// // getPower(2,5);
// // console.log("----------");
// // getPower(5,3);

// getPower(3,5);



// function Sum(arr){

//     let result =0;
//     for (const item of arr) {
//         if(!isNaN(item))
//         result +=item;
//     }
//    return result;
  
// }
// console.log(Sum([10,20,30,"Emil",true,null]))


// let number1 =4;
// let power1 =4;
// let result1 =1;

// for(let i=0;i<power1;i++){
//     result1 *=number1;   //5*1=5*5=25*5=125
// }
// console.log(result1);

// Arrow Function c#-da delegate sayilit(lambda expression)
// console.log(firstname);
// let firstname ="Eemil";
//let var const


// let getPi=()=>3.14;

// const getPi=()=>3.14;
// console.log(getPi());

// const showNumber=n=>console.log(n);
// showNumber(5);


// const Total =(n,m)=>{
//     let diff = n-m;  // 4-5 =-1
//     let sum = n+m;  //4+5=9
//     return diff+sum;//9-1=8
// }

// console.log(Total(4,5));
// console.log("---------");
// console.log(Total(3,3));

// Local(Scope ) variable,Global variable

// let firstname = "Emil";
// if(true){
//     // let firstname ="Sunal"; 
//     console.log(firstname);
//     //Veli
// } 
// console.log(firstname); //Emil


// var firstname = "Nazile";

// if(true){
//     var firstname ="Veli";
//     console.log(firstname);
// }
// console.log(firstname);

