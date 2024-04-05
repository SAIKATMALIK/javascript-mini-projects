
let display = document.getElementById('numberInput'); // Get the input element
let buttons = document.querySelectorAll('.btn');
let buttonsArray=Array.from(buttons);
let string=new String('');
buttonsArray.forEach((btn)=>{
btn.addEventListener("click",(e)=>{
  
  if(e.target.value=='DEL'){
  console.log("hello")
    string = string.substring(0, string.length - 1);
    display.value=string;

  }else if(e.target.value=="AC"){
string="";
display.value=string;
  }
  else if(e.target.value== '='){
    if(display.value==""){
      string='';
      display.value="";
    }
    else{
      string=eval(string);
      display.value=string;
    }
    
  }
  
  else{
    string+=e.target.value;
    display.value=string;

  }

})
})



