function personalvalidate(){


var first_name = document.getElementById("first_name").value;
//var last_name = document.getElementById(last_name).value;
//  var age = document.getElementById(age).value;
//  var gender = document.getElementsByClassName(gender).value;
//  var mob = document.getElementById(mob).value;
//  var email= document.getElementById(email).value;
// var employment= document.getElementsByClassName(employment).value;
// var income= document.getElementById(income).value;
var err_msg_first_name=document.getElementById("err_msg_first_name");







//first name validation
if(first_name==""){
    err_msg_first_name.style.color="red";
    err_msg_first_name.textContent="Enter Amount";
}
 if(first_name.match(/^[A-Za-z_@./#&+^*$-]+$/))
{
    err_msg_first_name.style.color="red";
    err_msg_first_name.textContent="Enter only numbers";

}
return true;
}