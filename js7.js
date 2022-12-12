var monthly1=prompt("enter avg monthly income of p and q");
var monthly2=prompt("enter avg monthly income of q and r");
var monthly3=promt("enter avg monthly income of p and r");
monthly1=parseFloat(monthly1);
monthly2=parseFloat(monthly2);
monthly3=parseFloat(monthly3);
var p=((monthly1*2+monthly2*2+monthly3*2)/2-(monthly3*2));
alert(p);