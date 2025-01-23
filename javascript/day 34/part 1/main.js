// function printName(){
//     document.write("bob");
//     document.write("<br>");
//     setTimeout(function() {document.write("Ana");}, 3000);
//     document.write("Frank");
// }

// printName();

var colors =["green", "red", "blue", "yellow"];


function changebg(){
    document.queryselector('body').style.background = 
    colors[Math.Floor(Math.random()*colors.length)];

}

var names =["jona", "vlera", "albina", "uerda"];

function emrat(){
    document.queryselector('p').innerHtml = 
    names[Math.Floor(Math.random()*names.length)];

}
setInterval(emrat,2000);
setInterval(changebg,2000);
