function loader(){
    var load = gsap.timeline()
    load
    .to(".strip",{
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        stagger:0.1,
        ease: "power4.in",
        duration:1
    })
    .to(".box",{
        y:465,
        scale:2,
        display:"none",
        duration:1.4,
        delay:.5
    },"a")
    .to(".strip",{
        backgroundColor:"#141414",
        duration:.05,
        delay:.7,
    },"a")
    .to("#loader",{
        y:"-100%",
        duration:1,
        delay:.5
    },"a")
    .to(".i1,.i2",{
        x:"-126%"
    },"b")
    .to(".i3",{
        x:"-15%"
    },"b")
    .to(".i4,.i5",{
        x:"-4%"
    },"b")
    .to(".i6,.i7",{
        x:"115%"
    },"b")
    .to(".i6,.i7",{
        x:"287%"
    },"c")
    .to(".i1",{
        rotate:63
    },"c")
    .to(".i6",{
        rotate:55
    },"c")
    .to(".i5",{
        rotate:-55
    },"c")
    .to(".black",{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    },"c")
    .from(".text1,.left",{
        opacity:0
    },"c")
    .from(".right h1",{
        y:"120%",
        stagger:0.2
    },"c")
    
}
loader()

function page1(){
    var tl1 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page1",
            scroller:"body",
            start:"top top",
            scrub:1,
            // markers:true
        }
    })
    .to(".i7",{
        rotate:-180,
        top:"50%",
        left:"20%",
        scale:.5
    },"a")
    .to(".i4",{
        rotate:90,
        top:"55.3%",
        left:"65%",
        scale:.5
    },"a")
    .to(".i6",{
        rotate:180,
        top:"85.3%",
        left:"23.5%",
        scale:.5
    },"a")
    .to(".i5",{
        rotate:-180,
        top:"62%",
        left:"35%",
        scale:.5
    },"a")
    .to(".i1",{
        rotate:0,
        top:"61.9%",
        left:"56.8%",
        scale:.5
    },"a")
    .to(".i3",{
        top:"50.2%",
        left:"33.4%",
        scale:.5
    },"a")
    .to(".i2",{
        rotate:-90,
        top:"55.4%",
        left:"38.7%",
        scale:.5,
    },"a")
    
}
page1()

function page2(){

    
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 40%",
            end:"top -100%",
            scrub:1,
            // markers:true
        }
    })
    tl2
    .from("#page2 h1",{
        y:"88%",
        stagger:0.5,
        duration:1.5
    })
    .to(".i2",{
        rotate:0,
        top:"50.2%",
        left:"47.5%"
    },"a")
    .to(".i1",{
        left:"50.8%",
    },"a")
    .to(".i5",{
        top:"85.3%",
    },"a")
    .to(".i6",{
        left:"29.5%",
    },"a")
    .to(".i4",{
        rotate:0,
        top:"50%",
        left:"57%",
    },"a")
    .to(".i2,.i1,.i6,.i7",{
        opacity:0
    })
}
page2()



gsap.to(".nav",{
    top:"0%",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"50% top",
        end:"60% top",
        scrub:1,
    }
})



function page3(){

    var tll = gsap.timeline({
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top 65%",
            end:"top 0%",
            scrub:1,
            // markers:true
        }
    })
    tll
      .to(".i3",{
            scale:8,
            left:"-50%",
            duration:1
        },"c")
        .to(".i5",{
            scale:8,
            left:"-15%",
            top:"260%",
            duration:1
        },"c")
        .to(".i4",{
            scale:8,
            left:"135%",
            duration:1
        },"c")



    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page3",
            scroller:"body",
            start:"top top",
            end:"top -400%",
            scrub:2,
            pin:true,
        }
    })
    tl
    .to("#page3 .ig",{
        y:"0%",
        stagger:0.2,
        duration:1
    })
    .to(".ig3",{
        x:"20%",
        duration:2
    },"a")
    .to(".ig2",{
        x:"120%",
        duration:2
    },"a")
    .to(".ig1",{
        x:"200%",
        duration:2
    },"a")
    .to(".st",{
        opacity:0,
        duration:0
    },"a")
    .to(".text2 h1",{
        y:0,
        stagger:0.2,
        duration:1,
        delay:.5
    },"a")
    .to(".hid",{
        opacity:1,
        duration:.5,
        delay:-.2
    })
    .to(".ig1 img",{
        y:"0%",
        stagger:2,
        duration:2
    },"b")
    .to("#count",{
        y:"-500%",
        duration:12.5
    },"b")
}
page3()



// document.querySelectorAll("#page2 h1").forEach(function(h){
//     gsap.from(h,{
//         y:"88%",
//         // stagger:0.2,
//         scrollTrigger:{
//             trigger:h,
//             scroller:"body",
//             start:"top 90%",
//             end:"top 80%",
//             scrub:1,
//             markers:true
//         }
//     })
// })