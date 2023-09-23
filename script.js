
if(localStorage.getItem('AccessToken')){
        location.href = "./profilepage.html"
    }   
else{
const login_btn = document.getElementById("login-btn");
const Name = document.getElementById("name")
const Email = document.getElementById("email")
const Password = document.getElementById("pass")
const CfmPassword = document.getElementById("cfmpass")



function generateToken(){
    let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const AccessToken = generateToken();

function ValidateForm(){
    if(!Name.value || !Email.value || !Password.value || !CfmPassword.value){
        return false;
    }
    // if(Password.value !== CfmPassword.value){
    //     return false
    // }
    return true;
}

function ValidatePassword(){
    if(Password.value === CfmPassword.value){
        return true;
    }
    else{
        return false;
    }
}

login_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("e-op").innerText = ""
    if(ValidateForm()){
        if(ValidatePassword()){
            let obj = {
                name:Name.value,
                email:Email.value,
                password:Password.value
                // Token:"AccessToken123"
            }
            localStorage.setItem('obj', JSON.stringify(obj));
            localStorage.setItem("AccessToken",AccessToken);

            document.getElementById('signupForm').reset();
            window.location.href="./profilepage.html"
        }
        else{
            document.getElementById("e-op").innerText = "Error: Passwords doesnt match" 
        }
     
    }
    else{
        document.getElementById("e-op").innerText = "Error: All the fields are mandatory!"
    }
    
   

})
}


