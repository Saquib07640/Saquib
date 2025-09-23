

// const accordionItems = document.querySelectorAll(".accordion-item");
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);

// accordionItems.forEach((item) => {
//   const header = item.querySelector(".accordion-header");
//   const content = item.querySelector(".accordion-content");

//   // Set height on load if active
//   if (item.classList.contains("active")) {
//     content.style.height = content.scrollHeight + "px";
//   }

//   header.addEventListener("click", () => {
//     const isActive = item.classList.contains("active");

//     // Collapse all
//     accordionItems.forEach((i) => {
//       i.classList.remove("active");
//       i.querySelector(".accordion-content").style.height = "0";
//     });

//     // Expand this one if not already open
//     if (!isActive) {
//       item.classList.add("active");
//       content.style.height = content.scrollHeight + "px";
//     }
//   });
// });

// const burgerBtn = document.getElementById("burgerBtn");
// const mobileMenu = document.getElementById("mobileMenu");
// const closeBtn = document.getElementById("closeBtn");

// burgerBtn.addEventListener("click", () => {
//   mobileMenu.style.left = "0";
// });

// closeBtn.addEventListener("click", () => {
//   mobileMenu.style.left = "-100%";
// });

// gsap.from(".about_images", {
//   scrollTrigger: {
//     trigger: ".about_images", // when ".box_2" comes into view
//     opacity: 1,
//     scrub: true,
//     end: "center center",
//   },
//   opacity: 0, // animate to opacity 1
//   duration: 1, // optional: animation duration
// });

// let windowDimensions = { width: 0, height: 0 };

// const getWindowWidth = () => {
//   windowDimensions = { width: window.innerWidth, height: window.innerHeight };
// };

// window.addEventListener("resize", getWindowWidth);
// getWindowWidth(); // initial update

// const isMobile = () => windowDimensions.width < 450;

// function textAnimation(className, trigger) {
//   const splitTypes = document.querySelectorAll(className);

//   splitTypes.forEach((char, i) => {
//     const text = new SplitType(char, { types: "chars" });

//     gsap.fromTo(
//       text.chars,
//       {
//         y: 280,
//       },
//       {
//         y: 0,
//         duration: 0.6,
//         stagger: 0.09,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: trigger,
//           start: "top 80%",
//         },
//       }
//     );
//   });
// }


// const isTouchDevice = window.matchMedia("(hover: none), (max-width: 768px)").matches;

//   if (!isTouchDevice) {
//     // Create main cursor and tail
//     const cursor = document.createElement("div");
//     cursor.classList.add("custom-cursor");
//     document.body.appendChild(cursor);

//     const tail = document.createElement("div");
//     tail.classList.add("cursor-tail");
//     document.body.appendChild(tail);

//     let mouseX = 0, mouseY = 0;
//     let cursorX = 0, cursorY = 0;
//     let tailX = 0, tailY = 0;

//     document.addEventListener("mousemove", (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     });

//     function animate() {
//       // Main cursor movement
//       cursorX += (mouseX - cursorX) * 0.15;
//       cursorY += (mouseY - cursorY) * 0.15;
//       cursor.style.left = cursorX + "px";
//       cursor.style.top = cursorY + "px";

//       // Tail follows behind
//       tailX += (mouseX - tailX) * 0.05;
//       tailY += (mouseY - tailY) * 0.05;
//       tail.style.left = tailX + "px";
//       tail.style.top = tailY + "px";

//       requestAnimationFrame(animate);
//     }
//     animate();

//     // Hover effect
//     const hoverTargets = document.querySelectorAll("a, button, p, h1, h2, h3, h4, h5, h6");
//     hoverTargets.forEach((el) => {
//       el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
//       el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
//     });

//     // Save cursor position for page transitions
//     window.addEventListener("beforeunload", () => {
//       localStorage.setItem("cursorX", mouseX);
//       localStorage.setItem("cursorY", mouseY);
//     });

