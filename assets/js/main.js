let inputUserBody = document.getElementById('inputUserBody')
let inputUserOld = document.getElementById('inputUserOld')
let inputUserWeight = document.getElementById('inputUserWeight')
let women = document.getElementById('women')
let men = document.getElementById('men')
let myOptions = document.getElementById('myOptions')
let grudResult1 = document.getElementById('grudResult1')
let grudResult2 = document.getElementById('grudResult2')
let gesamtResult1 = document.getElementById('gesamtResult1')
let gesamtResult2 = document.getElementById('gesamtResult2')

calculate = () => {
    let grund;
    if (men.checked) {
        grund = 664.7 + (13.7 * inputUserWeight.value) + (5 * inputUserBody.value) - (6.8 * inputUserOld.value)
        console.log(grund)
    } else if (women.checked) {
        grund = 655.1 + (9.6 * inputUserWeight.value) + (1.8 * inputUserBody.value) - (4.7 * inputUserOld.value)
    }
    let gesamt = grund * myOptions.value
    let grundKj = grund * 4.187
    let gesamtKj = gesamt * 4.187
    grudResult1.innerHTML = grund.toFixed(2)
    grudResult2.innerHTML = grundKj.toFixed(2)
    gesamtResult1.innerHTML = gesamt.toFixed(2)
    gesamtResult2.innerHTML = gesamtKj.toFixed(2)
}


