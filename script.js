window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}
function loader(val) {
    var load = gsap.timeline()
    load
        .to(".strip", {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            stagger: 0.1,
            ease: "power4.in",
            duration: 1
        })
        .to("#loader", {
            y: "-100%",
            duration: .6,
            delay: .5,
            ease: "power2.in",
        }, "a")
        .to(".box", {
            top: `${val}%`,
            scale: 2.2,
            duration: .8,
            delay: .5,
            ease: "power2.in",
        }, "a")
        .to(".strip", {
            backgroundColor: "#141414",
            duration: .1,
            delay: .8,
        }, "a")
        .to(".box", {
            display: "none",
        }, "s")
        .from(".st", {
            opacity: 0,
            duration: 0.2
        }, "s")

        .to(".i1,.i2", {
            x: "-126%"
        }, "b")
        .to(".i3", {
            x: "-15%"
        }, "b")
        .to(".i4,.i5", {
            x: "-4%"
        }, "b")
        .to(".i6,.i7", {
            x: "115%"
        }, "b")
        .to(".i6,.i7", {
            x: "287%"
        }, "c")
        .to(".i1", {
            rotate: 63
        }, "c")
        .to(".i6", {
            rotate: 55
        }, "c")
        .to(".i5", {
            rotate: -55
        }, "c")
        .to(".black", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }, "c")
        .from(".line1", {
            width: 0
        }, "c")
        .from(".line2", {
            height: 0
        }, "c")
        .from(".text1,.lefttxt,.scrollbtn", {
            opacity: 0
        }, "c")
        .from(".right h1", {
            y: "120%",
            stagger: 0.2
        }, "c")

}

function page1() {
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1",
            scroller: "body",
            start: "top top",
            scrub: 1,
            // markers:true
        }
    })
    tl1
        .to(".i7", {
            rotate: -180,
            top: "50%",
            left: "20%",
            scale: .5
        }, "a")
        .to(".i4", {
            rotate: 90,
            top: "55.3%",
            left: "65%",
            scale: .5
        }, "a")
        .to(".i6", {
            rotate: 180,
            top: "85.3%",
            left: "23.5%",
            scale: .5
        }, "a")
        .to(".i5", {
            rotate: -180,
            top: "62%",
            left: "35%",
            scale: .5
        }, "a")
        .to(".i1", {
            rotate: 0,
            top: "61.9%",
            left: "56.8%",
            scale: .5
        }, "a")
        .to(".i3", {
            top: "50.2%",
            left: "33.4%",
            scale: .5
        }, "a")
        .to(".i2", {
            rotate: -90,
            top: "55.4%",
            left: "38.7%",
            scale: .5,
        }, "a")

}

function page2() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 40%",
            end: "top -100%",
            scrub: 1,
            // markers:true
        }
    })
    tl2
        .from("#page2 h1", {
            y: "88%",
            stagger: 0.5,
            duration: 1.5
        })
        .to(".i2", {
            rotate: 0,
            top: "50.2%",
            left: "47.5%",
            duration: 1
        }, "a")
        .to(".i1", {
            left: "50.8%",
            duration: 1

        }, "a")
        .to(".i5", {
            top: "85.3%",
            duration: 1
        }, "a")
        .to(".i6", {
            left: "29.5%",
            duration: 1
        }, "a")
        .to(".i4", {
            rotate: 0,
            top: "50%",
            left: "57%",
            duration: 1
        }, "a")
        .to(".i2,.i1,.i6,.i7", {
            opacity: 0
        })
}

function page3() {

    var tll = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "top 65%",
            end: "top 5%",
            scrub: 1,
            // markers:true
        }
    })
    tll
        .to(".i3", {
            scale: 8,
            left: "-50%",
            duration: 1
        }, "c")
        .to(".i5", {
            scale: 8,
            left: "-15%",
            top: "260%",
            duration: 1
        }, "c")
        .to(".i4", {
            scale: 8,
            left: "135%",
            duration: 1
        }, "c")



    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            start: "top top",
            end: "top -400%",
            scrub: 2,
            pin: true,
        }
    })
    tl
        .to("#page3 .ig", {
            y: "0%",
            stagger: 0.2,
            duration: 1
        })
        .to(".ig3", {
            x: "20%",
            duration: 2
        }, "a")
        .to(".ig2", {
            x: "120%",
            duration: 2
        }, "a")
        .to(".ig1", {
            x: "200%",
            duration: 2
        }, "a")
        .to(".st", {
            opacity: 0,
            duration: 0
        }, "a")
        .to(".text2 h1", {
            y: 0,
            stagger: 0.2,
            duration: 1,
            delay: .5
        }, "a")
        .to(".hid", {
            opacity: 1,
            duration: .5,
            delay: -.2
        })
        .to(".ig1 .defl", {
            scale: 1.2,
            duration: 1
        }, "b")
        .to(".ig1 .im-1", {
            y: "0%",
            duration: 1
        }, "b")
        .to("#count", {
            y: "-100%",
            duration: 1
        }, "b")
        .to(".t-1", {
            opacity: .4,
            duration: .3
        }, "b")
        .to(".t-2", {
            opacity: 1,
            duration: .3
        }, "b")
        .to(".ig1 .im-1", {
            scale: 1.2,
            duration: 1
        }, "c")
        .to(".ig1 .im-2", {
            y: "0%",
            duration: 1
        }, "c")
        .to("#count", {
            y: "-200%",
            duration: 1
        }, "c")
        .to(".t-2", {
            opacity: .4,
            duration: .3
        }, "c")
        .to(".t-3", {
            opacity: 1,
            duration: .3
        }, "c")
        .to(".ig1 .im-2", {
            scale: 1.2,
            duration: 1
        }, "d")
        .to(".ig1 .im-3", {
            y: "0%",
            duration: 1
        }, "d")
        .to("#count", {
            y: "-300%",
            duration: 1
        }, "d")
        .to(".t-3", {
            opacity: .4,
            duration: .3
        }, "d")
        .to(".t-4", {
            opacity: 1,
            duration: .3
        }, "d")
        .to(".ig1 .im-3", {
            scale: 1.2,
            duration: 1
        }, "e")
        .to(".ig1 .im-4", {
            y: "0%",
            duration: 1
        }, "e")
        .to("#count", {
            y: "-400%",
            duration: 1
        }, "e")
        .to(".t-4", {
            opacity: .4,
            duration: .3
        }, "e")
        .to(".t-5", {
            opacity: 1,
            duration: .3
        }, "e")
        .to(".ig1 .im-4", {
            scale: 1.2,
            duration: 1
        }, "f")
        .to(".ig1 .im-5", {
            y: "0%",
            duration: 1
        }, "f")
        .to("#count", {
            y: "-500%",
            duration: 1
        }, "f")
        .to(".t-5", {
            opacity: .4,
            duration: .3
        }, "f")
        .to(".t-6", {
            opacity: 1,
            duration: .3
        }, "f")
}

