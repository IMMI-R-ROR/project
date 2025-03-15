var sub =document.getElementById('sub');
var add =document.getElementById('add');
var result =document.getElementById('result');
var data=0;
function add_value(){
    data++;
    result.innerHTML=data;
}
function sub_value(){
    data--;
    result.innerHTML=data;
}
add.addEventListener('click',add_value);
sub.addEventListener('click',sub_value);

