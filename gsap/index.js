/* const tl=gsap.timeline()
tl.from('.box-1 div',{
    scale:0,
    
    duration:1.5,
    rotate:360
})

tl.from('.box-2 div',{
    
   duration:1,
         scale:0,
         rotate:360,

     backgroundColor:'yellowgreen',
    scrollTrigger:{
        trigger:'.box-2 div',
        scroller:'body',
        start:'top 50%',
        end:'top 30%',
         markers:true,
         scrub:5
}


})




var content=''
document.querySelector('.box-2 h1').textContent.split(' ').forEach(function(dets){
    content+=`<span> ${dets} </span>`
    document.querySelector('.box-2 h1').innerHTML=content;
   
})




const tll=gsap.timeline()

tll.from('.box-1 div',{
    duration:1,
    scale:0,
    rotate:360,

})

tll.from('.box-2 div',{
    duration:1,
    scale:0,
    rotate:360,
   
    borderRadius:50,
     backgroundColor:'white',
    scrollTrigger:{
        trigger:'.box-2 div',
        start:'top 50%',
        end:'top 30%',
        scroller:'body',
        markers:true,
        scrub:5


    }
})

tll.from('.box-2 h1 span',{
    duration:1,
    color:white,
    scrollTrigger:{
        trigger:'box-2 h1',
        start:'top 50%',
        end:'top 30%',
        scroller:'body',
        scrub:3,
    }
})*/

const tl=gsap.timeline()
tl.from('.box-1 div',{
  rotate:360,
  scale:-1,
  duration:1.5,
  borderRadius:10,
  backgroundColor:'white'


    
})


var clutter=""
document.querySelector('.box-2 h1').textContent.split('').forEach(function(dets){
    clutter+=`<span>${dets}</span>`
  
    document.querySelector('.box-2 h1').innerHTML=clutter;
    
   
})

tl.to('.box-2>h1 span, .box-2>h1',{
 opacity:2,
    duration:0.2,
    color:'yellow',
    stagger:0.1})

 

