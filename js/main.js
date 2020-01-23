


  
  /////////////////////////////////////////////////////////SCROLLMAGIC
  var controller = new ScrollMagic.Controller();
  
  //Scenes
  var scene = new ScrollMagic.Scene({
  
    triggerElement: "#about"
   
  })
    //.addIndicators()//
  
    .setClassToggle("#about", "fade-in")
    
    .addTo(controller)
  
 

  
    var scene = new ScrollMagic.Scene({
  
        triggerElement: "#about",
        
       
      })
        //.addIndicators()//
      
        .setClassToggle("nav", "nav2")
        
        .addTo(controller)
 
  

  
 

        var scene = new ScrollMagic.Scene({
  
            triggerElement: "#about",
            
           
          })
            //.addIndicators()//
          
            .setClassToggle("nav", "nav2")
           
            .addTo(controller)




/////////////////////////////////////////////////Services Animation
let devServ = document.getElementById("devService");

let devH1 = document.getElementById("devH1");
 let devImg = document.getElementById("devImg");

let conServ = document.getElementById("contentService");

let markServ = document.getElementById("marketingService");

 


            function devImgToggle() {
              
                devServ.style.backgroundColor = "#ff7e05de";
                devServ.style.color = "white";
                devServ.style.transition = "ease-in 200ms";
                devServ.style.opacity = "1";

                devH1.style.color = "white";
                devImg.style.color = "white";

                
            }


            function devImgToggle1() {
              
              devServ.style.backgroundColor = "#6967670d";
              devServ.style.color = "black";
              devServ.style.transition = "ease-in 200ms";
              devServ.style.opacity = "1";

              devH1.style.color = "black";
              devImg.style.color = "black";

              
          }

            function conImgToggle() {
                conServ.style.backgroundColor = "#ff7e05de";
                conServ.style.color = "white";

                conServ.style.transition = "ease-in 200ms";
                conServ.style.opacity = "1"

                conH1.style.color = "white";
                conImg.style.color = "white";

                
            }


            function conImgToggle1() {
              
              conServ.style.backgroundColor = "#6967670d";
              conServ.style.color = "black";
              conServ.style.transition = "ease-in 200ms";
              conServ.style.opacity = "1";

              conH1.style.color = "black";
              conImg.style.color = "black";

              
          }

            function markImgToggle() {
                markServ.style.backgroundColor = "#ff7e05de";
                markServ.style.color = "white";

                markServ.style.transition = "ease-in 200ms";
                markServ.style.opacity = "1"

                markH1.style.color = "white";
                markImg.style.Color = "white";

                markServ.src = ""

                
            }


            function markImgToggle1() {
              
              markServ.style.backgroundColor = "#6967670d";
              markServ.style.color = "black";
              markServ.style.transition = "ease-in 200ms";
              markServ.style.opacity = "1";

              markH1.style.color = "black";
              markImg.style.color = "black";

              
          }




//////////////////////////////////MOBILE NAV////////////////////////



  //Show mini menu
  
  var miniMenu = document.getElementById('miniMenuLinks');
  var mobileNav = document.getElementById("mobile-ul");
  var mobileLogo = document.getElementById('mobileLogo');
  var menuImage = document.getElementById('menuImage');
  var menuImageHide = document.getElementById('menuImageHide');


  function menuReveal(){
   
    mobileNav.style.display = "block";
    document.body.style.overflow = 'hidden';
    mobileLogo.style.display = 'none';
    menuImage.style.opacity = '0';
    menuImageHide.style.display = "block";
   
  }


  // Hide mini Menu

  function menuHide(){
    mobileNav.style.display = "none";
    document.body.style.overflow = 'scroll';
    mobileLogo.style.display = 'block';
    menuImage.style.opacity = '100%';
    menuImageHide.style.display = "none";
   
   

  }

  function deleteMenu(){
    mobileNav.style.display = "none";
    document.body.style.overflow = 'scroll';
    mobileLogo.style.display = 'block';
    menuImage.style.opacity = '100%';
    menuImageHide.style.display = "none";


  }