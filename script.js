/* ---------------------------------About----------------*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*-------------------------responsiveness-------------------------*/

var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }

        function closemenu(){
            sidemenu.style.right = "-200px";
        }

// ---------------------------connect form------------
const buy = document.querySelector("#conn");
const form = document.querySelector(".conn");
const close = document.querySelector("#cancele");

 buy.addEventListener("click",()=>{
    form.style.display="block"
 })

 close.addEventListener("click",()=>{
    form.style.display="none"
 })