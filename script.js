function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

document.addEventListener("wheel",function (dets) {
    if (dets.offsetY > 450) {
        if (dets.deltaY > 0) {
            gsap.to("#nav",{
                y:-75,
                // duration:.5, 
                })
            }
    }
    if (dets.deltaY < 0) {
        gsap.to("#nav",{
            y:0,
            duration:.5, 
            })
        }
})


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

var tl = gsap.timeline()
tl.from("#nav svg",{
    y:-50,
    opacity: 0,
    duration:1, 
})
tl.from("#page1>img",{
    scale: .4,
    duration:.5,
    borderRadius:"50px",
    ease: Expo.easeIn, 
})
tl.from("#menu,#book",{
    y:-60,
    opacity: 0,
    duration:.5, 
})
gsap.to("#nav",{
    backgroundColor: "#fff",
    // duration:.5, 
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top -3%",
        end: "top -9%",
        scrub: 4,
      },
})
gsap.to("#nav svg",{
    y:-35,
    scale: .2,
    duration:.5, 
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -5%",
        scrub: 4,
      },
})
// gsap.to("#nav",{
//     opacity: 1,
//     backgroundColor: "#fff",
//     duration:.1, 
//     scrollTrigger: {
//         trigger: "#page1",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -5%",
//         scrub: 2,
//       },
// })
var h2all = document.querySelectorAll("#page2 h2");

h2all.forEach((elem)=> {
    var textall = elem.textContent
    var splitedText =  textall.split("");
    var clutter = "";
    splitedText.forEach(e => {
        clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
});

gsap.to("#page2 h2 span",{
    color: "#E3E3C4",
    stagger: .5,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2",
        // markers:true,   
        start: "top 50%",
        end: "top -30%",
        scrub: 5,
    }
})
gsap.from("#wave",{
    right: 500,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#text",
        // markers:true,
        start: "top 100%",
        end: "top 0%",
        scrub:5,
    }
})

    var h3all = document.querySelectorAll("#text h3");

    h3all.forEach(elemm => {
        var textContent = elemm.textContent;
        var spliteddata = textContent.split("");
        var broken = "";
        spliteddata.forEach(ee => {
            broken += `<span>${ee}</span>`;
        });
        elemm.innerHTML = broken;
    });
gsap.to("#text h3 span",{
    color: "#5B6647",
    stagger: .5,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#wave",
        // markers:true,
        start: "top 100%",
        end: "top 0%",
        scrub: 5,
    }
})
gsap.from("#page3",{
    y:10,
    stagger: 1,
    opacity: 0,
    duration:.2,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        // markers:true,
        start: "top 75%",
        end: "top 20%",
        scrub: 1,
    }
})
    // var swiper = new Swiper(".mySwiper", {
    //   slidesPerView: "auto",
    //   spaceBetween: 30,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  gsap.from("#wave2",{
    right: 500,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#wave2",
        // markers:true,
        start: "top 100%",
        end: "top -30%",
        scrub:5,
    }
})
var h3all = document.querySelectorAll("#text2 h3");

h3all.forEach(elemm => {
    var textContent = elemm.textContent;
    var spliteddata = textContent.split("");
    var broken = "";
    spliteddata.forEach(ee => {
        broken += `<span>${ee}</span>`;
    });
    elemm.innerHTML = broken;
});
gsap.to("#text2 h3 span",{
color: "#E3E3C4",
stagger: .5,
scrollTrigger:{
    scroller:"#main",
    trigger:"#text2",
    // markers:true,
    start: "top 70%",
    end: "top 10%",
    scrub: 3,
}
})
gsap.from(".dining",{
    y:100,
    stagger: .1,
    opacity: 0,
    duration:.2,
    scrollTrigger:{
        scroller:"#main",
        trigger:".dining",
        // markers:true,
        start: "top 75%",
        end: "top 50%",
        scrub: 1,
    }
})
gsap.from("#wave3",{
    right: 500,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#wave3",
        // markers:true,
        start: "top 100%",
        end: "top -30%",
        scrub:5,
    }
})
var h2all = document.querySelectorAll("#page7>h2");
h2all.forEach((elem)=> {
    var textall = elem.textContent
    var splitedText =  textall.split("");
    var clutter = "";
    splitedText.forEach(e => {
        clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
});
gsap.to("#page7 h2 span",{
    color: "#434B34",
    stagger: .5,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page7",
        // markers:true,   
        start: "top 90%",
        end: "top -10%",
        scrub: 5,
    }
})
gsap.to("#left",{
    x:-300,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page8",
        // markers:true,   
        start: "top 90%",
        end: "top 0%",
        scrub: 5,
    }
})
gsap.to("#right",{
    x:300,
    duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page8",
        // markers:true,   
        start: "top 90%",
        end: "top 0%",
        scrub: 5,
    }
})
gsap.from("#p8-text",{
    duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page8",
        // markers:true,   
        start: "top 90%",
        end: "top 20%",
        scrub: 5,
    }
})
gsap.from("#svg7",{
    x: -500,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#svg7",
        // markers:true,
        start: "top 100%",
        end: "top -30%",
        scrub:5,
    }
})
gsap.from("#svg8",{
    x: -300,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#svg8",
        // markers:true,
        start: "top 100%",
        end: "top -30%",
        scrub:5,
    }
})
