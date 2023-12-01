let listNumbers = document.getElementById("lista-numeri");
let numbers=[];
for(i=0;i<5;i++){
    numbers.push(Math.floor(Math.random() * 100 + 1));
 }
 listNumbers.innerHTML+=`<br>${numbers}`

setTimeout(function(){
    listNumbers.classList.add("d-none")
},30000);

setTimeout(function(){
let numbersUser=[];
for(i=0;i<5;i++){
    let n=parseInt(prompt("INSERISCI NUMERO"));
    numbersUser.push(n);
}
console.log(numbersUser);
let findNumbers =[];
for(i=0;i<numbers.length;i++){
    if(numbers.includes(numbersUser[i])){
        findNumbers.push(numbersUser[i])
    }
}
console.log("hai ricordato " + findNumbers.length + " numeri");
console.log("numeri ricordati: " + findNumbers);

let find = document.getElementById("numeri-ricordati");
find.innerHTML=`<div> Hai ricordato: ${findNumbers.length} numeri</div><div> NUMERI TROVATI: ${findNumbers}</div>`;
},31000);

