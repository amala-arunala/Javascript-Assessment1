"use strict";

let mainContent = document.querySelector(".pricing-section");

//First div
let productName = document.createElement("div");
productName.classList.add("product-name");
mainContent.appendChild(productName);

let img = document.createElement("img");
img.classList.add("img");
img.src = "./images/img4.jpg";
productName.appendChild(img);

let heading = document.createElement("h1");
heading.classList.add("product-heading");
productName.appendChild(heading);
heading.textContent = "Avocado Salad";

let btn = document.createElement("button");
btn.textContent = "Vegan";
btn.classList.add("btn3");
productName.appendChild(btn);

let btnTwo = document.createElement("button");
btnTwo.textContent = "Paleo";
btnTwo.classList.add("btn4");
productName.appendChild(btnTwo);

let smallContainer = document.createElement("div");
productName.appendChild(smallContainer);
smallContainer.classList.add("smallContainer");

let imgTwo = document.createElement("img");
imgTwo.classList.add("icons");
imgTwo.src = "./images/fire.png";
smallContainer.appendChild(imgTwo);

let paragraph = document.createElement("p");
paragraph.textContent = "400 Calories";
paragraph.classList.add("paragraph");
smallContainer.appendChild(paragraph);

let imgThree = document.createElement("img");
imgThree.classList.add("icons");
imgThree.src = "./images/icon2.png";
smallContainer.appendChild(imgThree);

let paragraphOne = document.createElement("p");
paragraphOne.textContent = "NutriScore 92";
paragraphOne.classList.add("paragraph");
smallContainer.appendChild(paragraphOne);

let imgRating = document.createElement("img");
imgRating.classList.add("icons");
imgRating.src = "./images/star.png";
smallContainer.appendChild(imgRating);

let paragraphTwo = document.createElement("p");
paragraphTwo.textContent = "Rating 4.8 (441)";
paragraphTwo.classList.add("paragraph");
smallContainer.appendChild(paragraphTwo);

//Second div
let productNameTwo = document.createElement("div");
productNameTwo.classList.add("product-name");
mainContent.appendChild(productNameTwo);

let imgsecond = document.createElement("img");
imgsecond.classList.add("img");
imgsecond.src = "./images/img5.jpg";
productNameTwo.appendChild(imgsecond);

let headingTwo = document.createElement("h1");
headingTwo.classList.add("product-heading");
productNameTwo.appendChild(headingTwo);
headingTwo.textContent = "Russian Salad";

let btnThree = document.createElement("button");
btnThree.textContent = "Keto";
btnThree.classList.add("btn3");
productNameTwo.appendChild(btnThree);

let btnFour = document.createElement("button");
btnFour.textContent = "Paleo";
btnFour.classList.add("btn4");
productNameTwo.appendChild(btnFour);

let smallContainer2 = document.createElement("div");
productNameTwo.appendChild(smallContainer2);
smallContainer2.classList.add("smallContainer");

let imgFour = document.createElement("img");
imgFour.classList.add("icons");
imgFour.src = "./images/fire.png";
smallContainer2.appendChild(imgFour);

let paragraph2 = document.createElement("p");
paragraph2.textContent = "350 Calories";
paragraph2.classList.add("paragraph");
smallContainer2.appendChild(paragraph2);

let imgFive = document.createElement("img");
imgFive.classList.add("icons");
imgFive.src = "./images/icon2.png";
smallContainer2.appendChild(imgFive);

let paragraph3 = document.createElement("p");
paragraph3.textContent = "NutriScore 90";
paragraph3.classList.add("paragraph");
smallContainer2.appendChild(paragraph3);

let imgSix = document.createElement("img");
imgSix.classList.add("icons");
imgSix.src = "./images/star.png";
smallContainer2.appendChild(imgSix);

let paragraph4 = document.createElement("p");
paragraph4.textContent = "4.7 Rating(421)";
paragraph4.classList.add("paragraph");
smallContainer2.appendChild(paragraph4);

//Third div
let productNameThree = document.createElement("div");
productNameThree.classList.add("product-name");
mainContent.appendChild(productNameThree);
productNameThree.id = "HideDiv";

let productImg = document.createElement("img");
productImg.classList.add("img");
productImg.src = "./images/img9.jpg";
productNameThree.appendChild(productImg);

let headingThree = document.createElement("h1");
headingThree.classList.add("product-heading");
headingThree.textContent = "Chinese food";
productNameThree.appendChild(headingThree);

let btnFive = document.createElement("button");
btnFive.classList.add("btn3");
btnFive.textContent = "Gluten free";
productNameThree.appendChild(btnFive);

let btnSix = document.createElement("button");
btnSix.classList.add("btn4");
btnSix.textContent = "Lactose free";
productNameThree.appendChild(btnSix);

let smallDiv = document.createElement("div");
productNameThree.appendChild(smallDiv);
smallDiv.classList.add("smallContainer");

let img7 = document.createElement("img");
img7.classList.add("icons");
img7.src = "./images/fire.png";
smallDiv.appendChild(img7);

let paragraph5 = document.createElement("p");
paragraph5.classList.add("paragraph");
paragraph5.textContent = "450 Calories";
smallDiv.appendChild(paragraph5);

