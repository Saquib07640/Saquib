const accordionItems = document.querySelectorAll('.accordion-item');
gsap.registerPlugin(ScrollTrigger) 
gsap.registerPlugin(SplitText) 

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  // Set height on load if active
  if (item.classList.contains('active')) {
    content.style.height = content.scrollHeight + 'px';
  }

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Collapse all
    accordionItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-content').style.height = '0';
    });

    // Expand this one if not already open
    if (!isActive) {
      item.classList.add('active');
      content.style.height = content.scrollHeight + 'px';
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


  const text = "SAQUIB";
const container = document.getElementById('text-container');

// Create a span for each character
text.split('').forEach(char => {
  const span = document.createElement('span');
  span.textContent = char;
  container.appendChild(span);
});

// Initialize all spans to be hidden and below their final position
function initializeSpans() {
  const spans = Array.from(container.getElementsByTagName('span'));
  spans.forEach(span => {
    span.style.transform = "translateY(200px)";
    span.style.transition = "transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.1)";
  });
}

initializeSpans();

let index = 0;

function revealLetterByLetter() {
  const spans = container.getElementsByTagName('span');
  if (index < spans.length) {
    const span = spans[index];
    span.style.transform = "translateY(0)";  // Move up to the final position

    index++
    setTimeout(revealLetterByLetter, 40 * index);
  }
}

// Trigger the reveal animation
setTimeout(revealLetterByLetter, 40 * index);  // Delay increases with index



gsap.from('.about_images', {
  scrollTrigger: {
    trigger: '.about_images',   // when ".box_2" comes into view
    opacity:1,
    scrub:true,
    end:"center center",
  },
  opacity: 0,     // animate to opacity 1
  duration: 1,     // optional: animation duration
 
});

let windowDimensions = { width: 0, height: 0 };

const getWindowWidth = () => {
  windowDimensions = { width: window.innerWidth, height: window.innerHeight };
};

window.addEventListener('resize', getWindowWidth);
getWindowWidth(); // initial update

const isMobile = () => windowDimensions.width < 450;

console.log(isMobile()); // true or false


function textAnimation(textId, triggerElement, lessGap = false, paragraph = false, headingGap = '5px') {
  const quotes = document.querySelectorAll(textId);

  quotes.forEach((quote) => {
    const text = quote.textContent;
    quote.innerHTML = ''; // Clear existing content
    
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(100%)';
      span.style.transition = 'transform 0.4s ease';
      if (char === ' ') {
        span.style.marginRight = lessGap ? '5px' : headingGap;
      } else {
        span.style.marginRight = paragraph ? '0px' : '5px'; // Reduced gap for paragraph
      }
      quote.appendChild(span);
    });

    let index = 0;
    const spans = quote.getElementsByTagName('span');

    function revealLetterByLetter() {
      if (index < spans.length) {
        spans[index].style.transform = 'translateY(0)';
        index++;
        setTimeout(revealLetterByLetter, 40);
      }
    }

    // Trigger letter reveal on scroll using GSAP ScrollTrigger
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 80%",
      once: true,
      onEnter: () => {
        revealLetterByLetter();
      }
    });

  });
}

textAnimation("#animation", ".about_content", false, false, isMobile ? '90px' : '50px');
textAnimation("#name-animation", ".about_content", true, true);
textAnimation("#work-animation", ".Work_content",false, false,   isMobile ? '260px' : '50px');
textAnimation("#area-animation", "#area-animation", false, false, isMobile ? '20px' : '50px');

