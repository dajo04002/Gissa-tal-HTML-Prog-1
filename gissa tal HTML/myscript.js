var slumpran = Math.floor(Math.random() * 100) + 1;
var val = document.getElementById("gissning");
var elementtxt1 = document.getElementById("txt1");
var count = 0;

function slump(){
    count ++;

        if(val.value < slumpran){
            elementtxt1.innerHTML="Too low";
            
        }
        else if(val.value > slumpran){
            elementtxt1.innerHTML="Too high";
        }
        else{
            elementtxt1.innerHTML="Correct!";
        }
        document.getElementById("txtcount").innerHTML="Count: " + count;
}
