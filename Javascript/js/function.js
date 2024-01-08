// function is a task which we want to perform repeatively
// 1.It reduce code
// 3 type of java function
// 1.arrow function
// 2.expressive function
// 3.normal function
   

//normal function
// function showmyname()
// {
//     console.log("Ankita");
//     console.log("Ranu");
//     console.log("Khushi");
//     console.log("Anku");
// }

// showmyname();
// showmyname();
// showmyname();

//expressive function
// const showmyname = function()   //function definition
// {
//     console.log("Ankita");
//      console.log("Ranu");
//      console.log("Khushi");
//      console.log("Anku");
// }
// showmyname();   //function calling
// showmyname();

//3.arrow function    //most common use function
// const showmyname = () =>{
//     console.log("Ankita");
//     console.log("Ranu");  
//     console.log("Khushi");
//     console.log("Anku");
// }
// showmyname();



//parameterised function
//  function showmyname(abc)   //parameter passing
//  {
//     return abc;
//  }
// console.log(showmyname("Ankita"));

// const showmyname = function(name)   //function definition
// {
    
//      return name;
// }

// console.log(showmyname("Ankita"));
// console.log(showmyname("Ranu"));



// const showmyname = (name) =>{    

//     return name;
// }
// console.log(showmyname("Ankita"));    //Argument  passing
//  console.log(showmyname("Ranu"));

// obj ={
//     "name":"Ankita",
//     "age":18,
//     "id":12
// }
// const showmyname = (result) =>{    

//     return result;
// }
// console.log(showmyname(obj));

//Write a programto find index of the array number

// const arr=[1,3,5,8,4,60,90,31];
// const showindex= (arr,target) =>{

//     for(let index in arr)
//     {
//      if(arr[index]==target)
//      {
//         console.log(index);
//      }
//     }

// }
// showindex(arr,31);

//write a program sum of three num using function

// const sum= (a,b,c) =>{
    
//     return a+b+c;
// }
// console.log(sum(3,6,4));

//hoisting means we can not access the function with Intialization
 
//call fuction inside function

// function app()
// {
//     const hello =() =>{
//         console.log("Hello");
//     }
//     function calim()
//     {
//         console.log("Ankita");
//     }
//     hello();
//     console.log("Gomkar");
//     calim();
// }
// app();

// function even(num)
// {
//     if(num%2==0)
//     {
//         console.log("NUmber is even");
//     }
//     else
//     {
//         console.log("number is odd");
//     }
// }
// even(10);
// const even=(num) =>{
//     if(num%2==0)
//     {
//         return "Number is even";
//     }
// }
// console.log(even(10));


//Call back function imp  function send as parameter within function

// function myfunction1()
// {
//     console.log("this is my first function");
// }

// function myfunction2(callback) 
// {
//     callback();
// }
 
// myfunction2(myfunction1);

//backtis(`) method
// function multiplayby2(number,index)
// {
//     console.log(`number is ${number*2} and index is ${index}`)
// }


//const arr=[2,3,4,5,6,7,8,9]
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         multiplayby2(arr[i],i);
//     }
// }
//important method of array
//forEach    for each 1st number leta hai fir index aisa raha tab ye method use hogi  forEach method take callback function
//using normal function

// arr.forEach(function(number,index){
//     console.log(`number is ${number*2} and index is ${index}`);
// })

// arr.forEach((number,index)=>{
//     console.log(`number is ${number*2} and index is ${index}`)
// })

//MAP Method ///////
// map return new array
// we can perform loop operation

//  const arr=[2,3,4,5,6,7,8,9]
// //i want multiply of two number
// let newArray = arr.map((element)=> element*element)
// console.log(newArray);


//filter method
// const newElement = arr.filter((element)=>element==8)
// console.log(newElement);

// const users =[
//     {name:"Ankita",id:0},
//     {name:"Khushal",id:1} ,
//     {name:"Ram",id:2},
//     {name:"rohit",id:3},
// ]
// const filteruser = users.filter((user)=>{
//     return user.name=="Khushal"
// })
// console.log(filteruser[0].id);

// const filteruser = users.filter((user)=>
// {
//     return user.name!="Khushal" && user.name!="Ram"
// })
// console.log(filteruser);

//Reverse Method 
//  console.log(users.reverse());

 //find Method
//  const finderuser = users.find((user)=>{
//     return user.id==2;
//  })

// console.log(finderuser);

//REDUCE METHOD //use for addition of array
// const arr=[2,3,4,5,6,7,8,9]
// const total=arr.reduce((accu,current)=>{
//     return accu+ current;
// })
// console.log(total);

// const userproduct=[
    
//       {id:1,name:"Santoor",price:300},
//       {id:2,name:"iphone",price:50000},
//       {id:3,name:"headphone",price:150},
//       {id:4,name:"Speaker",price:600}


// ]
// let total=userproduct.reduce((accu,current)=>{
//         return accu + current.price
//     },0)
//     console.log(total);

//sort methode

// const user=["Ankita","Khushi","Ranu","Anku","Rohit"]
// console.log(user.sort());

// const user=["11","34","56","32","67"];
// const sortorder = user.sort((a,b)=>{
//     return a-b;
// })
// console.log(sortorder);


    





// Interview
// 1.log  keyword
// 2,log() function
// ==  data check onplay
// === data and datatype check
// const value can not be change and it has scope
// let is also have scope and we can change the vale of let
// var ,char ka scope bahar bhi hota hai
// what is forEach method
// what is Array
// what is Object
// what is function
















 

