// function save() {
//     console.log("Save btn clicked")
// }

// let myLeads = `["www.google.com"]`

// myLeads = JSON.parse(myLeads)    //see carefully
// myLeads.push("ww.epiclead.com")
// console.log(myLeads)

let myLeads = []

//myLeads = JSON.stringify(myLeads)  // convert to string

// console.log(typeof myLeads)  // to get type

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const savetabBtn = document.getElementById("savetab-btn")

// localStorage.setItem("myLeads", "www.examplelead.com")
// console.log( localStorage.getItem("myLeads") )

// localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

// To check is localstorage as value or not (Null)
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Objects in Array. // Hard-code Variable
// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

savetabBtn.addEventListener("click", function() {
    // Grab the URL of the current tab
    // chrome API should be given permission in JSON folder
    //     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // })

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)  // Onjects in Array Calling.
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

    // console.log(tabs[0].url)
})


function render(leads) {
    let listItems = ""
    for(let i = 0; i < leads.length; i++) {
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

    // TEMPLATE STRING/LITERALS
    listItems += `
    <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
    </li>
    `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    // console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads) // To delete from desktop monitor.
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""   // Clear the input field.
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log( localStorage.getItem("myLeads") )
})





// ---------------------------------------------------

// addEventListener

let boxClk = document.getElementById("box")

boxClk.addEventListener("click", function() {
    let boxMsg = document.getElementById("box")
    boxMsg.textContent = "Clicked by Event listener"
    boxMsg.innerHTML += "<li>" + "Tags used by click" + "</li>"
})

// --------------------------------------------------

// Localstorage see carfully

// localStorage.setItem("name", "Venky")
// let local = localStorage.getItem("name")
// console.log(local)
// localStorage.clear()

// let myArray = ["www.google.com"]

// myArray = JSON.stringify(myArray)  // convert to string

// myArray = JSON.parse(myArray)  // convert to array

// myArray.push("www.youtube.com")

// console.log(myArray) // Array will be printed

// myArray = JSON.stringify(myArray) // convert to string

// console.log(typeof myArray)

// -------------------------------------------------------

// truthy falsy

const credits = 0

if (credits) {
    console.log("Lets play you have credits")
} else {
    console.log("Sorry, you have no credits")
}

// falsy:-
// false
// 0
// ""   // Empty string
// null -> how you as a developer signalize emptiness
// undedined -> how Javascript signalize emptiness
// NaN


// Example of Null
let currentViewers = null

currentViewers = ["jane", "kane"]

if (currentViewers) {
    console.log("We have viewers")
} else {
    console.log("No viewers")
}

// Example of Undefined
let viewers

console.log(viewers)

let viewers1 = {}  // Object

console.log(viewers1.randomKey)

let viewers2 = ["jane"]

console.log(viewers2[5])

// To check truthy or falsy

let trueOrFalse = Boolean("hello")
console.log(trueOrFalse)

// ----------------------------------------------------
// same function name with different argumnets can't be used.
// function with argumnet

const welcomeEl = document.getElementById("welcome-el")
function greetUser(name) {
    welcomeEl.textContent = "Welcome back, " + name + "!"
}

greetUser(45)

// function with multiple argumnet

const welcomeEl1 = document.getElementById("welcome-el1")
function greetuser(greeting, name) {
    welcomeEl1.textContent = `
    ${greeting}, ${name} ! (By string literals)
    `
}

greetuser("hii", 45)

// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr) {
    return arr[0]
}

let firstCard = getFirst([10, 2, 5])

console.log(firstCard)

// `` can be used anywhere when needed by using backstick synmbol.

// ----------------------------------------------------------------------

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

logItems(myCourses)

//----------------------------------------------------------------------

// Objects in Array
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const janeBtn = document.getElementById("jane-btn")
// Use addEventListener() to listen for button clicks
janeBtn.addEventListener("click", function() {
    console.log(data[0].score)
})
// Log Jane's score when the button is clicked (via data)

//-----------------------------------------------------------------------


// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)