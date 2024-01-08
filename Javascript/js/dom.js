// console.log("first");
//complete html hame window object ke document me milta hai
// this object ke under window object window ke under document document ke under html complete hota hai

// console.log(document.URL);
// const heading = document.getElementById("main heading")
// console.dir(heading)
// heading.textContent = "Hello Ankita";
// heading.style.color = "Red";
// console.log(heading);
 
// function getvalue()
// {
//     const firstname = document.getElementById("firstname")
//     console.log(firstname.value);
//     const heading = document.getElementById("main heading")
//     console.log(heading);
//     heading.textContent=firstname.value
// }
// function getsum()
// {
//     const num1 = document.getElementById("num1.value");
//     const num2 = document.getElementById("num2.value");
//     const num3 = parseInt(num1) + parseInt(num2) ;
//     console.log(num3);
//     document.getElementById("num3").textContent = result;
// }
// const nav = document.querySelector(".nav-Link")
// console.dir(nav.innerHTML);
// nav.innerHTML += "<li class =\"nav-link\">hello</li>"

// const nav = document.querySelector(".div")
// nav.innerHTML = "<h2>Ankita</h2>"
// nav.innerHTML += "<p>Ankita Gomkar very cute girl</p>"

//Doms travelsing   .....IMP for interview

// console.log(domelement);

// const htmlelement = document.childNodes[0];
// // console.log(htmlelement);

// const childs = htmlelement.childNodes
// console.log( childs);
// childs[0].nextSibling.nextSibling.style.background = "red";


// API     ...sychronous   .... setTimeout is use to make asynchronous

// setTimeout(()=>{
//     for(let i=0;i<1000)
// })
// async return us a promise   after async await is use .......promise need to resolve by using then

const BASEURL = "http://retoolapi.dev/U89xXu/data";
const value = fetch( BASEURL);
console.log(value);
value.then((response)=>{
    return response.json();
}).then((res)=>{
    console.log(res);
})

// fetch('http://retoolapi.dev/U89xXu/data')
// 			.then(response => response.json())
// 			.then(data => {
// 				const tableBody = document.querySelector('#api-table tbody');

// 				data.forEach(row => {
// 					const newRow = tableBody.insertRow();
// 					newRow.insertCell().textContent = row.id;
// 					newRow.insertCell().textContent = row.name;
// 					newRow.insertCell().textContent = row.age;
//                     newRow.insertCell().textContent = row.phone;
// 				});
// 			})
// 			.catch(error => console.error(error));

function deletedata(){
	fetch(BASEURL + "/7",{
		method: 'DELETE',//*GET ,POST,PUT DELETE ,ETC.
	headers:{
		'Content-Type':'application/json'
		//'Content-Type':'application/x-www-form-urlencoded',
	},
	refferrerPolicy:'no-referrer',//no-refferrer,'no-referrer-when-downgrade,origin,origin-width
	//body:jSON.stringify(data) //body data type must match "Content - type" header
	}).then(resp=>resp.json()).then(res=>console.log(res));
}






