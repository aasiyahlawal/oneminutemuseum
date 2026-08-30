
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
    document.getElementById("exhbit4").innerHTML = "Spit will instantly harden super glue!!"
}

const button4 = document.getElementById("exhbit4")
button4.addEventListener("click", funfact2)


