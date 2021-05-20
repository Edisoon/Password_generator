const display = document.querySelector("input"),
button = document.querySelector("button"),
copyBtn = document.querySelector("span.far"),
copyactive = document.querySelector("span.fas");
let chars = "abcdefghijklmnñopqrstuvwyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ!@#$%^&*()|{}[]<>?/-=_+.,";

button.onclick = ()=>{
    let i,
    passwordAleatorio = "";
    copyactive.style.display='none';
    copyBtn.style.display='block';
    for ( i = 0; i < 16; i++){
        passwordAleatorio = passwordAleatorio + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = passwordAleatorio;
}
function copy(){
    copyBtn.style.display='none';
    copyactive.style.display='block';
    display.select();
    document.execCommand("copy");
}