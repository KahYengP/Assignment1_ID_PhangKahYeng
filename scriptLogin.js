// const forms = document.querySelector(".forms"),
// links = document.querySelectorAll(".link");
// 
// links.forEach(link => {
// link.addEventListener("click", e => {
//  e.preventDefault(); 
//  forms.classList.toggle("show-signup");
// })
// })


function showSignup(){
    document.querySelector("#display-signup").style.display ="block";
    document.querySelector("#display-login").style.display = "none";
}

function showLogin(){
    document.querySelector("#display-login").style.display = "block";
    document.querySelector("#display-signup").style.display = "none";
}






