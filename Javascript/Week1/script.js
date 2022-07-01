console.log("FILE IS WORKING.");
//khai bao a tren bo nho ram

function Funct1() {
    console.log("This function has been called");
}

function Funct2() {
    const cardName = document.getElementById('name').value;
    const cardSurName = document.getElementById('surname').value;
    alert("Your name is " + cardName + " " + cardSurName);
}

function Random() {
    let a = Math.floor(Math.random() * 101);
    alert("Your random number is " + a);
}

function Calc() {
    var A = document.getElementById('a').value;
    var B = document.getElementById('b').value;
    alert("A+B= " + (parseFloat(A) + parseFloat(B)) + "\nA-B= " + (parseFloat(A) - parseFloat(B)) + "\nA/B= " + (parseFloat(A) / parseFloat(B)) + "\nA*B= " + (parseFloat(A) * parseFloat(B)));
}

function Convert(){
    var C = document.getElementById('c').value;
    var F = document.getElementById('f').value;
    let CtF= C*9/5+32;
    let FtC= F-32*5/9;

    alert(C+"\u00B0C is " + parseFloat(CtF) +"\u00B0F\n" + F + "\u00B0F is " + parseFloat(FtC) + "\u00B0C");
}