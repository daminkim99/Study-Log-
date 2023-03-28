//make University course form invisible
const x = document.getElementById('uni')
if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    } 

//make University course form invisible
const y = document.getElementById('hDevsForm')
if (y.style.display === "none") {
    y.style.display = "block";
    } else {
    y.style.display = "none";
    } 

    //make a variable dates to store the keys of the dates in an array for use later 
    let dates=[]

    for(let i=0; i<localStorage.length;i++){
        dates.push(localStorage.key(i))
    }

document.getElementById('button').addEventListener('click', () => {
    //saves the userpick in a variable userPick before the div gets wiped out 
    let userPick = document.querySelector('input[name="usage"]:checked').value
    //this is just test so can delete 
    console.log(userPick)
    //clears out the form 
    document.getElementById('bor').remove()

    // if user chooses "University", make the student course form reappear
    if (userPick === "University") {
        if (x.style.display === "none") {
            x.style.display = "block";
            } else {
            x.style.display = "none";
            } 
    } else if (userPick ==="hDevs"){

    // if user chooses "100Devs", make the 100devs form appear
        if (y.style.display === "none") {
            y.style.display = "block";
            } else {
            y.style.display = "none";
            } 

    }

    //show data from local storage
    showTable(dates)

})

//getting values from Course form
document.getElementById('button2').addEventListener('click', () => {

    //list of courses 
    const listOfCourses = []

    //putting courses in the list
    for (let i = 1; i <= 4; i++) {
        listOfCourses.push(document.querySelector(`input[name="subject${i}"]`).value)
    }
    //for testing
    console.log(listOfCourses)
    
    //remove all elements
    document.getElementById('uni').remove()
    
})

//adds smurf to the 100Devs button upon submitting daily log
document.querySelector('#hDevsButton').addEventListener('click', saveInfo)



//saves values of the user input's daily log 
function saveInfo(){

    //if all the required fields are filled out
    let date = document.querySelector('input[type="date"]').value

    if (dates.includes(date)){
        alert("Date already logged!")
    } else{
    // let date = document.querySelector('input[type="date"]').value
    let day = document.getElementById('day-select').value
    let progress= document.querySelector('#progress').value
    let anki= document.getElementById('anki').checked ? 'yes':'no'
    let codewars= document.getElementById('codewars').checked ? 'yes':'no'
    let pomodoro =  document.querySelector('#pomsession').value
    

    if (date && day && progress && pomodoro)  {

    
    //saves the information collected in an array 
    let dayinfo= (`${date} ${day} ${progress} ${anki} ${codewars} ${pomodoro}`).split(' ')
    localStorage.setItem(date, dayinfo)

    //adds the newly created daily log to the dates array
    dates.push(date)



    //remove existing table
    const table = document.getElementById('logTable');
    let count = 0;
    table.querySelectorAll('tr').forEach(row => {
        if (count === 0) {
            count++
        } else {
            row.remove()
        }
    })

    //call function showTable to present data again
    showTable(dates)

    }
}
}
/*you talked about making a function so I moved some of your code into a new function

it will present data on the initial "#button" click, 
and it will also present updated data when submit button is pressed.

I commented the old code out in the two functions above just in case you don't want this function

idk if this is the most efficient way to do this lol feel free to edit it if you dont like it!! */

function showTable(dates) {
    dates = dates.sort()

    // retrieve the info that was already in the localStorage
    for(let i=0; i<dates.length;i++){
    //creates a tr for each key in the local storage 
    const tr=document.createElement('tr')
    document.querySelector("#logTable tbody").appendChild(tr)
    //creates a td for each of the rows 
    for (let j=0;j<=5; j++){
        const td=document.createElement('td')
        let value = localStorage.getItem(dates[i])
        td.textContent = value.split(',')[j]
        //appends each td to the tr 
        tr.appendChild(td)
        }
    }
}