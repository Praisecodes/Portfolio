const desktop = document.getElementById("desktop");
const NgPro = document.getElementById("NgPro");
const OpenSource = document.getElementById("OpenSource");
const topBtn = document.querySelector(".top");
const readmore = document.getElementById("learn");
const aboutNav = document.querySelector(".aboutNav");
const homeNav = document.querySelector(".homeNav");
const mobileNav = document.querySelector(".mobileNav");
const NavBtn = document.querySelector(".navBtn");
const Nav = document.querySelector(".Nav");
const close = document.querySelector(".close");

let startY, startX, TotalFingerSwipeDist = 100, allowedTime = 3000, distance, ellapsedTime, startTime;

const swipe = (swiperight, swipeleft) => {
  if(swiperight){
    Nav.style.transform = 'translate(200%)';
    setTimeout(() => {
      mobileNav.style.display = 'none';
    },500);
  }else{
    if(swipeleft){
      mobileNav.style.display = 'block';
      setTimeout(()=>{
        Nav.style.transform = 'translate(0%)';
      },100);
    }
  }
}

document.ontouchstart = (e) => {
  let touchobj = e.changedTouches[0];
  startX = touchobj.pageX;
  startY = touchobj.pageY;
  distance = 0;
  startTime = new Date().getTime();
  e.preventDefault();
}

document.ontouchmove = (e) => {
  e.preventDefault();
}

document.ontouchend = (e) => {
  let touchobj = e.changedTouches[0];
  distance = touchobj.pageX - startX;
  ellapsedTime = new Date().getTime() - startTime;
  let swiperightBol = (ellapsedTime<=allowedTime && distance >= TotalFingerSwipeDist && 
    Math.abs(touchobj.pageY - startY)<=100);

  let swipeleftBol = (ellapsedTime <= allowedTime && (distance <= TotalFingerSwipeDist && distance != 0) &&
    Math.abs(touchobj.pageY - startY) <=5);
  
  swipe(swiperightBol,swipeleftBol);
}

var typed = new Typed("#pcodes", {
    strings: [
        "A YOUNG DEVELOPER",
        "PRAISE CODES"
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

aboutNav.addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth'
  });
});

readmore.onclick = () =>{
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth'
  });
}

topBtn.addEventListener('click', () =>{
  document.getElementById('landing').scrollIntoView({
    behavior: 'smooth'
  });
})

homeNav.addEventListener('click', () => {
  document.getElementById('landing').scrollIntoView({
    behavior: 'smooth'
  });
});

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

NavBtn.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  setTimeout(() => {
    Nav.style.transform = 'translate(0%)';
  }, 100);
});

close.addEventListener('click', () =>{
  Nav.style.transform = 'translate(200%)';
  setTimeout(() => {
    mobileNav.style.display = 'none';
  }, 500);
});