//     const savedX = localStorage.getItem("cursorX");
//     const savedY = localStorage.getItem("cursorY");
//     if (savedX && savedY) {
//       mouseX = parseFloat(savedX);
//       mouseY = parseFloat(savedY);
//       cursorX = mouseX;
//       cursorY = mouseY;
//       tailX = mouseX;
//       tailY = mouseY;
//       cursor.style.left = `${cursorX}px`;
//       cursor.style.top = `${cursorY}px`;
//       tail.style.left = `${tailX}px`;
//       tail.style.top = `${tailY}px`;
//     }
//   }

// const loaderElement = document.getElementById("mini-loader-content");
// const time = 1000;
// let isLoading = true;

// window.addEventListener("load", () => {
//   isLoading = false;

//   if(isLoading === false) {
//     loaderElement.style.display = "none"; // Now this works
//   }
//   textAnimation("#text-container", "#text-container");
//   textAnimation("#about-container", "#about-container");
//   textAnimation("#work-animation", ".about-heading");
//   textAnimation(".work-animation-1", ".Work_heading");

// });
// textAnimation(".reveal-type", ".about_heading");
// textAnimation(".reveal-type_2", ".Work_heading");
// textAnimation(".revealType_3", ".add");
// textAnimation(".skills_heading", ".ani");
// textAnimation(".name-effect", "#about-container");
// textAnimation(".name-effect-1", ".process_content");
// textAnimation(".work-animation-2", ".webiste");


//   const skills = [
//     {
//       title: "Web Design",
//       description: "Craft engaging, user-friendly Websites.",
//       items: ["Landing page", "Website", "One page", "Responsive"]
//     },
//     {
//       title: "Graphic Design",
//       description: "Creates impactful visuals and branding.",
//       items: ["Creatives", "Illustrator", "Logo", "Packaging"]
//     },
//     {
//       title: "Development",
//       description: "Builds functional and scalable solution.",
//       items: ["wordress","shopify","Form database", "Add-on"]
//     },
//     {
//       title: "Video Editing",
//       description: "Crafts captivating and polished visual stories.",
//       items: ["Reels", "Youtube", "Story board"]
//     }
//   ];

//   const skillsContent = document.getElementById("skillsContent");

//   skillsContent.innerHTML = skills.map(skill => `
//     <div class="skills_content_heading">
//       <div class="skills_content_heading_1">
//         <h2>${skill.title}</h2>
//         <p>${skill.description}</p>
//         <ul>
//           ${skill.items.map(item => `<li>${item}</li>`).join("")}
//         </ul>
//       </div>
//       <div class="skills_bottom_content">
//         <div class="bottom-content">
//           <h3>Explore</h3>
//         </div>
//         <div class="bottom-icon">
//           <i class="fa-solid fa-arrow-right"></i>
//         </div>
//       </div>
//     </div>
//   `).join("");
  

 
//   function scrollToNextSection() {
//       const nextSection = document.getElementById('next-section');
//       if (nextSection) {
//         nextSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     }

//     // Hide scroll button after scroll
//     window.addEventListener('scroll', () => {
//       const scrollBtn = document.getElementById('scroll-indicator');
//       if (window.scrollY > 50) {
//         scrollBtn.classList.add('hide');
//       } else {
//         scrollBtn.classList.remove('hide');
//       }
//     });


//     window.addEventListener("scroll", () => {
//   const btn = document.getElementById("scrollTopBtn");
//   if (window.scrollY > 100) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// });


// const filterButtons = document.querySelectorAll(".filter-btn");
//   const galleryItems = document.querySelectorAll(".gallery-item");

//   filterButtons.forEach(button => {
//     button.addEventListener("click", () => {
//       filterButtons.forEach(btn => btn.classList.remove("active"));
//       button.classList.add("active");

//       const filterValue = button.dataset.filter;

//       galleryItems.forEach(item => {
//         if (filterValue === "all" || item.classList.contains(filterValue)) {
//           item.classList.remove("hidden");
//         } else {
//           item.classList.add("hidden");
//         }
//       });
//     });
//   });






const accordionItems = document.querySelectorAll(".accordion-item");
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  // Set height on load if active
  if (item.classList.contains("active")) {
    content.style.height = content.scrollHeight + "px";
  }

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Collapse all
    accordionItems.forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".accordion-content").style.height = "0";
    });

    // Expand this one if not already open
    if (!isActive) {
      item.classList.add("active");
      content.style.height = content.scrollHeight + "px";
    }
  });
});

