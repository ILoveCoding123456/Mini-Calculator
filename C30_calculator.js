function add(){
    var Result = Number(document.getElementById('Fn').value)+Number(document.getElementById('Sn').value);
    document.getElementById("b1").value=Result;
}
function subtract(){
    var Result = Number(document.getElementById('Fn').value)-Number(document.getElementById('Sn').value);
    document.getElementById("b2").value=Result;
}
function multiply(){
    var Result = Number(document.getElementById('Fn').value)*Number(document.getElementById('Sn').value);
    document.getElementById("b3").value=Result;
}
function divide(){
    var Result = Number(document.getElementById('Fn').value)/Number(document.getElementById('Sn').value);
    document.getElementById("b4").value=Result;
}
