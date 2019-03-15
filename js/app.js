
//hamburger menu ----needs work



//Bio Modal
var modal = document.getElementById('bioModal');
var btn = document.getElementById("bioButton");
var span = document.getElementsByClassName("close")[0];

//button click
btn.onclick = function() {
  modal.style.display = "block";
}

// button click close
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






//Hambuger Nav***************
// run();

// function run() {
//   bindNavButtonToNavList();
// }

// function toggleHide(element) {
//   element.classList.toggle('hide');
// }

// function bindNavButtonToNavList() {
//   const navButton = document.querySelector('.nav__button');
  
//   navButton.addEventListener('click', function() {
//     const navList = document.querySelector('.navList');
//     toggleHide(navList);
//   });
// }


run();

function run() {
  bindNavButtonToNavList();
}

function toggleHide(element) {
  element.classList.toggle('hide');
}

function bindNavButtonToNavList() {
  const navButton = document.querySelector('.hamburgerIcon');
  
  navButton.addEventListener('click', function() {
    const navList = document.querySelector('.navList');
    toggleHide(navList);
  });
}


