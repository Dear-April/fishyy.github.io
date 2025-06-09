const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
  const myName = prompt("Please enter your name.");
  // 避免输入为空
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
// 设置按钮的 onclick 事件处理器。按钮点击时，运行 setUserName() 函数。这样用户就可以通过点击按钮设置新名字了
myButton.onclick = function () {
  setUserName();
};
