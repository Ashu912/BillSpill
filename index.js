let amount = 0;
let person = 0;
let TotalAmount = 0;
let TotalTipAmount = 0;
function Input() {
    let inputAmount = Number(document.getElementById('InputBill').value)
    amount = Number(document.getElementById('InputBill').value = inputAmount)
    TotalAmount = Number(document.getElementById('InputBill').value = inputAmount)
    
}
function addTip5Per() {
    amount = (amount * 5 / 100) / person
    document.getElementById('TipAm').innerText = amount.toFixed(2);
    TotalAmount = ((TotalAmount / person) + amount)
    document.getElementById('TotalAm').innerText = TotalAmount.toFixed(2);
}
function addTip10Per() {
    amount = (amount * 10 / 100) / person
    document.getElementById('TipAm').innerText = amount.toFixed(2);
    TotalAmount = ((TotalAmount / person) + amount)
    document.getElementById('TotalAm').innerText = TotalAmount.toFixed(2);
}
function addTip15Per() {
    amount = (amount * 15 / 100) / person
    document.getElementById('TipAm').innerText = amount.toFixed(2);
    TotalAmount = ((TotalAmount / person) + amount)
    document.getElementById('TotalAm').innerText = TotalAmount.toFixed(2);
}
function addTip25Per() {
    amount = (amount * 25 / 100) / person
    document.getElementById('TipAm').innerText = amount.toFixed(2);
    TotalAmount = ((TotalAmount / person) + amount)
    document.getElementById('TotalAm').innerText = TotalAmount.toFixed(2);
}
function addTip50Per() {
    amount = (amount * 50 / 100) / person
    document.getElementById('TipAm').innerText = amount.toFixed(2);
    TotalAmount = ((TotalAmount / person) + amount)
    document.getElementById('TotalAm').innerText = TotalAmount.toFixed(2);
}
function addTip75Per() {
    amount = (amount * 75 / 100) / person
    document.getElementById('TipAm').innerText = amount.toFixed(2);
    TotalAmount = ((TotalAmount / person) + amount)
    document.getElementById('TotalAm').innerText = TotalAmount.toFixed(2);
}
function PersonAdd() {
    person = person + 1;
    document.getElementById("PeopleValue").innerHTML = person;
}
function PersonSub() {
    person = person - 1;
    document.getElementById("PeopleValue").innerHTML = person;
}
function Reset() {
    amount = 0;
    TotalAmount = 0;
    person = 0;
    document.getElementById("InputBill").value = 0;
    document.getElementById("TotalAm").innerText = '₹ 0.00';
    document.getElementById("TipAm").innerText = '₹ 0.00';
    document.getElementById("PeopleValue").innerText = '1';
}

