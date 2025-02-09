function homepageAnimation() {
  gsap.set(".slidesm", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 3,
    },
  });

  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
}

function RealPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 3,
    },
    xPercent: -200,
    ease: Power4,
  });
}

function teamAnimation() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });

    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

function testimonialsAnimation() {
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });

  document.querySelector(".textpara").innerHTML = clutter;

  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 100%",
      scrub: 3,
    },
    opacity: 1,
    stagger: 0.02,
    ease: Power4,
  });

  var clutter2 = "";
  document
    .querySelector(".textpara2")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter2 += `<span>&nbsp;</span>`;
      clutter2 += `<span>${e}</span>`;
    });

  document.querySelector(".textpara2").innerHTML = clutter2;

  gsap.set(".textpara2 span", { opacity: 0.1 });
  gsap.to(".textpara2 span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 30%",
      end: "bottom 80%",
      scrub: 3,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsulesAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

function bodyColorChange() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}

loco();
homepageAnimation();
RealPageAnimation();
teamAnimation();
testimonialsAnimation();
capsulesAnimation();
bodyColorChange();


let deferredPrompt;
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;

  const installButton = document.createElement("button");
  installButton.innerText = "Install App";
  installButton.style.position = "fixed";
  installButton.style.bottom = "20px";
  installButton.style.right = "20px";
  installButton.style.padding = "10px";
  installButton.style.background = "#007bff";
  installButton.style.color = "#fff";
  installButton.style.border = "none";
  installButton.style.cursor = "pointer";

  document.body.appendChild(installButton);

  installButton.addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === "accepted") {
        console.log("User installed the app");
      }
      installButton.remove();
    });
  });
});

