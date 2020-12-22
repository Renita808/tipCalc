var billAmt = document.getElementById('billAmt');
var tipAmt = document.getElementById('tipAmt');
var numPeople = document.getElementById('numPeo');
var button = document.getElementById('submit')

function values() {
    if (parseFloat(tipAmt.value) < 1) {
        alert('please enter whole number for tip')
    }
    var billValue = parseFloat(billAmt.value);
    var tipValue = parseFloat(tipAmt.value/100);
    var peopleValue = parseFloat(numPeople.value);
    var each = ((tipValue * billValue) + billValue) / peopleValue;
    document.getElementById('span').textContent =  each.toFixed(2);

    setTimeout(function() {
        billAmt.value = '';
        tipAmt.value = '';
        numPeople.value = '';
    }, 10000)
};


button.addEventListener('click', values)
