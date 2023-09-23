const login_btn = document.getElementById("login-btn");
const Name = document.getElementById("name")
const Email = document.getElementById("email")
const Password = document.getElementById("pass")
const CfmPassword = document.getElementById("cfmpass")


function ValidateForm(){
    if(!Name.value || !Email.value || !Password.value || !CfmPassword.value){
        return false;
    }
    return true;
}

login_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(ValidateForm()){
        let obj = {
            name:Name.value,
            email:Email.value,
            password:Password.value,
            Token:"AccessToken123"
        }
        localStorage.setItem('obj', JSON.stringify(obj));
    }
    else{
        document.getElementById("e-op").innerText = "Error: All the fields are mandatory!"
    }
    
   

})