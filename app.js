let form = document.querySelector(".form-container");
// let email = document.getElementById("email")
// let pwd = document.getElementById("pwd")

let db = [];

// form.addEventListener("submit", event => {
//     // prevents form default behavior of:
//     // page refresh & http being sent
//     event.preventDefault()

//     // Seed the makeshift db with object literal
//     // The object has properties of email and password
//     // The values are values inputted by the client into the form
//     db.push({
//         email: event.target[0].value,
//         password: event.target[1].value
//     })

//     // ? Another way of doing it without using event object
//     // db.push({
//     //     email: email.value,
//     //     password: pwd.value
//     // })
//     console.log(db)
// })

// ? URL Query Parameters
let url = document.location.search;
console.log("URL String", url);
let params = new URLSearchParams(url);
// Creates a Location object that sanitizes query parameters
let email = params.get("email");
// Utilize .get() method of the Location interface to access query values
let pwd = params.get("pwd");
console.log(email, pwd);