const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

burgerBtn.addEventListener("click", () => {
  mobileMenu.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.left = "-100%";
});

gsap.from(".about_images", {
  scrollTrigger: {
    trigger: ".about_images", // when ".box_2" comes into view
    opacity: 1,
    scrub: true,
    end: "center center",
  },
  opacity: 0, // animate to opacity 1
  duration: 1, // optional: animation duration
});

let windowDimensions = { width: 0, height: 0 };

const getWindowWidth = () => {
  windowDimensions = { width: window.innerWidth, height: window.innerHeight };
};

window.addEventListener("resize", getWindowWidth);
getWindowWidth(); // initial update

const isMobile = () => windowDimensions.width < 450;

function textAnimation(className, trigger) {
  const splitTypes = document.querySelectorAll(className);

  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars" });

    gsap.fromTo(
      text.chars,
      {
        y: 280,
      },
      {
        y: 0,
        duration: 0.6,
        stagger: 0.09,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger,
          start: "top 80%",
        },
      }
    );
  });
}


const isTouchDevice = window.matchMedia("(hover: none), (max-width: 768px)").matches;

  if (!isTouchDevice) {
    // Create main cursor and tail
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const tail = document.createElement("div");
    tail.classList.add("cursor-tail");
    document.body.appendChild(tail);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let tailX = 0, tailY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      // Main cursor movement
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      // Tail follows behind
      tailX += (mouseX - tailX) * 0.05;
      tailY += (mouseY - tailY) * 0.05;
      tail.style.left = tailX + "px";
      tail.style.top = tailY + "px";

      requestAnimationFrame(animate);
    }
    animate();

    // Hover effect
    const hoverTargets = document.querySelectorAll("a, button, p, h1, h2, h3, h4, h5, h6");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
    });

    // Save cursor position for page transitions
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("cursorX", mouseX);
      localStorage.setItem("cursorY", mouseY);
    });

    const savedX = localStorage.getItem("cursorX");
    const savedY = localStorage.getItem("cursorY");
    if (savedX && savedY) {
      mouseX = parseFloat(savedX);
      mouseY = parseFloat(savedY);
      cursorX = mouseX;
      cursorY = mouseY;
      tailX = mouseX;
      tailY = mouseY;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      tail.style.left = `${tailX}px`;
      tail.style.top = `${tailY}px`;
    }
  }

const loaderElement = document.getElementById("mini-loader-content");
const time = 1000;
let isLoading = true;

window.addEventListener("load", () => {
  isLoading = false;

  if(isLoading === false) {
    loaderElement.style.display = "none"; // Now this works
  }
  textAnimation("#text-container", "#text-container");
  textAnimation("#about-container", "#about-container");
  textAnimation("#work-animation", ".about-heading");
  textAnimation(".work-animation-1", ".Work_heading");

});
textAnimation(".reveal-type", ".about_heading");
textAnimation(".reveal-type_2", ".Work_heading");
textAnimation(".revealType_3", ".add");
textAnimation(".skills_heading", ".ani");
textAnimation(".name-effect", "#about-container");
textAnimation(".name-effect-1", ".process_content");
textAnimation(".work-animation-2", ".webiste");


  const skills = [
    {
      title: "Web Design",
      description: "Craft engaging, user-friendly Websites.",
      items: ["Landing page", "Website", "One page", "Responsive"]
    },
    {
      title: "Graphic Design",
      description: "Creates impactful visuals and branding.",
      items: ["Creatives", "Illustrator", "Logo", "Packaging"]
    },
    {
      title: "Development",
      description: "Builds functional and scalable solution.",
      items: ["wordress","shopify","Form database", "Add-on"]
    },
    {
      title: "Video Editing",
      description: "Crafts captivating and polished visual stories.",
      items: ["Reels", "Youtube", "Story board"]
    }
  ];

  const skillsContent = document.getElementById("skillsContent");
