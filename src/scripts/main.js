import API from "./data.js"
const message = "Your Webpack application is set up and ready to go. Please start writing code."

document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

console.log(message)

API.getData()
.then(data => console.log(data))