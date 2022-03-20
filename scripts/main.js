const desktop = document.getElementById("desktop");
const NgPro = document.getElementById("NgPro");
const OpenSource = document.getElementById("OpenSource");

var typed = new Typed("#pcodes", {
    strings: [
        "A YOUNG DEVELOPER",
        "PRAISE CODES"
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: false
})

const moveScreen = () => {
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth'
  });
}

const ToHome = () => {
  document.getElementById('landing').scrollIntoView({
    behavior: 'smooth'
  });
}

window.onscroll = () => {
  if(window.scrollY >=180){
    document.querySelector(".top").style.transform = "translateX(0%)";
  }
  else{
    document.querySelector(".top").style.transform = "translateX(100%)";
  }
  if(window.scrollY >= 100){
    NgPro.style.display = "flex";
    setTimeout(()=>{
      NgPro.style.transform = "translate(0%)";
      setTimeout(()=>{
        OpenSource.style.display = "flex";
        setTimeout(()=>{
          OpenSource.style.transform = "translate(0%)";
          setTimeout(() => {
            desktop.style.display = "flex";
            setTimeout(()=>{
              desktop.style.transform = "translate(0%)";
            },300);
          },500);
        },300)
      },500);
    },300)
    
  }
}
