let a="";
function cal3(x){
    if(x=='C'){
        a=""
        document.getElementById('inputbar').innerHTML=a
      }else if(x=="="){
        
          document.getElementById('inputbar').innerHTML=eval(a)
    
      }
      else{
        a=a+x
        let c=document.getElementById('inputbar').innerHTML=a
        console.log(a)
      }
   
  
    
}