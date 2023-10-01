
var a1=[];
var a2=[];
var a3=[];
var a4=[];
var a5=[];
var n=1;
var x=0;
function AddRow()
{
var addrow=document.getElementById('tableshow');
var newrow=addrow.insertRow(n);

a1[x]=document.getElementById('Rollno').value;
a2[x]=document.getElementById('fname').value;
a3[x]=document.getElementById('branch').value;
a4[x]=document.getElementById('email').value;
a5[x]=document.getElementById('age').value;

var cel1=newrow.insertCell(0);
var cel2=newrow.insertCell(1);
var cel3=newrow.insertCell(2);
var cel4=newrow.insertCell(3);
var cel5=newrow.insertCell(4);

cel1.innerHTML=a1[x];
cel2.innerHTML=a2[x];
cel3.innerHTML=a3[x];
cel4.innerHTML=a4[x];
cel5.innerHTML=a5[x];

x++;
n++;
}