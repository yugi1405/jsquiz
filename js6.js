var ngp=prompt("enter no of grandparent");
var np=prompt("enter no of parent");
var ngc=prompt("enter no of grandchildrent");
var aagp=prompt("enter avg age of grandparent");
var aap=prompt("enter avg age of parent");
var aagc=prompt("enter avg age of grandchildren");
ngp=parseFloat(ngp);
np=parseFloat(np);
ngc=parseFloat(ngc);
aagp=parseFloat(aagp);
aap=parseFloat(aap);
aagc=parseFloat(aagc);
var af=(aagp*ngp+np*aap+ngc*aagc)/(ngp+np+ngc);
alert(af);