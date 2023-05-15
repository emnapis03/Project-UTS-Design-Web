function out(){
    return alert("Apakah Anda ingin keluar?")
}


let popup = document.getElementById("popup");

function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}