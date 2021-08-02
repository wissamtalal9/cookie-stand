let DomJavaScript = document.getElementById('salesprofile');

let hour = ['   ', '6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
let total = [];
let arr = [];
    function MainConstructor(name, min, max, avg) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.avg = avg;
        this.total = 0;
        this.cookies = 0;
        this.randomFun = 0;

    }


MainConstructor.prototype.randomFun = function () {
    //this.age = Math.floor(Math.random() * (max - min + 1) + min); 
    // return this.age;
    this.cookies = Math.floor(Math.random() * ((this.max - this.min + 1) + this.min));
    this.cookies = Math.floor(this.cookies * this.avg);
    this.total = this.total + this.cookies;
    return this.cookies;
};

MainConstructor.prototype.render = function () {
{/* <table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table> */}

    let articleElement = document.createElement('article');
    kittenProfiles.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let pElement = document.createElement('p');
    pElement.textContent = ' is ' + this.age + ' The Lab07 Constructor' + this.breed;
    articleElement.appendChild(pElement);

    const tableEle = document.createElement('table');
    articleElement.appendChild(tableEle);

    let tr1 = document.createElement('tr');
    tableEle.appendChild(tr1);

    for (let i = 0; i<hour.length; i++){
      let = document.createElement('th');
      th1.textContent = hour[i];
      tr1.appendChild(th1)
    }
    let th1 = document.createElement('th');
    th1.textContent = 'Is good with Kids';
    tr1.appendChild(th1)

    let th2 = document.createElement('th');
    th2.textContent = 'Is good with Dogs';
    tr1.appendChild(th2)

    let th3 = document.createElement('th');
    th3.textContent = 'Is good with Cats';
    tr1.appendChild(th3)

    let tr2 = document.createElement('tr');
    tableEle.appendChild(tr2);

    let td1 = document.createElement('td');
    td1.textContent = this.isGoodWithKids;
    tr2.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = this.isGoodWithDogs;
    tr2.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = this.isGoodWithCats;
    tr2.appendChild(td3);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.likes.length; i++) {
        let liElement = document.createElement('li');
        liElement.textContent = this.likes[i];
        ulElement.appendChild(liElement);
    }

    let imgElement = document.createElement('img');
    imgElement.src = this.imageSrc;
    // imgElement.setAttribute('src', this.imageSrc)
    articleElement.appendChild(imgElement);
}

let seattle = new MainConstructor('seattle', 23, 65, 6.3);
let tokyo = new MainConstructor('tokyo', 3, 24, 1.2);
let Dubai = new MainConstructor('Dubai', 11, 38, 3.7)
let Paris = new MainConstructor('Paris', 20, 38, 2.3)
let Lima = new MainConstructor('Lima', 2, 16, 4.6)



// for (let i = 0; i < hour.length; i++) {
//     arr[i].randomFun();
//     arr[i].render();
//     console.log(arr[i]);

// }
console.log(seattle);
seattle.land();

// Seattle 
// const Seattle =  {
//     name: "Seattle",
//     min:23 ,

//     max:65,

//     avg:6.3,

//     cookies: 0, prototype

//     total: [],  prototype

//     hour:['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'],
//     randomFun: function(){

//         this.cookies = Math.floor(Math.random() * (( this.max - this.min  + 1) + this.min));
//         this.cookies = Math.floor(this.cookies * this.avg) ;
//         this.total = this.total + this.cookies ;
//         return this.cookies;
//     },
//         land: function(){
//         let articleElement = document.createElement('article');
//             Profiles.appendChild(articleElement);

//         let h2Element = document.createElement('h2');
//         h2Element.textContent = this.name;
//         articleElement.appendChild(h2Element);

//         let ulElement = document.createElement('ul');
//         h2Element.appendChild(ulElement);

//         for(let i = 0; i <this.hour.length ; i++) {
//           let liElement = document.createElement('li');
//           liElement.textContent = this.hour[i] + ' ' + this.randomFun() + '  ' + "cookies";
//           ulElement.appendChild(liElement);
//         }
//         liElement = document.createElement('li');
//         liElement.textContent = 'Total:' + '     ' + this.total + '  ' + "cookies";
//         ulElement.appendChild(liElement);
//       }

//           }          
