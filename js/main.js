
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

function saveInfo(){
    let date = document.querySelector('input[type="date"]').value
    let day = document.getElementById('day-select').value
    let progress= document.querySelector('#progress').value
    let anki= document.getElementById('anki').checked ? 'checked':'unchecked'
    let codewars= document.getElementById('codewars').checked ? 'checked':'unchecked'
    let pomodoro =  document.querySelector('#pomsession').value
    
    //saves the information collected in an array 
    let dayinfo= (`${date} ${day} ${progress} ${anki} ${codewars} ${pomodoro}`).split(' ')
    localStorage.setItem(date, dayinfo)
}