let img8 = document.createElement("img");
img8.classList.add("icons");
img8.src = "./images/icon2.png";
smallDiv.appendChild(img8);

let paragraph6 = document.createElement("p");
paragraph6.classList.add("paragraph");
paragraph6.textContent = "NutriScore 90";
smallDiv.appendChild(paragraph6);

let img9 = document.createElement("img");
img9.classList.add("icons");
img9.src = "./images/star.png";
smallDiv.appendChild(img9);

let paragraph7 = document.createElement("p");
paragraph7.classList.add("paragraph");
paragraph7.textContent = "4.7 Rating(440)";
smallDiv.appendChild(paragraph7);

//Fourth div
let productNameFour = document.createElement("div");
productNameFour.classList.add("product-name");
mainContent.appendChild(productNameFour);
productNameFour.id = "HideDiv";

let productImg1 = document.createElement("img");
productImg1.classList.add("img");
productImg1.src = "./images/img10.jpg";
productNameFour.appendChild(productImg1);

let headingFour = document.createElement("h1");
headingFour.textContent = "Ice-cream";
headingFour.classList.add("product-heading");
productNameFour.appendChild(headingFour);

let btnSeven = document.createElement("button");
btnSeven.classList.add("btn3");
btnSeven.textContent = "Kid-friendly";
productNameFour.appendChild(btnSeven);

let btnEight = document.createElement("button");
btnEight.classList.add("btn4");
btnEight.textContent = "Paleo";
productNameFour.appendChild(btnEight);

let smallDiv2 = document.createElement("div");
productNameFour.appendChild(smallDiv2);
smallDiv2.classList.add("smallContainer");

let img10 = document.createElement("img");
img10.classList.add("icons");
img10.src = "./images/fire.png";
smallDiv2.appendChild(img10);

let paragraph8 = document.createElement("p");
paragraph8.classList.add("paragraph");
paragraph8.textContent = "430 Calories";
smallDiv2.appendChild(paragraph8);

let img11 = document.createElement("img");
img11.classList.add("icons");
img11.src = "./images/icon2.png";
smallDiv2.appendChild(img11);

let paragraph9 = document.createElement("p");
paragraph9.classList.add("paragraph");
paragraph9.textContent = "NutriScore 94";
smallDiv2.appendChild(paragraph9);

let img12 = document.createElement("img");
img12.classList.add("icons");
img12.src = "./images/star.png";
smallDiv2.appendChild(img12);

let paragraph10 = document.createElement("p");
paragraph10.classList.add("paragraph");
paragraph10.textContent = "4.6 Rating(438)";
smallDiv2.appendChild(paragraph10);

//Fifth div
let productNameFive = document.createElement("div");
productNameFive.classList.add("product-name");
mainContent.appendChild(productNameFive);
productNameFive.id = "HideDiv";

let productImg2 = document.createElement("img");
productImg2.classList.add("img");
productImg2.src = "./images/img8.jpg";
productNameFive.appendChild(productImg2);

let headingFive = document.createElement("h1");
headingFive.textContent = "Fish Biryani";
headingFive.classList.add("product-heading");
productNameFive.appendChild(headingFive);

let btnNine = document.createElement("button");
btnNine.classList.add("btn3");
btnNine.textContent = "Pescatarian";
productNameFive.appendChild(btnNine);

let btnTen = document.createElement("button");
btnTen.classList.add("btn4");
btnTen.textContent = "Paleo";
productNameFive.appendChild(btnTen);

let smallDiv3 = document.createElement("div");
productNameFive.appendChild(smallDiv3);
smallDiv3.classList.add("smallContainer");

let img13 = document.createElement("img");
img13.classList.add("icons");
img13.src = "./images/fire.png";
smallDiv3.appendChild(img13);

let paragraph11 = document.createElement("p");
paragraph11.classList.add("paragraph");
paragraph11.textContent = "450 Calories";
smallDiv3.appendChild(paragraph11);

let img14 = document.createElement("img");
img14.classList.add("icons");
img14.src = "./images/icon2.png";
smallDiv3.appendChild(img14);

let paragraph12 = document.createElement("p");
paragraph12.classList.add("paragraph");
paragraph12.textContent = "NutriScore 95";
smallDiv3.appendChild(paragraph12);

let img15 = document.createElement("img");
img15.classList.add("icons");
img15.src = "./images/star.png";
smallDiv3.appendChild(img15);

let paragraph13 = document.createElement("p");
paragraph13.classList.add("paragraph");
paragraph13.textContent = "4.8 Rating(438)";
smallDiv3.appendChild(paragraph13);

//Left and Right Arrow buttons
const leftArrow = document.querySelector(".left-btn");
const rightArrow = document.querySelector(".right-btn");

leftArrow.addEventListener("click", function () {
  productNameThree.style.display = "none";
  productNameFour.style.display = "block";
  productNameFive.style.display = "block";
  productNameTwo.style.display = "none";
  productName.style.display = "none";
});

rightArrow.addEventListener("click", function () {
  productNameThree.style.display = "block";
  productNameFour.style.display = "block";
  productNameTwo.style.display = "none";
  productName.style.display = "none";
  productNameFive.style.display = "none";
});
