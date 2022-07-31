/** @format */

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.style.backgroundSize = "cover";

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
// prepend -> 앞쪽에 추가

document.body.style.background = `url(img/${chosenImage}) no-repeat center center fixed`;
