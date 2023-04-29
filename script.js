// targetting particular html element
var div=document.getElementById('div1');

//initialization of array
var arrayOfNumbers=[1,2,3,56,100];
var arrayofName=["Ram","Jaya","Suraj"];

// looping with for loop
for (let index = 0; index < arrayOfNumbers.length; index++) {
    console.log(arrayOfNumbers[index]);

    var item=document.createElement("li");
    item.textContent=arrayOfNumbers[index];
    div.appendChild(item);
    
    
}

// looping with foreach
arrayofName.forEach(element => {
    var item=document.createElement("li");
    item.textContent=element;
    div.appendChild(item);
   
});




// console.log(div.getAttribute('data-stduent-name'));
// console.log(div.getAttribute('class'));
// console.log(div.innerHTML);
