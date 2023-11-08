function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "DEWICANTIK" && password =="DEWICANTIK"){
            if(confirm("Anda sangat cantik?") == true){
                window.location.href = "https://github.com/vinsmkod"
            } else {
                alert("Login dibatalkan karena Anda terlalu cantik!");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
} 