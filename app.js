let mm = gsap.matchMedia();
mm.add("(min-width:800px)", () => {
  //desktop
  function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();

  function pageOneAnimation() {
    gsap.from(".page-one h1", {
      y: 70,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      stagger: 0.2,
    });
    gsap.from(".page-one .video-container", {
      y: 100,
      scale: 0.9,
      opacity: 0,
      delay: 1,
      duration: 0.5,
    });
  }
  pageOneAnimation();

  function cardAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        top: dets.y,
        left: dets.x,
      });
    });

    document.querySelectorAll(".page-three").forEach(function (elem) {
      elem.addEventListener("mousemove", function () {
        gsap.to(".cursor", {
          transform: "translate(-50%,-50%)scale(1)",
        });
      });
    });
    document.querySelectorAll(".page-three").forEach(function (elem) {
      elem.addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
          transform: "translate(-50%,-50%)scale(0)",
        });
      });
    });
  }
  cardAnimation();

  //navbar animation
  function navbarAnimation() {
    gsap.to(".nav-part1 svg", {
      transform: "translateY(-100%)",
      marginTop: "-10px",
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        // markers: true,
        start: "top 0",
        end: "top -7%",
        scrub: 1,
      },
    });
    gsap.to(".nav-part2 .links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        //   markers: true,
        start: "top 0",
        end: "top -7%",
        scrub: true,
      },
    });
  }
  navbarAnimation();

  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  // cardanimation
  function hoverCardAnimation() {
    document.querySelector("#dets1").addEventListener("mouseover", function () {
      gsap.to("#c1", {
        height: "250px",
        opacity: 1,
        // display: "Initial",
      });
    });
    document
      .querySelector("#dets1")
      .addEventListener("mouseleave", function () {
        gsap.to("#c1", {
          height: "0px",
          opacity: 1,
          // display: "none",
        });
      });
    document.querySelector("#dets2").addEventListener("mouseover", function () {
      gsap.to("#c2", {
        height: "250px",
        opacity: 1,
      });
    });
    document
      .querySelector("#dets2")
      .addEventListener("mouseleave", function () {
        gsap.to("#c2", {
          height: "0px",
          opacity: 1,
        });
      });
    document.querySelector("#dets3").addEventListener("mouseover", function () {
      gsap.to("#c3", {
        height: "250px",
        opacity: 1,
      });
    });
    document
      .querySelector("#dets3")
      .addEventListener("mouseleave", function () {
        gsap.to("#c3", {
          height: "0px",
          opacity: 1,
        });
      });
  }
  hoverCardAnimation();
});

mm.add("(max-width:799px)", () => {
  function hoverCardAnimation() {
    document.querySelector("#dets1").addEventListener("mouseover", function () {
      gsap.to("#c1", {
        height: "250px",
        top: "70%",
        opacity: 1,
        // display: "Initial",
      });
    });
    document
      .querySelector("#dets1")
      .addEventListener("mouseleave", function () {
        gsap.to("#c1", {
          height: "0px",
          top: "50%",
          opacity: 1,
          // display: "none",
        });
      });
    document.querySelector("#dets2").addEventListener("mouseover", function () {
      gsap.to("#c2", {
        height: "250px",
        top: "70%",
        opacity: 1,
      });
    });
    document
      .querySelector("#dets2")
      .addEventListener("mouseleave", function () {
        gsap.to("#c2", {
          height: "0px",
          top: "50%",
          opacity: 1,
        });
      });
    document.querySelector("#dets3").addEventListener("mouseover", function () {
      gsap.to("#c3", {
        height: "250px",
        top: "70%",
        opacity: 1,
      });
    });
    document
      .querySelector("#dets3")
      .addEventListener("mouseleave", function () {
        gsap.to("#c3", {
          height: "0px",
          top: "50%",
          opacity: 1,
        });
      });
  }
  hoverCardAnimation();

  function navbarAnimation() {
    gsap.to(".nav-part1 svg", {
      transform: "translateY(-100%)",
      marginTop: "-10px",
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        // markers: true,
        start: "top 0",
        end: "top -7%",
        scrub: 1,
      },
    });
    gsap.to(".nav-part2 .links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        //   markers: true,
        start: "top 0",
        end: "top -7%",
        scrub: true,
      },
    });
  }
  navbarAnimation();
});