function navigation() {
    gsap.to(".nav", {
        top: "0%",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "body",
            start: "50% top",
            end: "60% top",
            scrub: 1,
        }
    })
    let navigation = document.querySelector("#navigation")

    var tlm = gsap.timeline({ paused: true })
        .fromTo(navigation, {
            clipPath: `polygon(0 0, 100% 0, 100% 0, 0 0)`
        }, {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`
        }, "a")
        .from(".menu-txt h4", {
            y: "100%",
            duration: 1
        }, "a")
        .from("#close,.bottm", {
            opacity: 0,
            duration: 1
        }, "a")
    document.querySelectorAll("#open").forEach(function (op) {
        op.addEventListener("click", function () {
            tlm.play()
        })
    })
    document.querySelector("#close").addEventListener("click", function () {
        tlm.reverse()
    })
}
navigation()
function scrollbtn() {
    document.querySelector(".scrollbtn").addEventListener("click", function () {
        gsap.to(window, {
            duration: 1.2,
            ease: "power2.in",
            scrollTo: { y: window.innerHeight + 200 },
        });
    });
}
scrollbtn()
function footerAnimation() {

    var ft = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 10%",
            end: "top -30%",
            scrub: 1,
            // markers: true
        }
    })

    ft
        .from(".fst", {
            y: "100%",
            stagger: {
                amount: .8
            },
            duration: 1.5
        })
        .to(".st8", {
            left: "120%",
            duration: 1.5
        }, "s")
        .to(".st7", {
            left: "89%",
            duration: 1.5
        }, "s")
        .to(".st6", {
            left: "77.5%",
            rotate: 97,
            duration: 1.5
        }, "s")
        .to(".st5", {
            left: "65.5%",
            rotate: "-97",
            duration: 1.5
        }, "s")
        .to(".st4", {
            left: "53.5%",
            duration: 1.5
        }, "s")
        .to(".st3", {
            left: "39.5%",
            duration: 1.5
        }, "s")
        .to(".st2", {
            left: "25.5%",
            duration: 1.5
        }, "s")
        .to(".st1", {
            left: "13%",
            rotate: 99,
            duration: 1.5
        }, "s")
}

function mobileFooterAnimation() {

    var ft = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 70%",
            end: "top 60%",
            scrub: 1,
        }
    })

    ft
        .from(".fst", {
            y: "100%",
            stagger: {
                amount: .8
            },
            duration: 1.5
        })
        .to(".st8", {
            left: "120%",
            duration: 1.5
        }, "s")
        .to(".st7", {
            left: "89%",
            duration: 1.5
        }, "s")
        .to(".st6", {
            left: "77.5%",
            rotate: 53.8,
            duration: 1.5
        }, "s")
        .to(".st5", {
            left: "65.5%",
            rotate: -53.8,
            duration: 1.5
        }, "s")
        .to(".st4", {
            left: "53.5%",
            duration: 1.5
        }, "s")
        .to(".st3", {
            left: "39.5%",
            duration: 1.5
        }, "s")
        .to(".st2", {
            left: "25.5%",
            duration: 1.5
        }, "s")
        .to(".st1", {
            left: "13%",
            rotate: 54.9,
            duration: 1.5
        }, "s")
}

function animationHnadlerForResponsive() {
    if (!window.matchMedia("(max-width: 640px)").matches) {
        page1()
        page2()
        page3()
        footerAnimation()
        loader(-16.5)

    }
    if (window.matchMedia("(max-width: 640px)").matches) {
        mobileFooterAnimation()
        loader(1)

    }
}
animationHnadlerForResponsive()
