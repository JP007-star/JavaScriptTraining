
// function createRecord(data) {
//   // Generate a unique identifier for the new record
//   const id = Date.now().toString();

//   // Add the record data to a new cookie
//   document.cookie = `${id}=${JSON.stringify(data)}`;
// }

// function readRecord(id) {
//   // Split the cookies string into an array of cookies
//   const cookies = document.cookie.split("; ");

//   // Iterate over all the cookies
//   for (const cookie of cookies) {
//     // Split the cookie into a key-value pair
//     const [key, value] = cookie.split("=");

//     // If the key matches the given identifier, return the value
//     if (key === id) {
//       return JSON.parse(value);
//     }
//   }

//   // If no matching cookie was found, return null
//   return null;
// }

// function updateRecord(id, data) {
//   // Find the cookie that matches the given identifier
//   const cookie = readCookie(id);

//   // If the cookie was found, update its value with the new data
//   if (cookie) {
//     document.cookie = `${id}=${JSON.stringify(data)}`;
//   }
// }

// function deleteRecord(id) {
//   // Find the cookie that matches the given identifier
//   const cookie = readCookie(id);

//   // If the cookie was found, remove it by setting its expiry date to the past
//   if (cookie) {
//     document.cookie = `${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
//   }
// }
localStorage.setItem('name','jp')
sessionStorage.setItem('name',"jp")

log(localStorage.getItem(name))

document.cookie = 'username=John Doe';



document.cookie = "myKey=myValue; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

document.getElementById("demo").innerHTML=document.cookie;
