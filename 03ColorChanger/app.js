/*  
Was thinking through the logic and it seemed that Math.
floor(Math.random() * 255) would generate uneven probabilities
 of each value being generated.
 */


document.getElementById("button").addEventListener("click",function () {
   const randomecolor =  function (){
    return Math.floor(Math.random() * 255);
   };

   document.getElementById("canvas").style.backgroundColor = `rgb(${randomecolor()},${randomecolor()},${randomecolor()})`

});

