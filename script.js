let password = document.getElementById('password')

function genPassword(){
    let char ='0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let passwordLength = 15;
    let password = '';


    for( let i =0; i<= passwordLength;i++){
        let randomNumber = Math.floor(Math.random() * char.length);
        password += char.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("password").value = password;

}

function copyPassword(){
    var copyText = document.getElementById('password')
    copyText.select()
    copyText.setSelectionRange(0,999);
    document.execCommand('copy')

}

