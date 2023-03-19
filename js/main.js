document.getElementById('button').addEventListener('click', () => {
    //saves the userpick in a variable userPick before the div gets wiped out 
    let userPick = document.querySelector('input[name="usage"]:checked').value
    //this is just test so can delete 
    console.log(userPick)
    //clears out the form 
    document.getElementById('bor').remove()})
