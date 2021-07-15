
var words = ["My portfolio !", "My world !", "My hobbies !", "My passions !"];

// Select html element to insert text into
var text = document.getElementById("text");

var i = 0;
var next = 0;
var typingSpeed = 0;

// Function responsible for typing the text
function typeText() {
  // Loop through each phrase in array and type it out a letter at a time
  if (i < words[next].length) {
    text.innerHTML += words[next].charAt(i);
    i++;
    typingSpeed = 200 - Math.random()*100
    // console.log(typingSpeed);
    setTimeout(typeText, typingSpeed);
  } else {
    // Once phrase has been printed, wait 2 seconds then erase text
      setTimeout(eraseText, 2000);
  }
}
// Function to erase text letter by letter
function eraseText() {
  // Go backwards and remove a letter from the text html element
  if (i > 0) {
    text.innerHTML = text.innerHTML.slice(0, -1);
    i--;
    setTimeout(eraseText, 75);
  } else {
    // Once phrase has been erased, iterate to the next one
    next++;
    // If all phrases have been written out, restart counter
    next === words.length ? next = 0 : null;
    setTimeout(typeText, 2000);
  }
}

typeText();



// let buttonHamburger = document.querySelector('#btn');
// let menu = document.querySelector('#menu');
// let span1 = document.querySelector('#span1');
// let span2 = document.querySelector('#span2');
// let span3 = document.querySelector('#span3');

// buttonHamburger.addEventListener('click', () => {
//     if (menu.style.right == "-70%") {
//         menu.style.right = "0";
//         span1.classList.add('span1');
//         span2.classList.add('span2');
//         span3.classList.add('span3');
//     } else {
//         menu.style.right = "-70%";
//         span1.classList.remove('span1');
//         span2.classList.remove('span2');
//         span3.classList.remove('span3');
//     }
// });



$(document).ready(function(){
  $('#nav-icon3').click(function(){
		$(this).toggleClass('open');
    $('.menu').toggleClass("openMenu");
	});
});

let navIcon = document.querySelector('#nav-icon3');
let linksMenu = document.querySelectorAll('.navPcLink2');  
  linksMenu.forEach(linkMenu => {
    linkMenu.addEventListener('click', () => {
      menu.classList.remove('openMenu');
      navIcon.classList.remove('open');
    });
  });