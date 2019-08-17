let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/my-photo.jpg') {
      myImage.setAttribute('src', 'image/timg.jpg');
    } else {
      myImage.setAttribute('src', 'image/my-photo.jpg');
    }
}

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'hello' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;