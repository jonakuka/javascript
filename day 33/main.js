function validation(){

    var name = document.getElementById("name");

    var valid_name_regex = /^[A-Za-z]+$/;
    var valid_age_regex = /^[0-9]+$/;

    if(name.matches(valid_name_regex)){
        return true;
    
    }else{ 
           document.getElementById("name-error").style.visibility="visible";
           document.getElementById("name").style.borderColor="red";
           return false;
    }
}