if (skillsContent) {
  skillsContent.innerHTML = skills.map(skill => `
    <div class="skills_content_heading">
      <div class="skills_content_heading_1">
        <h2>${skill.title}</h2>
        <p>${skill.description}</p>
        <ul>
          ${skill.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="skills_bottom_content">
        <div class="bottom-content">
          <h3>Explore</h3>
        </div>
        <div class="bottom-icon">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  `).join("");
}

  

 
  function scrollToNextSection() {
      const nextSection = document.getElementById('next-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Hide scroll button after scroll
    window.addEventListener('scroll', () => {
      const scrollBtn = document.getElementById('scroll-indicator');
      if (window.scrollY > 50) {
        scrollBtn.classList.add('hide');
      } else {
        scrollBtn.classList.remove('hide');
      }
    });

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // scroll to top when clicked
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

  const filterBtns = document.querySelectorAll(".filter-items-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      galleryItems.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const closeBtn = document.querySelector('.close');

  let currentIndex = 0;
  let scale = 1;
  let translateX = 0, translateY = 0;
  let baseW = 0, baseH = 0;
  let isPanning = false;
  let panStartX = 0, panStartY = 0;
  let startTranslateX = 0, startTranslateY = 0;

  // Open image
  galleryImages.forEach((img, i) => {
    img.addEventListener('click', () => {
      currentIndex = i;
      openLightbox(img.src);
    });
  });

  function openLightbox(src) {
    lightbox.style.display = 'block';
    lightboxImg.style.transition = 'transform 0.3s ease';
    lightboxImg.src = src;
    lightboxImg.onload = () => {
      baseW = lightboxImg.clientWidth;
      baseH = lightboxImg.clientHeight;
      resetTransform();
    };
  }

  function resetTransform() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
  }

  function updateTransform() {
    lightboxImg.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${scale})`;
  }

  function clampTranslate() {
    const containerW = lightbox.clientWidth;
    const containerH = lightbox.clientHeight;
    const scaledW = baseW * scale;
    const scaledH = baseH * scale;
    const maxX = Math.max(0, (scaledW - containerW) / 2);
    const maxY = Math.max(0, (scaledH - containerH) / 2);

    translateX = Math.min(maxX, Math.max(-maxX, translateX));
    translateY = Math.min(maxY, Math.max(-maxY, translateY));
  }

  // Zoom on double click
  lightboxImg.addEventListener('dblclick', (e) => {
    if (scale === 1) {
      const rect = lightboxImg.getBoundingClientRect();
      const clickOffsetX = e.clientX - rect.left - rect.width / 2;
      const clickOffsetY = e.clientY - rect.top - rect.height / 2;

      scale = 2;
      translateX = -Math.round(clickOffsetX * (scale - 1));
      translateY = -Math.round(clickOffsetY * (scale - 1));
      clampTranslate();
    } else {
      resetTransform();
    }
    updateTransform();
  });

  // Drag / pan
  lightboxImg.addEventListener('pointerdown', (e) => {
    if (scale <= 1) return;
    isPanning = true;
    panStartX = e.clientX;
    panStartY = e.clientY;
    startTranslateX = translateX;
    startTranslateY = translateY;
    lightboxImg.setPointerCapture(e.pointerId);
    lightboxImg.style.transition = 'none';
    e.preventDefault();
  });

  window.addEventListener('pointermove', (e) => {
    if (!isPanning) return;
    const dx = e.clientX - panStartX;
    const dy = e.clientY - panStartY;
    translateX = startTranslateX + dx;
    translateY = startTranslateY + dy;
    clampTranslate();
    updateTransform();
  });

  window.addEventListener('pointerup', (e) => {
    if (!isPanning) return;
    isPanning = false;
    try { lightboxImg.releasePointerCapture(e.pointerId); } catch {}
    lightboxImg.style.transition = 'transform 0.3s ease';
  });

  // Slider
  function changeSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = galleryImages.length - 1;
    if (currentIndex >= galleryImages.length) currentIndex = 0;
    openLightbox(galleryImages[currentIndex].src);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));

  // Close
  function closeLightbox(event) {
    if (event.target === lightbox || event.target.classList.contains('close')) {
      lightbox.style.display = 'none';
    }
  }
  lightbox.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display !== 'block') return;
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
    if (e.key === 'Escape') lightbox.style.display = 'none';
  });
});