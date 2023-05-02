// alert("hello---");

let cl=console.log;
const allTabHeads=[...document.querySelectorAll(".myTabHeading li")]
const tabContentArray =[...document.querySelectorAll(".tabContent")]
const onTabHeadclick = (eve)=>{
    let getId = eve.target.getAttribute("data-id");
    cl(getId);
    tabContentArray.forEach(div=>div.classList.remove("active"))
    document.getElementById(getId).classList.add("active");
    allTabHeads.forEach(li => li.classList.remove("active"))
    eve.target.classList.add("active")
}


allTabHeads.forEach(li =>{
   // cl(li)
   li.addEventListener("click",onTabHeadclick)
})