const openBtn = document.querySelector('.openbtn');
openBtn.addEventListener('click', function() {
  document.getElementById("myNav").style.width = "100%";
});

const closeBtn = document.querySelector('.closebtn');
closeBtn.addEventListener('click', function() {
  document.getElementById("myNav").style.width = "0%";
});


document.getElementById("dark-mode").addEventListener("click", function() {
    var dark = document.body;
    const darkmode = document.getElementById('dark-mode');
    dark.classList.toggle("dark-mode");

    var darkicon = document.getElementById("dark-image");
    if (darkicon.src.match("/images/dark.png")) {
        darkicon.src = "images/light-mode.png";
        darkmode.title = "Light Mode";
    } else {
        darkicon.src = "images/dark.png";
        darkmode.title = "Dark Mode";
    }
});
let mybutton = document.getElementById("b2tBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   if (window.innerWidth <= 320) {
    mybutton.style.display = "block";
   }
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("b2tBtn").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});