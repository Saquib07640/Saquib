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



const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Move the cursor with mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
  

// Elements to trigger cursor scale
const hoverTargets = document.querySelectorAll("h1, h2, h3, h4, h5, h6, a, p");

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hovered");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hovered");
  });
});



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

  skillsContent.innerHTML = skills.map(skill => `
    <div class="skills_content_heading">
      <div class="skills_content_heading_1">
        <h1>${skill.title}</h1>
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
  

 