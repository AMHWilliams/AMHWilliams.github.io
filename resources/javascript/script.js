// Slider on project cards

const projectButtons = document.getElementsByClassName('see-more');

const slideDown = elem => elem.style.height = `4.5rem`;

const slideUp = elem => elem.style.height = '0';

const slider = function(button) {
  let project = button.attributes.getNamedItem('Class').value.split(' ')[1];
  let section = document.getElementsByClassName('project-card-extension '+ project);
  button.onclick = function() {
    if (section[0].height = '0') {
        button.children[0].innerHTML = '';
        button.style.visibility = 'hidden';
        slideDown(section[0]);
    }
    else {
        slideUp(section[0]);
        button.children[0].innerHTML = 'See More ';
        button.style.visibility = 'inline-block';
    }
    };
}

for (let button of projectButtons) {
    slider(button);
}

// Back to top button

let toTopButton = document.getElementById("to-top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 