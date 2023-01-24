const myImage = document.querySelector("img");


myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/dns.png") {
        myImage.setAttribute("src", "images/img2.png");
    } else {
        myImage.setAttribute("src", "images/dns.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Fuck You, ${myName} !`;
}
if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Fuck you, $(myName) !`;
}
myButton.onclick = () => {
    setUserName();
};