//Nav Menu
run();

function run() {
  bindNavButtonToNavList();
}

function toggleHide(element) {
  element.classList.toggle('hideNav');
}

function bindNavButtonToNavList() {
  const navButton = document.querySelector('.hamburgerIcon');
  
  navButton.addEventListener('click', function() {
    const navList = document.querySelector('.navList');
    toggleHide(navList);
  });
}
