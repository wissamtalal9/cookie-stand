'use strict'
//#################################################################################33

let hours = ['  City/Times  ', '6 am ', '7 am ', '8 am ',
  '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ',
  '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm ',
  'Daily location Total '];
  let column = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  let Count = [];
//#################################################################################33
let Profiles = document.getElementById('salesprofile');
let AddCityCookies = document.getElementById('CookiesForm');

let articleElement = document.createElement('article');
Profiles.appendChild(articleElement);
let TableElement = document.createElement('table');
articleElement.appendChild(TableElement);

//#################################################################################33

function header() {

  let row = document.createElement('tr');
  TableElement.appendChild(row);
  for (let i = 0; i < hours.length; i++) {
    let th_1 = document.createElement('th');
    th_1.textContent = hours[i];
    row.appendChild(th_1);
  }
}


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Footer 2
function footer2() {
  TableElement.removeChild(TableElement.childNodes[Count]);
  let row_2 = document.createElement('tr')
  TableElement.appendChild(row_2)

  let th_1 = document.createElement('th')
  th_1.textContent = 'Total OF C/H'
  row_2.appendChild(th_1)

  for (let i = 0; i < hours.length; i++) {

    let td_1 = document.createElement('td');
    td_1.textContent = column[i];
    row_2.appendChild(td_1);
  }
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Footer 1
function footer() {
  let row_2 = document.createElement('tr')
  TableElement.appendChild(row_2)

  let th_1 = document.createElement('th')
  th_1.textContent = 'total'
  row_2.appendChild(th_1)

  for (let i = 1; i < hours.length; i++) {

    let td_1 = document.createElement('td');
    td_1.textContent = column[i];
    row_2.appendChild(td_1);
  }
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Main Constructor 
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
// Random Number


MainConstructor.prototype.randomFun = function () {
  this.cookies = Math.floor(Math.random() * ((this.max - this.min + 1) + this.min));
  this.cookies = Math.floor(this.cookies * this.avg);
  this.total = this.total + this.cookies;
  return this.cookies;
};
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// The Render Function

MainConstructor.prototype.render = function () {
  Count++;
  let tr1 = document.createElement('tr');
  TableElement.appendChild(tr1);
  let td1 = document.createElement('th');
  td1.textContent = this.name;
  tr1.appendChild(td1);

  for (let i = 0; i < hours.length - 2; i++) {
    this.random = this.randomFun();
    column[i] += this.random;
    let tdElement = document.createElement('td');
    tdElement.textContent = this.random;
    tr1.appendChild(tdElement);
}
  column[hours - 1] += this.total;
  let tdElement = document.createElement('td');
  tdElement.textContent = this.total;
  tr1.appendChild(tdElement);
  




}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Call The City From Main Constructor
let seattle = new MainConstructor('seattle', 23, 65, 6.3);
let tokyo = new MainConstructor('tokyo', 3, 24, 1.2);
let Dubai = new MainConstructor('Dubai', 11, 38, 3.7)
let Paris = new MainConstructor('Paris', 20, 38, 2.3)
let Lima = new MainConstructor('Lima', 2, 16, 4.6)

header();
seattle.render();
tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
footer();




// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// The Javascript for get value From Form CookiesForm
//console.log(AddCityCookies)

AddCityCookies.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault(); // Stop refreshing
  let CityCookies = event.target.CityCookies.value;
  let MinCookies = event.target.MinCookies.value;
  let MaxCookies = event.target.MaxCookies.value;
  let AvgCookies = event.target.AvgCookies.value;
  let NewCountry = new MainConstructor(CityCookies, MinCookies, MaxCookies, AvgCookies);

  // while(MinCookies.value > MaxCookies.value) {
  //   alert ('You Enter Invalid number the min great max');
  //   CookiesForm.reset();
  //   CookiesForm.value.reset();
  // }
  

  CookiesForm.reset();
  NewCountry.render();
  footer2();

}