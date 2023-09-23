if (localStorage.getItem('AccessToken')) {
    // window.location.href = '/profile.html';
const obj = JSON.parse(localStorage.getItem('obj'))

const Username = obj.name;
const UserEmail= obj.email;
const Accesstoken = localStorage.getItem("AccessToken");
const UserPass = obj.password;

const name1 = document.getElementById("UName")
name1.innerText = Username

const email1 = document.getElementById("Uemail")
email1.innerText = UserEmail;

const AToken1 = document.getElementById("UToken")
AToken1.innerText = Accesstoken;

const password1 = document.getElementById("Upass")
password1.innerText = UserPass;

// localStorage.clear();
}
else{
    window.location.href = './index.html'; 
}

document.getElementById("logout-btn").addEventListener("click",()=>{
    localStorage.clear();
    window.location.href = './index.html';
})