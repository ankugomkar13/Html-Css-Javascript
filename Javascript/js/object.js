//object  1.store data in key-value
//2. we can access data of object using "." dot operator
//3.object is  reference type
//4. object is fornreal world Data
// left side always in string form
//object has not index
// when we want to store real world data

// const user={
//     "name" : "Ankita",
//     "age" : 18,
//     "emailid": "ankitagomkar73@gmail.com",
//     "User hobbies":["reading","playing"]
// }
// //1st way to access data     1st way se hum user hobbies ko access nhi kar sakte the
// const username=user.name;
// const userage=user.age;
// const useremail=user.emailid;
// console.log(username);
// console.log(userage);
// console.log(useremail);

//2nd way to access data
// const username=user["name"];
// const userage=user["age"];
// const useremail=user["emailid"];
// const userhobbies=user["User hobbies"];
// console.log(username);
// console.log(userage);
// console.log(useremail);
// console.log(userhobbies);

// optional chaining means define nhi hai but future me aa sakta hai
// const user = {
//     firstname : "Ankita",
//     address : {housenumber:233}
// }
// console.log(obj?.address?.housenumber);


// destructuring of object
// 1st way to access data
// const{name,age,... other} = user;
// console.log(name);
// console.log(age);
// console.log(other);

//2.way to access data using keys and Object method
// const keys= Object.keys(user);
//only key print karega2
// console.log(keys);
//key and value bhi print karega
// for(let key of keys)
// {
//     console.log(user[key]);
// }

/////function inside  object
// function about()
// {
//     console.log(`name is ${this.firstname} and age is ${this.age}`);
// }
// const user ={
//     firstname :"Ankita",
//     lastname : "Gomkar",
//     age : 23,
//     about : about     //function
// }
// const user1 ={
//     firstname :"rohit",
//     lastname : "lonarkar",
//     age : 27,
//     about : about
// } 
// console.log(user.about);
// user.about();
// user1.about();
//this is use to point out instance of object 
  

//call method   //if hame ne define kiye function ek object me but hame us function ko call karna hai sab object ke liye us time pe call method use karna
//call method is use to call function of object for other object

const user1={
        firstname :"Ankita",
        lastname : "Gomkar",
        age : 23,
        about : function(hobby, fav_singer) 
        {
            console.log(hobby,fav_singer);
            console.log(`name is ${this.firstname} and age is ${this.age}`);
        }    
    }
    const user2 ={
        firstname :"rohit",
        lastname : "lonarkar",
        age : 27,
    }
    // user1.about.call(user1,["Reading","kho-kho"],"darshan" );

    //apply method se we only pass array
    // user1.about.apply(user1,[["Reading","kho-kho"], "Darshan"]);

    //bind method return value 
//   const return_func=  user1.about.bind(user2,[["Reading","kho-kho"], "Darshan"]);
//   return_func();
//   console.log(return_func);

// simply call ,apply,and bind method is use to call function 


  

