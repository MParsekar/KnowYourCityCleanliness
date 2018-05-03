document.getElementById("openLogin").addEventListener("click", function () {
    clickLogin();
});
document.getElementsByClassName("bigContainer")[0].addEventListener("click", function(event){
     hideLogin(event)   
});
document.getElementById("submit").addEventListener("click", function(event){
    console.log("Clicked me");
});
function clickLogin() {
    document.getElementsByClassName("container")[0].style.display = "block";
    // document.getElementById("openLogin").style.display = "none";
    document.getElementsByClassName("bigContainer")[0].style.display = "block";
}
function hideLogin(event){
    if(event.target.id=="bigContainer"){
        document.getElementsByClassName("container")[0].style.display = "none";
        // document.getElementById("openLogin").style.display = "block";
        document.getElementsByClassName("bigContainer")[0].style.display = "none";
    }else{
        console.log("Dont close");
    }
}