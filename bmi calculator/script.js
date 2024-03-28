let form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
e.preventDefault();
const height=document.querySelector('.height').value;
const weight=document.querySelector('.weight').value;

let result=document.querySelector('.result');
if(height!=""&&weight!=""&&height>0&&weight>0){
    result.innerHTML=height*weight;
}
else{
    result.innerHTML="enter a correct value"
}

})