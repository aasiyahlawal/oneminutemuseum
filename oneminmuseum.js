
function date() {
    document.getElementById("exhbit1").innerHTML = Date();
}

const button1 = document.getElementById("exhbit1");
button1.addEventListener("click", date);

function image(){ /*append child adds multiple images when exhbit 2 button clicked */
    const myImage = new Image(100, 200);
    myImage.src = "starrynight.webp";
    document.body.appendChild(myImage); 
    document.getElementById("exhbit2").innerHTML = Image();
}

const button2 = document.getElementById("exhbit2")
button2.addEventListener("click", image)

function funfact1(){   
    document.getElementById("exhbit3").innerHTML = "A cloud weight around a million tonnes";
}

const button3 = document.getElementById("exhbit3")
button3.addEventListener("click", funfact1)

function funfact2(){
    document.getElementById("exhbit4").innerHTML = "Spit will instantly harden super glue."
}

const button4 = document.getElementById("exhbit4")
button4.addEventListener("click", funfact2)

function image2(){
    const myImage2 = new Image(100, 200);
    myImage2.src = "highlands.jpg";
    document.body.appendChild(myImage2); 
    document.getElementById("exhbit5").innerHTML = Image(); 
}

const button5 = document.getElementById("exhbit5")
button5.addEventListener("click", image2)

function funfact3(){
    document.getElementById("exhbit6").innerHTML = "Chainsaws were first invented for childbirth!!"

}
const button6 = document.getElementById("exhbit6")
button6.addEventListener("click", funfact3)
