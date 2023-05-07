// targetting particular html element
var div=document.getElementById('div1');

//initialization of array
var arrayOfNumbers=[1,2,3,56,100];
var arrayofName=["Ram","Jaya","Suraj"];

// initialization of object
var obj ={
    name:"jaya",
    age:21
}

console.log(obj.age);
console.log(obj.name);
div.innerHTML=obj.name;



// looping with for loop
// for (let index = 0; index < arrayOfNumbers.length; index++) {
//     console.log(arrayOfNumbers[index]);

//     var item=document.createElement("li");
//     item.textContent=arrayOfNumbers[index];
//     div.appendChild(item);
    
    
// }

// // looping with foreach
// arrayofName.forEach(element => {
//     var item=document.createElement("li");
//     item.textContent=element;
//     div.appendChild(item);
   
// });




// // console.log(div.getAttribute('data-stduent-name'));
// // console.log(div.getAttribute('class'));
// // console.log(div.innerHTML);

const img=document.getElementById("jp");

img.addEventListener("mouseover",function (){
    console.log("mouseover");
    img.style.display="block";
})
img.addEventListener("click",function (){
    console.log("mouseout");
    img.style.display="none";
})

function hideImage(){
    console.log();
    img.style.display="none";
}

function showImage(){
    console.log();
    img.style.display="block";
}