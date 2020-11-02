const ul_name = document.querySelector(".sec-char");
const ul_char = document.querySelector(".sec-list");
const ul_planet = document.querySelector(".planet_det");
const nextbtn = document.querySelector(".next_page");
const prebtn = document.querySelector(".pre_page");
const char_name = document.querySelector(".char_name");
const char_planet = document.querySelector(".char_planet");
const num_dis = document.querySelector(".num_dis");
const sec_det1 = document.querySelector(".sec-det1");
//const sec_det=document.querySelector(".sec-det");
const planet = document.querySelector(".planet");
let urlNoPage = "http://swapi.dev/api/people/?page=";
var planet_url;
let pageNumber = 1;
const getData = async () => {
  const response = await fetch("https://swapi.dev/api/people/");

  const data = await response.json();
  //console.log(data);
  data.results.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name.name;
    li.classList.add("li-font");
    ul_name.appendChild(li);

    li.addEventListener("click", (e) => {
      ul_char.innerHTML = "";

      char_name.textContent = name.name;
      const liHeight = document.createElement("li");

      liHeight.textContent = "Height :";
      liHeight.textContent += name.height;
      liHeight.classList.add("li-font1");
      ul_char.appendChild(liHeight);
      const liMass = document.createElement("li");
      liMass.textContent = "Mass :";
      liMass.textContent += name.mass;
      liMass.classList.add("li-font1");
      ul_char.appendChild(liMass);
      const liHair_color = document.createElement("li");
      liHair_color.textContent = "Hair-color:";
      liHair_color.textContent += name.hair_color;
      liHair_color.classList.add("li-font1");
      const liSkin_color = document.createElement("li");
      liSkin_color.textContent = "Skin-color:";
      liSkin_color.textContent += name.skin_color;
      liSkin_color.classList.add("li-font1");
      ul_char.appendChild(liSkin_color);
      const liEye_color = document.createElement("li");
      liEye_color.textContent = "Eye-color:";
      liEye_color.textContent += name.eye_color;
      liEye_color.classList.add("li-font");
      ul_char.appendChild(liEye_color);
      const liBirth_year = document.createElement("li");
      liBirth_year.textContent = "Birth-Year:";
      liBirth_year.textContent += name.birth_year;
      liBirth_year.classList.add("li-font1");
      ul_char.appendChild(liBirth_year);
      const liGender = document.createElement("li");
      liGender.textContent = "Gender:";
      liGender.textContent += name.gender;
      liGender.classList.add("li-font1");
      ul_char.appendChild(liGender);

      planet_url = name.homeworld;
      console.log(planet_url);
      //sec_det1.innerHTML=""
      //load2();

      get_planet();
    });
  });
};

load1();
//getData()

const get_planet = async () => {
  ul_planet.innerHTML = "";
  //sec_det.innerHTML="";
  // console.log(sec_det);
  const response1 = await fetch(planet_url);
  const data1 = await response1.json();
  // console.log(data1);

  char_planet.textContent = data1.name;
  const lirot = document.createElement("li");
  lirot.textContent = "Rotation Period :";
  lirot.textContent += data1.rotation_period;
  lirot.classList.add("planet");
  ul_planet.appendChild(lirot);
  const liorpe = document.createElement("li");
  liorpe.textContent = "Orbital period:";
  liorpe.textContent += data1.orbital_period;
  liorpe.classList.add("planet");
  ul_planet.appendChild(liorpe);
  const lidia = document.createElement("li");
  lidia.textContent = "Diameter:";
  lidia.textContent += data1.diameter;
  lidia.classList.add("planet");
  ul_planet.appendChild(lidia);
  const licli = document.createElement("li");
  licli.textContent = "Climate:";
  licli.textContent += data1.climate;
  licli.classList.add("planet");
  ul_planet.appendChild(licli);
  const ligra = document.createElement("li");
  ligra.textContent = "Gravity:";
  ligra.textContent += data1.gravity;
  ligra.classList.add("planet");
  ul_planet.appendChild(ligra);
  const literr = document.createElement("li");
  literr.textContent = "Terraina:";
  literr.textContent += data1.terrain;
  literr.classList.add("planet");
  ul_planet.appendChild(literr);
};

nextbtn.addEventListener("click", pageUp);
prebtn.addEventListener("click", pageDown);

async function getDataBtn(pageNumber) {
  const url = urlNoPage + pageNumber;

  result = await fetch(url);
  const data3 = await result.json();
  console.log(data3);
  ul_name.innerHTML = "";
  ul_char.innerHTML = "";
  ul_planet.innerHTML = "";
  char_name.textContent = "";

  char_planet.textContent = "";
  getData();
}

function pageUp() {
  if (pageNumber === 8) {
    return;
  }
  pageNumber += 1;
  num_dis.innerText = `${pageNumber}`;
  getDataBtn(pageNumber);
}

function pageDown() {
  if (pageNumber === 1) {
    return;
  }
  pageNumber -= 1;
  num_dis.innerText = `${pageNumber}`;
  getDataBtn(pageNumber);
}

function load1() {
  const myDiv = document.querySelector(".char");
  var show = function () {
    myDiv.style.backgroundImage = "url('load.gif')";
    setTimeout(list_dis, 5000); // 5 seconds
  };

  var list_dis = function () {
    myDiv.style.backgroundImage = "url('')";

    getData();
  };

  show();
}

function load2() {
  const myDiv1 = document.querySelector(".planet");

  var show1 = function () {
    myDiv1.style.backgroundImage = "url('load1.gif')";
    setTimeout(list_dis1, 5000); // 5 seconds
  };

  var list_dis1 = function () {
    myDiv1.style.backgroundImage = "url('')";

    get_planet();
  };

  show1();
}
