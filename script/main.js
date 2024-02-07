document.getElementById('btn').onclick = function () {
    let operator = document.getElementById('operator').value;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let res = parseInt(num1) + parseInt(num2);

    document.getElementById('res').innerHTML = num1 + operator + num2 + "=" + res ;
}