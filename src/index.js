module.exports = function getZerosCount(number, base) {
    let i = 0, div = 2, mas=[],repeat =[],power =[],result = [];

    while (base > 1)
   {
       if(base % div == 0)
       {
           mas[i]= div;
           repeat[i] = 0;
           while (base % div == 0)
           {
               base = base / div;
               repeat[i]+=1;
           }
           i++;
       }
       if (div == 2) div++;
       else div += 2;
   }
 
    for(let j = 0; j < mas.length; j++) {
         power[j] = maxPowerOf(mas[j], number);
         result[j] = Math.floor(power[j]/repeat[j]);  
    }
 
    function compareNumeric(a, b) {
         if (a > b) return 1;
         if (a < b) return -1;
     }
     result.sort(compareNumeric);

     return result[0];
    
 
    function  maxPowerOf(p, number)
     {
         let k = 0;
         let powerOfP = 1;
         while (true)
         {
             powerOfP *= p;
             let add = Math.floor(number / powerOfP);
             if (add == 0) {
                 return k;
             }
             k+= add;
         }
     }
}