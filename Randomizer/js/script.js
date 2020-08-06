
function f1 () {
   
   var prNum, test , howinp;
    howinp = document.getElementById("howinp").value;
    prNum = Math.floor((Math.random() * howinp)+1);
    test = document.getElementById('test');
    test.innerHTML =  prNum;
}