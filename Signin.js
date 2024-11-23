function Data(){
    let a = document.getElementById("email").value;
    let b = document.getElementById("password").value;
    if(a == ""){
        alert("Please fill in Email");
        return false;
    }else if(b == ""){
        alert("Please fill in Password");
        return false;
    }
    else{
        return true;
    }
}