//const arr=['Grapes','Orange','apple','Banana','Tomato'];
// arr.push("kivi"); //Insert data At last
// console.log(arr);
// arr.unshift("Mango");//Insert data at first Index
// console.log(arr);
// let lastelement=arr.pop(); //delete element from last
// console.log(lastelement);
// let firstelement=arr.shift();//delete element from first
// console.log(firstelement);

// const arr1=[... arr,'mango','123']; // spread operator [...] provide the access of all element in an array .....concate and assign karne ke liye according to ES8 we assign arr to arr1 amd concate mango ,123 
// console.log(arr1);

// const arr2=[].concat(arr1,[1234,12,67]);  //concate method use
// console.log(arr2);

// const arr3=arr2.slice(0).concat(['Ankita','gomkar',arr]); //slice is for indexing to the array
// console.log(arr3); 

//Array Disturturing = array me se element chahiye toh disturturing means dividing array
// const arr=['Grapes','Orange','apple','Banana','Tomato'];
//  const [firstelement,secondelement,...otherelement] = arr; //spread operator we use here

//  console.log(firstelement);
//  console.log(secondelement);
//  console.log(otherelement);

// const [,,thirdelement,] = arr; //only third element chahiye isliye
// console.log(thirdelement);  // two method hai indexing se bhi element extract kar sakte hai or distructuring se bhi extract kar sakte hai

// const a = [1,2,3,4,5]
// const b =[345,234,234,345,46,2,332,54,56,745,13,2]

// //merge 
// const arr = [...a,...b]
// console.log(arr);
// //sort
// const sorted = arr.sort((a,b)=>a-b);
// console.log(sorted);
 
 
//homework 
const arr=[1,22,4,33,1,2,22,34];
{
    function remove(arr)
    {
        return arr.filter((item,index)=> arr.indexOf(item)===index);
    }
    console.log(remove(arr));
 }





 

