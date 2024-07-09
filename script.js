
function navBarAnimation (){

    let navs = document.querySelectorAll(".nav-part-2-elem h4");
    let navBotom = document.querySelector(".nav-botom");
    let navH5 = document.querySelectorAll(".nav-part-2-elem h5 span");

    navs.forEach((nav)=>{

        nav.addEventListener("mouseenter",()=>{

            navBotom.style.height = "21vh";

            setTimeout(()=>{

                navH5.forEach((h5)=>{
                    h5.style.opacity = 1 ;
                 });

            },500);
            


            nav.addEventListener("mouseleave",()=>{

                setTimeout(()=>{

                    navBotom.style.height = 0;

                },500);

                navH5.forEach((h5)=>{
                    h5.style.opacity = 0 ;
                 });
                
        
        })

    })

})
    
}
navBarAnimation();


function page3VideoAnimation (){
    let page3Center = document.querySelector(".page-3-center")

    let page3I = document.querySelector(".page-3 i");
    
    let page3P = document.querySelector(".page-3 p");
    
    let video = document.querySelector(".page-3 video");
    
    
    page3Center.addEventListener("click",()=>{
    
       video.play();
    
       gsap.to(video,{
        transform: "scaleX(1) scaleY(1)",
        opacity:1,
       })
    });
    
    video.addEventListener("click",()=>{
    
        video.load();
    
        gsap.to(video,{
            transform: "scaleX(0.7) scaleY(0)",
            opacity:0,
           })
    })
    
    
}
page3VideoAnimation();


function page4VideoAnimation(){
    let page4Sections = document.querySelectorAll(".page-4-section-right");

    page4Sections.forEach((page4Section)=>{
        page4Section.addEventListener("mouseenter",()=>{
            page4Section.childNodes[3].style.opacity = 1;
            page4Section.childNodes[3].play();
        });
    
        page4Section.addEventListener("mouseleave",()=>{
            page4Section.childNodes[3].style.opacity = 0;
            page4Section.childNodes[3].load();

    });
})}

page4VideoAnimation();


function page5VideoAnimation(){
    let page5Sections = document.querySelectorAll(".page-5-section");

    page5Sections.forEach((page5Section)=>{
    
    page5Section.addEventListener("mouseenter",()=>{
            page5Section.childNodes[3].childNodes[3].style.opacity=1;
            page5Section.childNodes[3].childNodes[3].play();
       });
    
       page5Section.addEventListener("mouseleave",()=>{
           page5Section.childNodes[3].childNodes[3].style.opacity=0;
           page5Section.childNodes[3].childNodes[3].load();
    
          });
    });
}

page5VideoAnimation();



