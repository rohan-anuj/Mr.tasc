const input=document.querySelector("#selection");
const para=document.getElementById("pressEnter");
const divwhoru=document.getElementById("whoru");
const divname=document.getElementById("name")
const divmovingbar=document.getElementById("movingbar");
const percentage=document.getElementById("percentage")

input.addEventListener("input",()=>{
    if(input.value=="Student" || input.value=="WorkingClass"){
        para.style.transform="translateY(0.6em)";
        
        
     }
 else{
    para.style.transform="translateY(25em)";
   

  
}
});

document.getElementById("buttonsw").addEventListener("click",(e)=>{
    
    e.preventDefault();
    const whoruvalue=confirm(`Are you sure your ${input.value}`);

    if (whoruvalue==true){
    document.getElementById("whoru").style.transform="translateY(-20em)";
    document.getElementById("student").style.transform="translateY(4em)";
    percentage.innerText="12%";
    divmovingbar.style.width="4vw";
    divwhoru.style.height="10vh";
    divname.style.height="150vh";
    document.getElementById("buttonsw").style.display="none";
    
    }
    
    
});