'use strict'

let hours = ['  City/Times  ', '6 am ', '7 am ', '8 am ', 
'9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', 
'2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm ',
 'Daily location Total '];
let column = [];
let Profiles = document.getElementById('salesprofile');
let articleElement = document.createElement('article');
Profiles.appendChild(articleElement);
let TableElement = document.createElement('table');
articleElement.appendChild(TableElement);
let row = document.createElement('tr');
TableElement.appendChild(row);
for (let i = 0; i < hours.length; i++) {
  let th_1 = document.createElement('th');
  th_1.textContent = hours[i];
  row.appendChild(th_1);
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function MainConstructor(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.coockies = 0;
  this.random = 0;
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


MainConstructor.prototype.randomFun = function () {
  this.cookies = Math.floor(Math.random() * ((this.max - this.min + 1) + this.min));
  this.cookies = Math.floor(this.cookies * this.avg);
  this.total = this.total + this.cookies;
  return this.cookies;
};
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

MainConstructor.prototype.render = function () {

  let tr1 = document.createElement('tr');
  TableElement.appendChild(tr1);
  let td1 = document.createElement('td');
  td1.textContent = this.name;
  tr1.appendChild(td1);

  for (let i = 0; i < hours.length - 2; i++) {
    this.random = this.randomFun();
    column[i] += this.random;
    let tdElement = document.createElement('td');
    tdElement.textContent = this.random;
    tr1.appendChild(tdElement);
  }
  column[hours - 2] += this.total;
  let tdElement = document.createElement('td');
  tdElement.textContent = this.total;
  tr1.appendChild(tdElement);
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

let seattle = new MainConstructor('seattle', 23, 65, 6.3);
let tokyo = new MainConstructor('tokyo', 3, 24, 1.2);
let Dubai = new MainConstructor('Dubai', 11, 38, 3.7)
let Paris = new MainConstructor('Paris', 20, 38, 2.3)
let Lima = new MainConstructor('Lima', 2, 16, 4.6)
console.log(seattle);
seattle.render();
tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}