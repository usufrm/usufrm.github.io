function plus () {
   var num1 , num2 , result;
   num1 = document.getElementById('inp1').value;
   num1 = parseInt(num1);
   num2 = document.getElementById('inp2').value;
   num2 = parseInt(num2);
   result = num1+num2;
   document.getElementById('out').innerHTML = result;
   
}
function minus () {
    var num1 , num2 , result;
    num1 = document.getElementById('inp1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('inp2').value;
    num2 = parseInt(num2);
    result = num1-num2;
    document.getElementById('out').innerHTML = result;
    
 }
 function umn () {
    var num1 , num2 , result;
    num1 = document.getElementById('inp1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('inp2').value;
    num2 = parseInt(num2);
    result = num1*num2;
    document.getElementById('out').innerHTML = result;
    
 }