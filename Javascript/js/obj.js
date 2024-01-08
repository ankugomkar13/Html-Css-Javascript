// //proto
// //prototype
// //new 
// //class
// let usermethods={
//     about:function(){
//         console.log(`name is ${this.firstname}age is${this.age}`)
//     },
//     ageis18:function(){
//         return this.age>18;
//     },
//     callmyname:function(){
//         console.log(this.firstname);
//     }
// }

// function user(firstname,lastname,age){
//     let user={};
//     user.firstname=firstname
//     user.lastname=lastname
//     user.age=age;
//     user.about=function(){
//         console.log(`name is${this.firstname}age is${this.age}`)
//     },
//     user.ageis18=function(){
//         return this.age>18;
//     }
//     return user;
// }
// const user1=user("shailesh","gokhale",23);
// const user2=user("vinay","gokhale",25);
// console.log(user1);
// console.log(user2);

// user1.about();
// console.log(user1.ageis18());
// user2.about();


// __proto__ or [[prototype]] is same   object provide us Object.create()  ....tab use karte jab hume dusre obj ke function ya value other obj me use karna ho tab

// let usermethods={
//     about:function(){
//         console.log(`name is ${this.firstname}age is${this.age}`)
//     },
//     ageis18:function(){
//         return this.age>18;
//     },
//     callmyname:function(){
//         console.log(this.firstname);
//     }
// }



// function user(firstname,lastname,age){
//     let user=Object.create(usermethods);
//     user.firstname=firstname
//     user.lastname=lastname
//     user.age=age;
//     return user;
// }
// const user1=user("shailesh","gokhale",23);
// const user2=user("vinay","gokhale",25);
// console.log(user1);
// console.log(user2);
// user1.about();


//prototype.......    proto and prototype different from each other   ...prototype provide method  function_name.prototype.name = value 
// function provide us free space in the form of Object
// proto obj ke pass hota 
// prototype function ke pass hota

 
// function user(firstname,lastname,age){
//         let user=Object.create(user);
//         user.firstname=firstname
//         user.lastname=lastname
//         user.age=age;
//         return user;
//     }
    // user.prototype.about = function(){
    //     console.log(`name is ${this.firstname}age is${this.age}`)
    // }
    // user.prototype. ageis18 = function(){
    //     return this.age>18;
    // }
    // user.prototype.callmyname = function(){
    //     console.log(this.firstname);
    // }
// const user1=user("shailesh","gokhale",23);
// const user2=user("vinay","gokhale",25);
// console.log(user1);
// console.log(user2);
// user1.about();

///////   new keyword////////
// new create this
///new = this{}
//new return itself
// function Createuser(firstname,lastname,age){
//     this.firstname=firstname
//    this.lastname=lastname
//    this.age=age;
   
// }
// Createuser.prototype.about = function(){
//     console.log(`name is ${this.firstname}age is${this.age}`)
// }
// Createuser.prototype. ageis18 = function(){
//     return this.age>18;
// }
// Createuser.prototype.callmyname = function(){
//     console.log(this.firstname);
// }

// const user1 = new Createuser("Ankita" , "Gomkar",35)
// console.log(user1.firstname);
// user1.about();

const number = [1,2,3,4,5]



// ES6 provide us many class 
class Createuser{
    constructor(firstname,lastname,age){

   this.firstname=firstname;
   this.lastname=lastname;
   this.age=age;
    }
    about(){
        console.log(`name is ${this.firstname}age is${this.age}`)
    }
    ageis18(){
        return this.age>18;
    }
    callmyname(){
        console.log(this.firstname);
    }
    
}
const user1 = new Createuser("Ankita" , "Gomkar",35)
    console.log(user1.firstname);
    user1.about();


