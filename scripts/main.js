window.onscroll = () =>{
    if(window.scrollY >= document.getElementById("landing").clientHeight-50){
        document.getElementById("backUp").style.display = "block";
    }else{
        document.getElementById("backUp").style.display = "none";
    }

    if(window.scrollY >= 40){
        document.getElementById("NgPro").style.display = "flex";
        setTimeout(() => {
            document.getElementById("NgPro").style.marginLeft = "0";
            setTimeout(() => {
                document.getElementById("NgProH2").style.marginTop = "0";
                setTimeout(()=>{
                    document.getElementById("NgProH2").style.fontSize = "160%";
                },0);
            }, 300);
        }, 500);
    }

    if(window.scrollY >= 600){
        document.getElementById("OpenSource").style.display = "flex";
        setTimeout(() => {
            document.getElementById("opensource").style.marginLeft = "17%";
            setTimeout(()=>{
                document.getElementById("opensource").style.fontSize = "150%";
            }, 300);
        }, 0);
    }
    if(window.scrollY >= 800){
        setTimeout(()=>{
            document.getElementById("desktop").style.display = "flex";
            setTimeout(()=>{
                document.getElementById("desktop").style.marginLeft = "0";
            },300);
        }, 200);
    }
}

const moveScreen = () => {
    window.scrollTo({
        top: document.getElementById("landing").clientHeight,
        left: 0,
        behavior: "smooth"
    });
}

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
