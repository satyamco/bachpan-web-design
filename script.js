
function menuToggle(){
   const menuIcon = document.getElementById('menu')
   const menuBar = document.querySelector('.menubar')

   menuIcon.addEventListener('click', () => {
        if(menuBar.style.display=== 'none'){
            menuBar.style.display = 'block';
        }else{
            menuBar.style.display = 'none';
        }
   })
}
menuToggle();

function animations(){
  const timeline = gsap.timeline();

  timeline.from(".logo-div",{
      y:-50,
      duration:.5,
      stagger:.2
  })
  timeline.from(".item",{
      y:-50,
      duration:.5,
      stagger:.2,
      yoyo:true
  })
  timeline.from(".buttons",{
      opacity:0,
      scale: .8,
      duration:.5,
      stagger:.2
  })
  
}
animations();