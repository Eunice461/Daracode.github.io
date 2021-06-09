var fullname = document.querySelector(".fullname");
var email = document.querySelector(".email");
var pass = document.querySelector(".pass");
var message1 = document.querySelector(".message1");
var message2 = document.querySelector(".message2");
var charMsg = document.querySelector(".charMsg");
var con = document.querySelector(".confirmPass");
var btn = document.querySelector(".btn");

fullname.addEventListener('input', evt => {
    var value = fullname.value
    if(!value){
        fullname.dataset.state = ''
        return
    }

    var trimmed = value.trim
    if(trimmed){
        fullname.dataset.state = 'valid'
    }
    else{
        fullname.dataset.state = 'invalid'
    }

})


con.addEventListener('input', evt => {
    var value = con.value
    if(!value){
        con.dataset.state = ''
        return
    }

    var trimmed = value.trim
    if(trimmed){
        con.dataset.state = 'valid'
    }
    else{
        con.dataset.state = 'invalid'
    }

})

pass.addEventListener('input', evt => {
    var value = pass.value
    if(!value){
        pass.dataset.state = ''
        return
    }

    var trimmed = value.trim
    if(trimmed){
        pass.dataset.state = 'valid'
    }
    else{
        pass.dataset.state = 'invalid'
    }

})

email.addEventListener('input', evt => {
    var value = email.value
    if(!value){
        email.dataset.state = ''
        return
    }

    var trimmed = value.trim
    if(trimmed){
        email.dataset.state = 'valid'
    }
    else{
        email.dataset.state = 'invalid'
    }

})

btn.addEventListener('submit', evt => {
    evt.preventDefault()

})


btn.addEventListener('click', () => {
    function Validation(){
        var fullname = document.getElementById("nameBox").value;
        var pass = document.querySelector(".pass").value;
        var confirm = document.querySelector(".confirmPass").value;
        var div = document.querySelector(".div");
    
        if(fullname == ''){
            document.querySelector(".charMsg").innerHTML = "**Fill the full name";
            return false
        }
    
        if(pass == ""){
            document.querySelector(".message1").innerHTML = "**Fill the password please";
            return false;
        }
    
        if(confirm == ""){
            document.querySelector(".message2").innerHTML = "**Fill the password please";
            return false;
        }
    
        if(pass.length < 8){
            document.querySelector(".message1").innerHTML = "**Password length must be atleast 8 character";
            return false;
        }
    
        if(pass.length > 15){
            document.querySelector(".message1").innerHTML = "**Password length must not exceed 15 character";
            return false;
        }
        
        if(pass != confirm){
            document.querySelector(".message2").innerHTML = "**Password are not same";
            return false;
        }
        else{
            div.style.display = 'flex'
        }
    }

    Validation();
})

