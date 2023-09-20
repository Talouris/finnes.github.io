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

// defaultPalette = selfPalette
// console.log(selfPalette)
// console.log(defaultPalette)

// let circleDiagram = anychart.pie(circleProps);
//     circleDiagram.innerRadius("30%");
//     circleDiagram.container("usingDiagram");
//     circleDiagram.palette(anychart.selfPalette);
//     circleDiagram.draw();

// console.log(anychart.palettes.defaultPalette)

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

let buttonHolder = document.querySelector('#buttonHolder')
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

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-Btn', '.burgerLines');
    let links = menu.find('.navItemLink');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('activeBurger_Btn');
      
      if (menu.hasClass('activeBurger_Btn')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burgerNav');