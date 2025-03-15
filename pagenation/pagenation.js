var s1=document.querySelector('.s1');
var s2=document.querySelector('.s2');
var s3=document.querySelector('.s3');
var s4=document.querySelector('.s4');
var prev=document.querySelector('#prev');
var next=document.querySelector('#next');

var arr=[s1,s2,s3,s4];
var data=0;
arr[0].style.backgroundColor='red';
function clk(){
    data++;
   arr[data].style.backgroundColor='red';
   arr[data-1].style.backgroundColor='';
}
function clk1(){
    data--;
   arr[data].style.backgroundColor='red';
   arr[data+1].style.backgroundColor='';
}
next.addEventListener('click',clk)
prev.addEventListener('click',clk1)
