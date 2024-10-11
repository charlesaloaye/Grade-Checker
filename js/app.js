const audioMoney = () => {
   
   let result = document.querySelector('#result');
   let error = document.querySelector('#error');
   let min_val = parseInt(document.querySelector('#min_val').value);
   let max_val = parseInt(document.querySelector('#max_val').value);
   let operations = document.querySelector('#operations').value;
   
   if(!min_val && !max_val && !operations){
      // Error Block
      error.innerHTML = 'Please Enter all the fields!';
      error.style.display = 'block';
      result.style.display = 'none';
      
   } else {

      if(operations == 1)
      {
         
         pageLoop = '';
         
         for(let i = min_val; i <= max_val; i+=1)
         {
            pageLoop += ('Number ' + i + "<br>");
          }
         
         result.innerHTML = pageLoop;
      }
      
      if(operations == 2)
      {
         result.innerHTML = parseInt(min_val) + parseInt(max_val);
      }
      
      if(operations == 3)
      {
         sum = 0;
         
         for(let i = min_val; i <= max_val; i+=1)
         {
            sum+=i;
         }
         result.innerHTML = sum;
      }
      
   }
   
   
   
}
