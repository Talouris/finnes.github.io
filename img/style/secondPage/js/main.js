const circleProps = [
    {x: "Ecosystem/Treasury", value: 15, backgroundColor: '#fffff'},
    {x: "Dev-Fund", value: 25, backgroundColor: '#d8bc1c'},
    {x: "Team", value: 16},
    {x: "Rewards + Listing", value: 17},
    {x: "Train To Earn", value: 19},
    {x: "Close Entities", value: 10},
    {x: "Seed", value: 20},
    {x: "Public", value: 5}
]

const selfPalette = [
    '#FFE60A',
    '#9A9A9A',
    '#73FF04',
    '#EF06AE',
    '#4122FF',
    '#FF800B',
    '#00DFFE',
    '#930AFF',
    '#fffff',
    '#00838f'
]

function myPie() { 
  let ctx = document.querySelector('#myPie').getContext('2d');
  let myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: false,
          datasets: [{
              data: [15,25,16,17,19,11,20,5],
              backgroundColor: ['#FFE60A','#9D9595','#73FF04','#EF06AE','#4122FF','#FF800B','#00DFFE','#930AFF'],
          }]
      },
      options: {}
  });
}
myPie('#mypie');

function changer() {
  let buttons = document.getElementsByClassName('buttonChanger')
  let active = document.getElementsByClassName('active')
  for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener("click", function() {
          for (let i = 0; i < active.length; i++) {
              active[i].classList.remove("active")
          }
          buttons[i].classList.add("active")
      })
  }
} 
changer('.buttonHolder');

function burgerMenu() {
  let links = document.querySelector('#burger-Btn');
  let navAct = document.querySelector('#nav');

  links.addEventListener("click", function() {
    if (links.classList.contains('activeBurger_Btn')) {
      links.classList.remove("activeBurger_Btn");
      navAct.classList.remove('activeBurger_Btn');
    }
    else {
      links.classList.add("activeBurger_Btn");
      navAct.classList.add('activeBurger_Btn');
    }
  })
}
  
burgerMenu('.burger-Btn');


function nightmode() {
  let changerTheme = document.querySelector('#changerTheme');
  let headerNight = document.querySelector('#header');
  let wrapperNight = document.querySelector('#wrapper');
  let utilityNight = document.querySelector('#utilityNight');
  let diagramsNight = document.querySelector('#section4ContentBlock');
  let footSec = document.querySelector('#footerSection');
  changerTheme.addEventListener("click", function() {
    if (changerTheme.classList.contains("changerMode")) {
      changerTheme.classList.remove("changerMode");
      wrapperNight.classList.remove("wrapper_night_mode");
      headerNight.classList.remove("nightmode_header");
      utilityNight.classList.remove("utility_night");
      diagramsNight.classList.remove("diagram_night_mode");
      footSec.classList.remove("foot_night_mode");
    } else {
      changerTheme.classList.add("changerMode");
      wrapperNight.classList.add("wrapper_night_mode");
      headerNight.classList.add("nightmode_header");
      utilityNight.classList.add("utility_night");
      diagramsNight.classList.add("diagram_night_mode");
      footSec.classList.add("foot_night_mode");
    }
  })
}
nightmode();