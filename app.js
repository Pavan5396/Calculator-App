const grid = document.querySelectorAll(".grid");
const val = document.querySelector(".val");

grid.forEach(function(btn){
    btn.addEventListener("click",function(){
        lastClickedVal = btn.innerHTML
        val.innerHTML += lastClickedVal;

        if(lastClickedVal === "DEL"){
            val.innerHTML = val.innerHTML.slice(0,val.innerHTML.length-4);

            if(val.innerHTML==="DE"){
                val.innerHTML=""; //just to prevent from empty screen (not to display any thing when the screen is empty)
            }

        } else if (lastClickedVal === "RESET") {  
            val.innerHTML =""

        } else if (lastClickedVal === "=") {
            equal =val.innerHTML.slice(0,val.innerHTML.length-1);
            evaluate = eval(equal)
           
            if(typeof (evaluate) != "number"){
                val.innerHTML =""
            } else {
                val.innerHTML=evaluate
            }
            
        } else if (lastClickedVal === "x") {
            val.innerHTML = val.innerHTML.slice(0, -1); // Remove the last character from the string
            val.innerHTML += "*";
        }
    })
});





