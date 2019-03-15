
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

  //Image Carosel *************************************** 
  // Select the carousel you'll need to manipulate and the buttons you'll add events to
  const carousel = document.querySelector("[data-target='carousel']");
  const card = carousel.querySelector("[data-target='card']");
  const leftButton = document.querySelector("[data-action='slideLeft']");
  const rightButton = document.querySelector("[data-action='slideRight']");
  
  // Prepare to limit the direction in which the carousel can slide, 
  // and to control how much the carousel advances by each time.
  // In order to slide the carousel so that only three cards are perfectly visible each time,
  // you need to know the carousel width, and the margin placed on a given card in the carousel
  const carouselWidth = carousel.offsetWidth;
  const cardStyle = card.currentStyle || window.getComputedStyle(card)
  const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
  
  // Count the number of total cards you have
  const cardCount = carousel.querySelectorAll("[data-target='card']").length;
  
  // Define an offset property to dynamically update by clicking the button controls
  // as well as a maxX property so the carousel knows when to stop at the upper limit
  let offset = 0;
  //const maxX = 3;
  const maxX = -((cardCount / 3) * carouselWidth + 
                 (cardMarginRight * (cardCount / 3)) - 
                 carouselWidth - cardMarginRight);
  
  
  // Add the click events
  leftButton.addEventListener("click", function() {
    // if (offset !== 0) {
      offset += carouselWidth + cardMarginRight;
      carousel.style.transform = `translateX(${offset}px)`;
      // }
  })
    
  rightButton.addEventListener("click", function() {
    // if (offset !== maxX) {
      offset -= carouselWidth + cardMarginRight;
      carousel.style.transform = `translateX(${offset}px)`;
     // }
  })
  


  //Toggle Hiding Project Description ********************************
//   function toggleProjectOne(element) {
 const toggleHideProjectOne = document.querySelector('.hideButton1')

  toggleHideProjectOne.addEventListener('click', function toggle() {
    const projectOneContent = document.querySelector('.hideProjectOne')

    projectOneContent.classList.toggle('hide')
})
// }


const toggleHideProjectTwo = document.querySelector('.hideButton2')

toggleHideProjectTwo.addEventListener('click', function toggle() {
  const projectTwoContent = document.querySelector('.hideProjectTwo')

  projectTwoContent.classList.toggle('hide')
})
  const toggleHideProjectThree = document.querySelector('.hideButton3')

  toggleHideProjectThree.addEventListener('click', function toggle() {
    const projectThreeContent = document.querySelector('.hideProjectThree')

    projectThreeContent.classList.toggle('hide')
})
const toggleHideProjectFour = document.querySelector('.hideButton4')

toggleHideProjectFour.addEventListener('click', function toggle() {
  const projectFourContent = document.querySelector('.hideProjectFour')

  projectFourContent.classList.toggle('hide')
})




//exports for Testing
// module.exports = {
//     toggleProjectOne: toggleProjectOne
// }