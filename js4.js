var noo=prompt("enter of of overs");
var avg=prompt("enter avg");
var rnoo=prompt("enter remaining no of overs");
var trun=prompt("enter target run");
noo=parseInt(noo);
avg=parseFloat(avg);
rnoo=parseInt(rnoo);
trun=parseInt(trun);
var nrr=(trun-(avg*noo))/rnoo;
alert(nrr);