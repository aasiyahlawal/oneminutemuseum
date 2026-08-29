
function date() {
    document.getElementById("exhbit1").innerHTML = Date();
}

const button1 = document.getElementById("exhbit1");
button1.addEventListener("click", date);

function funfact1(){
    console.log("A cloud weight around a million tonnes");
}

function funfact2(){
    console.log("Spit will instantly harden super glue!!")
}

function image(){ /*append child adds multiple images when exhbit 2 button clicked */
    const myImage = new Image(100, 200);
    myImage.src = "starrynight.webp";
    document.body.appendChild(myImage); 
    document.getElementById("exhbit2").innerHTML = Image();
}

const button2 = document.getElementById("exhbit2")
button2.addEventListener("click", image)