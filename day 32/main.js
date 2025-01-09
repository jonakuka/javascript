//
//var input = document.getElementById('input_id');
//var button = document.getElementById('btn_id');

//var text = document.getElementById('teksti_id');

//button.onclick = function(){

    //text.innerHTML = input.value;
//}

//var text = "the best school in the world is digital school"
//var result = text.search("digital");
//document.getElementById("result1").innerHTML = result;

//var text1 = "the best school in the world is digital school"
//var result1 = text1.search(/digitalschool/ ,"Another school");
//document.getElementById("result1").innerHTML = result;

//var text = "Digital School is in top 10 best school of the world";
//var regex = /[0-9]/g;
//document.getElementById("result3").innerHTML = text.match(regex);

var text = "My School is the  best school in the world";
var regex = /(top|best|school)/g;
document.getElementById("result3").innerHTML = text.match(regex);


