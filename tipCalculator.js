//functions used
// calculateBill()
// increasePeople()
// decreasePeople()
//id used
// "perPersonTotal"
// "numberOfPeople"
// "tipInput"
// "billTotalInput"


const perPersonTotalID = document.getElementById('perPersonTotal')
const numberOfPeopleID = document.getElementById('numberOfPeople')
const tipInputID = document.getElementById('tipInput')
const billTotalInputID = document.getElementById('billTotalInput')
let numberOfPeople = Number(numberOfPeopleID.innerText)

let error = document.getElementById('warn')
const calculateBill = () => {
const bill = Number(billTotalInputID.value)
console.log(bill)
const tipPErcent = Number(tipInputID.value)/100

const tipAmount = bill * tipPErcent

const total = tipAmount + bill 

 const totalPerPerson = total / numberOfPeople

perPersonTotalID.innerText = `$${totalPerPerson.toFixed(2)}`
}
const increasePeople = () => {
numberOfPeople += 1
numberOfPeopleID.innerText = numberOfPeople
calculateBill()
}
const decreasePeople = () => {

  if (numberOfPeople <=1) {
    error.style.visibility ="visible"
    setTimeout(() => {
      error.style.visibility ="hidden"
      }, 5000);
    return
  }
  numberOfPeople -= 1
numberOfPeopleID.innerText = numberOfPeople
calculateBill()
}