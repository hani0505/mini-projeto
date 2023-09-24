function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/close_white_36dp.svg";
    }
}




function Anima() {
    const botao = document.querySelector('.anime');
    botao.classList.add('bounce-top');
  
    // Remover a classe 'bounce-top' após a animação
    setTimeout(() => {
      botao.classList.remove('bounce-top');
    }, 500);
  }
  