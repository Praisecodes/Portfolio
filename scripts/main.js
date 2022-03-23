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
const writeName = document.querySelector(".writeName");
const writeEmail = document.querySelector(".writeEmail");
const writeMessage = document.querySelector('.writeMessage');
const writeButton =document.querySelector('.writeButton');
const okay = document.querySelector(".okay");
const successMessage = document.querySelector(".successMessage");
const successDiv = document.querySelector(".successDiv");
const NameEmpty = document.querySelector(".NameEmpty");
const EmailEmpty = document.querySelector(".EmailEmpty");
const NameError = document.querySelector(".NameError");
const EmailError = document.querySelector(".EmailError");
const NoneAtAll = document.querySelector(".NoneAtAll");
const NoneError = document.querySelector(".NoneError");

const Token = `5162915549:AAEYnwZGrgUdH67Z5-UpDBk0Rl2d9x79WMo`;

const chatID = `1967738166`;

let startY, startX, TotalFingerSwipeDist = 200, allowedTime = 3000, distance, ellapsedTime, startTime;

const swipe = (swiperight, swipeleft) => {
  if(swiperight){
    Nav.style.transform = 'translate(200%)';
    setTimeout(() => {
      mobileNav.style.display = 'none';
    },500);
    body.style.overflow = 'auto';
  }else{
    if(swipeleft){
      mobileNav.style.display = 'block';
      setTimeout(()=>{
        Nav.style.transform = 'translate(0%)';
      },100);
      body.style.overflow = 'hidden';
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
  let swiperightBol = (ellapsedTime<=allowedTime && distance >= 40 && 
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
    loop: false
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
  body.style.overflow = 'hidden';
});

close.addEventListener('click', () =>{
  Nav.style.transform = 'translate(200%)';
  setTimeout(() => {
    mobileNav.style.display = 'none';
  }, 500);
  body.style.overflow = 'auto';
});

okay.addEventListener('click', () => {
  successMessage.classList.remove("comeToScreen");
  successMessage.classList.add("leaveScreen");
  setTimeout(()=>{
    successDiv.style.display = 'none';
    successMessage.classList.remove("leaveScreen");
    successMessage.classList.add("comeToScreen");
  }, 500);
})

writeButton.addEventListener('click', ()=>{
  let NameValue = writeName.value + '%0A';
  let EmailValue = writeEmail.value + '%0A';
  let MessageContent = writeMessage.value;

  writeButton.style.fontSize = '25px';
  writeButton.innerHTML = "<i class='fa-solid fa-circle-notch'></i>";

  if(NameValue == '%0A' && EmailValue == '%0A'){
    NoneAtAll.style.display = "flex";
    writeButton.innerHTML = "Send A Message <i class='fa-solid fa-paper-plane'></i>";
    writeButton.style.fontSize = '18px';
    setTimeout(()=>{
      NoneError.classList.remove("comeToScreen");
      NoneError.classList.add("leaveScreen");
      setTimeout(()=>{
        NoneAtAll.style.display = 'none';
        NoneError.classList.remove("leaveScreen");
        NoneError.classList.add("comeToScreen");
      },500);
    },2000);
  }
  else if(EmailValue == '%0A'){
    EmailEmpty.style.display = "flex";
    writeButton.innerHTML = "Send A Message <i class='fa-solid fa-paper-plane'></i>";
    writeButton.style.fontSize = '18px';
    setTimeout(()=>{
      EmailError.classList.remove("comeToScreen");
      EmailError.classList.add("leaveScreen");
      setTimeout(()=>{
        EmailEmpty.style.display = 'none';
        EmailError.classList.remove("leaveScreen");
        EmailError.classList.add("comeToScreen");
      },500);
    },2000);
  }
  else if(NameValue == '%0A'){
    NameEmpty.style.display = "flex";
    writeButton.innerHTML = "Send A Message <i class='fa-solid fa-paper-plane'></i>";
    writeButton.style.fontSize = '18px';
    setTimeout(()=>{
      NameError.classList.remove("comeToScreen");
      NameError.classList.add("leaveScreen");
      setTimeout(()=>{
        NameEmpty.style.display = 'none';
        NameError.classList.remove("leaveScreen");
        NameError.classList.add("comeToScreen");
      },500);
    },2000);
  }
  else{
    let FinalMessage = `From: ${NameValue}%0AE-Mail: ${EmailValue}%0AMessage Body:%0A${MessageContent}`;
                      
    fetch("https://api.telegram.org/bot"+Token+"/sendmessage?chat_id="+chatID+"&text="+FinalMessage, {
      method: "GET"
    })
    .then(success => {
      successDiv.style.display = 'flex';
      writeName.value = '';
      writeEmail.value ='';
      writeMessage.value = '';
      writeButton.innerHTML = "Send A Message <i class='fa-solid fa-paper-plane'></i>";
      writeButton.style.fontSize = '18px';
    }, error =>{
      alert('Error sending message!');
      writeName.value = '';
      writeEmail.value ='';
      writeMessage.value = '';
      writeButton.innerHTML = "Send A Message <i class='fa-solid fa-paper-plane'></i>";
      writeButton.style.fontSize = '18px';
    });
  }
});

