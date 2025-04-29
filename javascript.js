const accordionItems = document.querySelectorAll('.accordion-item');

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


gsap.registerPlugin(ScrollTrigger) 

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



const quotes = document.querySelectorAll("#animation");

function setupSplits() {
  quotes.forEach((quote) => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = SplitText.create(quote, {
      type: "words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "center center",
        markers: { startColor: "#dfdcff", endColor: "transparent" }
      },
      duration: 0.6,
      ease: "circ.out",
      y: 80,
      stagger: 0.02
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();
