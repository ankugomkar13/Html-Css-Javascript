let num=20;
let output=num+num;
console.log(num);
console.log(output);
console.log(num-num);
console.log(num*num);
console.log(num/num);


const num1=10;

const num2=20;

console.log(num1!==10);
console.log(num1==10 && num2==20);
console.log(num1!=10 && num2==20);

console.log(num1==10 || num2==20);
console.log(num1!=10 || num2==20);

console.log(num1!=20 || num2!=10);
console.log(num1!=10 || num2!=20);

console.log(num<=10 || num2<=20);
console.log(num<10 || num2<=20);
console.log(num<=10 || num2<=20);
console.log(num>20 || num2<10);
console.log(num1===num2);   

let num3="10"
console.log(num1<num2?num3:num2);
console.log(num1==num2?num3+num1:"nothing");

console.log(num1==num2? +num3+num1:"Nothing");


const name=`Ankita`
const age="23"
if(name=="Ankita0" && age===23)
{
    console.log(name,age);
}

const temp =0;
if(temp==0)
{
    console.log("to cold outside");
}
else if(temp>=10)
{
    console.log("to colder outside");
}
else if(temp>=25)
{
    console.log("to normal outside");
}

const temp1=2;
switch(temp1)
{
    case 0:
        console.log("to cold outside");
        break;
    case 1:
        console.log("to colder outside");
        break;
     case 2:
        console.log("to normal outside");
        break;
     default:
        console.log("to hot outside");
        break;
 }










