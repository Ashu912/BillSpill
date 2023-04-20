let globalTipPercent = 0
let person = 1



const calculateBill = (tipPercent = 0) => {
	let billAmount = Number(document.getElementById('InputBill').value)
	if (tipPercent != 0)
		globalTipPercent = tipPercent
	let tipAmount = (globalTipPercent / 100) * billAmount
	billAmount += tipAmount



	let tipAmountPerPerson = tipAmount / person
	let totalPerPerson = billAmount / person
	document.getElementById('TipAm').innerText = `₹ ${tipAmountPerPerson.toFixed(1)}`
	document.getElementById('TotalAm').innerText = `₹ ${totalPerPerson.toFixed(1)}`
}
function personCount(a) {
	console.log(a)
	if (a == 'inc') {
		person += 1
	}
	else {
		person -= 1
	}
	NumberOfPeople()
	calculateBill()

}
function valueOfPeople() {
	let p = Number(document.getElementById("PeopleValue").innerHTML = person)
	person = p

	calculateBill()
}
function NumberOfPeople() {

	document.getElementById("PeopleValue").value = person
	valueOfPeople()
}


let reset = () => {
	person=1
	document.getElementById('InputBill').value = 0
	document.getElementById('PeopleValue').value =1
	document.getElementById('TipAm').innerText = `₹ 0.00`
	document.getElementById('TotalAm').innerText = `₹ 0.00`
	globalTipPercent = 0
}