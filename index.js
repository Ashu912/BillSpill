let amount = 0;
let person = 0;
let TotalAmount=0;
let TotalTipAmount=0;
  function Input(){
    let inputAmount=Number(document.getElementById('InputBill').value)
    amount=Number(document.getElementById('InputBill').value = inputAmount)
    TotalAmount=Number(document.getElementById('InputBill').value = inputAmount)

}
function PersonAdd(){
    person=person+1;
    document.getElementById("PeopleValue").innerHTML=person;
}
function PersonSub(){
    person=person-1;
    document.getElementById("PeopleValue").innerHTML=person;
}
function addTip5Per(){
    amount = (amount*5/100)/person
    document.getElementById('TipAm').innerText=amount;
    TotalAmount=((TotalAmount/person)+amount)
    document.getElementById('TotalAm').innerText=TotalAmount;
}
function addTip10Per(){
    amount = (amount*10/100)/person
    document.getElementById('TipAm').innerText=amount;
    TotalAmount=((TotalAmount/person)+amount)
    document.getElementById('TotalAm').innerText=TotalAmount;
}
function addTip15Per(){
    amount = (amount*15/100)/person
    document.getElementById('TipAm').innerText=amount;
    TotalAmount=((TotalAmount/person)+amount)
    document.getElementById('TotalAm').innerText=TotalAmount;
}
function addTip25Per(){
    amount = (amount*25/100)/person
    document.getElementById('TipAm').innerText=amount;
    TotalAmount=((TotalAmount/person)+amount)
    document.getElementById('TotalAm').innerText=TotalAmount;
}
function addTip50Per(){
    amount = (amount*50/100)/person
    document.getElementById('TipAm').innerText=amount;
    TotalAmount=((TotalAmount/person)+amount)
    document.getElementById('TotalAm').innerText=TotalAmount;
}
function addTip75Per(){
    amount = (amount*75/100)/person
    document.getElementById('TipAm').innerText=amount;
    TotalAmount=((TotalAmount/person)+amount)
    document.getElementById('TotalAm').innerText=TotalAmount;
}
function Reset(){
 amount = 0;
 TotalAmount = 0;
person = 0;
    document.getElementById("InputBill").value=0;
    document.getElementById("TotalAm").innerText=0;
    document.getElementById("TipAm").innerText=0;
    document.getElementById("PeopleValue").innerText=0;
}

