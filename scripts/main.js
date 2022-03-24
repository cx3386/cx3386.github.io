let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/lovely.jpg') {
        myImage.setAttribute('src', 'images/pac-man.gif');
    } else {
        myImage.setAttribute('src', 'images/lovely.jpg');
    }
}

let userNameLabel = document.getElementById("user-name");

if (!localStorage.name) {
    switchUser();
} else {
    let storedName = localStorage.name;
    userNameLabel.textContent = storedName;
}

function switchUser() {
    let myName = prompt('请输入你的名字。');
    // 输入null时，myName是空值。而undefined不会有这个问题
    // myname===null这个会把myname类型强制为string再做判断，后面再复制时就不会是空白了
    if (!myName || myName === null) {
        switchUser();
    }
    localStorage.name = myName;
    userNameLabel.textContent = myName;
}