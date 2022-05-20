const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.style.backgroundImage = `url(./img/${chosenImage})`;

bgImage.classList.add("bgImg");

document.body.appendChild(bgImage);
