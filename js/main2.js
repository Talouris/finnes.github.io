function burgerMenu(selector) {
    let links = document.querySelector('#burger-Btn');
    let linksClass = document.getElementsByClassName('burger-Btn');
    const activeStat = document.getElementsByClassName('activeBurger_Btn'); 
  
    links.addEventListener("click", function() {
      if (links.classList.contains('activeBurger_Btn')) {
        links.classList.remove("activeBurger_Btn");
      }
      else {
        links.classList.add("activeBurger_Btn");
      }
    })
  }
    
burgerMenu('.burger-Btn');