const paraofname=document.getElementById("pressEnter1");
const inputofname=document.getElementById("Yourname")
const divemail=document.getElementById("email");
inputofname.addEventListener("input",()=>{
    
    paraofname.style.transform="translateY(1em)";
     
 if(inputofname.value==""){
    paraofname.style.transform="translateY(25em)";
  
}
});




document.getElementById("buttonsw1").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("name").style.transform="translateY(-10em)";
    document.getElementById("email").style.transform="translateY(-1em)";
    percentage.innerText="24%";
    divname.style.height="8vw";
    divemail.style.height="150vh";
    divmovingbar.style.width="8vw";
    
});



// Email jS
const paraofemail=document.getElementById("pressEnter2");
const inputofemail=document.getElementById("email");
const divcontact=document.getElementById("contact");
inputofemail.addEventListener("input",(e)=>{
    console.log(document.student.email.value);
      if(e.target.value==""){
        // paraofemail.style.display="none"
        paraofemail.style.transform="translateY(25em)";
        console.log(this.value);
     } 
     else{ 
 
        paraofemail.style.transform="translateY(1em)";
        // paraofemail.style.display="flex";
        
    }

 
});
document.getElementById("buttonsw2").addEventListener("click",(e)=>{
    e.preventDefault();

    if(document.student.email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
 
    document.getElementById("email").style.transform="translateY(-10em)";
    document.getElementById("contact").style.transform="translateY(-1.5em)";
    percentage.innerText="36%";
    divmovingbar.style.width="15vw";
    divcontact.style.height="150vh";
    divemail.style.height="10vh";}
    else{


        alert("Your email Id is Improper!")
        document.student.email.value=" ";
        }

    
});



// contact js 
const paraofcontact=document.getElementById("pressEnter3");
const inputofcontact=document.getElementById("number");
const divitornonit=document.getElementById("itornonit");

inputofcontact.addEventListener("input",()=>{
        



    
   
    if(inputofcontact.value==""){
        paraofcontact.style.transform="translateY(25em)";

    }
    else{
        paraofcontact.style.transform="translateY(1em)";
    }

});
document.getElementById("buttonsw3").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(document.student.number.value.length);
    if(document.student.number.value.match(/^[A-Za-z]+$/)  ){
        alert("only numbers are allowed !");
        document.student.number.value="";
    
    }
    else if(document.student.number.value.length!=10){
        alert("only 10 digits are allowed!");
        document.student.number.value="";



    }
    else{
        
        document.getElementById("contact").style.transform="translateY(-10em)";
    document.getElementById("itornonit").style.transform="translateY(-2em)";
    percentage.innerText="48%";
    divcontact.style.height="10vh";
    divitornonit.style.height="150vh";
    divmovingbar.style.width="17vw";

    }
    
});

// itornonit js 
const inputofitornonit=document.querySelector("#selection1");
const paraofitornonit=document.getElementById("pressEnter4");
const divinterest=document.getElementById("interest");


inputofitornonit.addEventListener("input",()=>{
    if(inputofitornonit.value=="IT" || inputofitornonit.value=="non-IT"){
        paraofitornonit.style.transform="translateY(0.6em)";
        
        
     }
 else{
    paraofitornonit.style.transform="translateY(25em)";
   

  
}
});

document.getElementById("buttonsw4").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("itornonit").style.transform="translateY(-20em)";
    document.getElementById("interest").style.transform="translateY(-2.5em)";
    percentage.innerText="60%";
    divmovingbar.style.width="21vw";
    divitornonit.style.height="10vh";
    divinterest.style.height="150vh";
    
});
// interest 
const inputofinterest=document.getElementById("selection2");
const paraofinterest=document.getElementById("pressEnter5");
const divaboutus=document.getElementById("aboutus");
inputofinterest.addEventListener("click",(e)=>{
    console.log(e.target.value);
    if(e.target.value=="no"){
        paraofinterest.style.transform="translateY(25em)";
    }
    else{
        paraofinterest.style.transform="translateY(1em)";
    }
});
document.getElementById("buttonsw5").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("interest").style.transform="translateY(-20em)";
    document.getElementById("aboutus").style.transform="translateY(-3.5em)";
    percentage.innerText="72%";
    divmovingbar.style.width="25vw";
    divaboutus.style.height="120vh";
    divinterest.style.height="10vh";
    
});
// about us  
const inputofaboutus=document.getElementById("selection3");
const paraofaboutus=document.getElementById("pressEnter6");
inputofaboutus.addEventListener("click",(e)=>{
    if(e.target.value=="no"){
        paraofaboutus.style.transform="translateY(25em)";
    }
    else{
        paraofaboutus.style.transform="translateY(1em)";
    }

}) ; 
