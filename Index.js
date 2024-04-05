document.addEventListener("DOMContentLoaded",function(){
    'use strict';
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin( ScrollSmoother);
    // let scroller = ScrollSmoother.create({...});
    // let workInfoItems = document.querySelector('.work_photo_item');
    const work_items =gsap.utils.toArray('.work_photo_item');
    work_items.forEach(function (item,index){
        item.style.zIndex = work_items.length - index;
    });
    gsap.set(".work_photo_item",{
        clipPath:function(){
            return "inset(0px 0px 0px 0px)"
        }
    });

    const animations = gsap.to('.work_photo_item:not(:last-child)',{
        clipPath:function(){
            return "inset(0px 0px 500px 0px)"
        },
        stagger:.5,
        ease:"none"
    });
    
    //  scroller.effects(".box", {speed: 0.5, lag: 0.1});
    // ScrollSmoother.create({
    //     smooth: 1,
    //     effects: true,
    //     markers:true,
    //   });
      ScrollTrigger.create({
        trigger:".work",
        start:'top top',
        end: 'bottom bottom',
        animation:animations,
        scrub:true,
        // markers:true,
    });
});