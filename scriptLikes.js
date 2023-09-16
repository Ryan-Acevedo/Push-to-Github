// count of likes per person
var countNiel = 9;
var countNichole = 12;
var countJim = 9;

// element moidfier per person
var countElementNiel = document.querySelector("#likes-niel");
var countElementNichole = document.querySelector("#likes-nichole");
var countElementJim = document.querySelector("#likes-jim");

function addNiel() {
    countNiel++;
    countElementNiel.innerText = countNiel + " like(s)";
}

function addNichole() {
    countNichole++;
    countElementNichole.innerText = countNichole + " like(s)";
}

function addJim() {
    countJim++;
    countElementJim.innerText = countJim + " like(s)";
}