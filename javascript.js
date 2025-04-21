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