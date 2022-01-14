// Import stylesheets
import './style.css';

// Write Javascript code!
var Modalopen=document.querySelector(".modal");
var openMe=document.querySelector(".opennow");
var removeMe=document.querySelector(".remove")

openMe.addEventListener("click",()=>{
   Modalopen.style.display="block";
   Modalopen.style.opacity="1"
  })
   removeMe.addEventListener("click",()=>{
    Modalopen.style.display="none";
    Modalopen.style.opacity="0"

})
window.onclick = function(e) {
  if (e.target == Modalopen) {
    Modalopen.style.display = "none";
   
  }
}
  