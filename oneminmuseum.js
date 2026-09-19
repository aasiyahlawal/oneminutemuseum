
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
    if (button4.innerHTML.trim() == "Exhibit 4"){
        button4.innerHTML = "Spit will instantly harden super glue.";
    }
    else{
        button4.innerHTML = "Exhibit 4";
    }
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
    if (button6.innerHTML.trim() == "Exhibit 6"){
        button6.innerHTML = "Chainsaws were first invented for childbirth!!";
    }
    else{
        button6.innerHTML = "Exhibit 6";
    }

}
const button6 = document.getElementById("exhibit6")
button6.addEventListener("click", funfact3)

function funfact4(){
    if (button7.innerHTML.trim() == "Exhibit 7"){
        button7.innerHTML = "Stare out the window for a minute...";
    }
    else{
        button7.innerHTML = "Exhibit 7";
    }
}
const button7 = document.getElementById("exhibit7")
button7.addEventListener("click", funfact4)

function funfact5(){
    if (button8.innerHTML.trim() == "Exhibit 8"){
        button8.innerHTML = "The capital of Scotland is Edinburgh";
    }
    else{
        button8.innerHTML = "Exhibit 8";
    }
}
const button8 = document.getElementById("exhibit8")
button8.addEventListener("click", funfact5)

function funfact6(){
    if (button9.innerHTML.trim() == "Exhibit 9"){
        button9.innerHTML = "Pressure makes diamonds";
    }
    else{
        button9.innerHTML = "Exhibit 9";
    }
}
const button9 = document.getElementById("exhibit9")
button9.addEventListener("click", funfact6)