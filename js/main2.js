function burgerMenu() {
    let links = document.querySelector('#burger-Btn');
    let absButton = document.querySelector('#button_active-menu'); 
    let navAct = document.querySelector('#nav');

    links.addEventListener("click", function() {
      if (links.classList.contains('activeBurger_Btn')) {
        links.classList.remove("activeBurger_Btn");
        navAct.classList.remove("activeBurger_Btn");
        absButton.classList.remove("active");
      }
      else {
        links.classList.add("activeBurger_Btn");
        navAct.classList.add("activeBurger_Btn");
        absButton.classList.add("active");
      }
    })
  }
    
burgerMenu('.burger-Btn');

function nightmode() {
  let changerTheme = document.querySelector('#changerTheme');
  let headerNight = document.querySelector('#header');
  let wrapperNight = document.querySelector('#wrapper');
  let subMainBg = document.querySelector('#subInfoMainBg');
  let stepsCard = document.querySelector('#howYouEarnCard');
  let calcCard = document.querySelector('#earningCalcTextPlace');
  let footSec = document.querySelector('#footerSection');

  changerTheme.addEventListener("click", function() {
    if (changerTheme.classList.contains("changerMode")) {
      changerTheme.classList.remove("changerMode");
      wrapperNight.classList.remove("wrapper_night_mode");
      headerNight.classList.remove("nightmode_header");
      subMainBg.classList.remove("main_night_mode");
      stepsCard.classList.remove("earnCard_night_mode");
      calcCard.classList.remove("calc_night_mode");
      footSec.classList.remove("foot_night_mode");
    } else {
      changerTheme.classList.add("changerMode");
      wrapperNight.classList.add("wrapper_night_mode");
      headerNight.classList.add("nightmode_header");
      subMainBg.classList.add("main_night_mode");
      stepsCard.classList.add("earnCard_night_mode");
      calcCard.classList.add("calc_night_mode");
      footSec.classList.add("foot_night_mode");
    }
  })
}
nightmode();