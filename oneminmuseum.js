
function date() {
    if (button1.innerHTML.trim() == "Exhibit 1"){
        button1.innerHTML = Date()
    }
    else{
        button1.innerHTML = "Exhibit 1";
    }
}

const button1 = document.getElementById("exhibit1");
button1.addEventListener("click", date);

function image(){ /*append child adds multiple images when exhbit 2 button clicked */
    const myImage = new Image(100, 200);
    myImage.src = "starrynight.webp";
    document.body.appendChild(myImage); 
    document.getElementById("exhibit2").innerHTML = Image();
}

const button2 = document.getElementById("exhibit2")
button2.addEventListener("click", image)


function funfact1(){    
    if (button3.innerHTML.trim() == "Exhibit 3"){
        button3.innerHTML = "A cloud weight around a million tonnes";
    }
    else{
        button3.innerHTML = "Exhibit 3";
    }
}

const button3 = document.getElementById("exhibit3")
button3.addEventListener("click", funfact1)

function funfact2(){
    document.getElementById("exhibit4").innerHTML = "Spit will instantly harden super glue."
}

const button4 = document.getElementById("exhibit4")
button4.addEventListener("click", funfact2)

function image2(){
    const myImage2 = new Image(100, 200);
    myImage2.src = "highlands.jpg";
    document.body.appendChild(myImage2); 
    document.getElementById("exhibit5").innerHTML = Image(); 
}

const button5 = document.getElementById("exhibit5")
button5.addEventListener("click", image2)

function funfact3(){
    document.getElementById("exhibit6").innerHTML = "Chainsaws were first invented for childbirth!!"

}
const button6 = document.getElementById("exhibit6")
button6.addEventListener("click", funfact3)

function funfact4(){
    document.getElementById("exhibit7").innerHTML = "Stare out the window for a minute..."
}
const button7 = document.getElementById("exhibit7")
button7.addEventListener("click", funfact4)
