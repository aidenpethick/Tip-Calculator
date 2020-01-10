const submit = document.getElementById("submit");
const answer = document.getElementById("answer");

function calculateTip () {
const bill = document.getElementById("bill").value;
const tip = document.getElementById("tip").value;
const people = document.getElementById("people").value;
if (people == 1) {
    return (bill/100 * tip);
}

if (people > 1) {
    return (bill/100 * tip / people);
}
}

submit.addEventListener("click", function () {
    answer.textContent = "$" + calculateTip();
})
