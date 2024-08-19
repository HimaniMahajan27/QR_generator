const imgbox= document.querySelector(".imgbox");
const qrimg= document.querySelector("#qrimg");
const url=  document.querySelector("#url");
const button=  document.querySelector("#button");
const clearbutton=  document.querySelector("#clearButton");


function qrgenerator(){
    if (url.value.trim() !== ""){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ url.value;
    }
    else{
        alert("please enter the url or any link to generate QR")
    }
}

button.addEventListener("click", qrgenerator);
clearbutton.addEventListener("click", ()=>
{
    url.value = "";        
    qrimg.src = "";
});



