//$(window).ready(function(){
    //alert("its working");
//})

$('li').click(function(){
     alert("click");
})

$('#btn').click(function(){
    console.log($('#h1').text())
 $('#h1').text("this is the text")
    $('#h1').append("extra text")
})

$('#btn2').on("click", function(){
    console.log("The second button is clicked")
});


$("#myDiv").click(function(){
    $(this).addClass("clicked");
})

$("#btn3").click(function(){
    
})