function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const downloadLink = document.getElementById('downloadLink');
const QR = document.getElementById('scanButton');
const swalCustomButton = Swal.mixin({
  customClass: {
    cancelButton: 'custom-swal-cancel',
    confirmButton: 'custom-swal-confirm'
  },
})
const swalQR = Swal.mixin({
  customClass: {
    cancelButton: 'custom-swal-cancel',
  },
})
downloadLink.addEventListener('click', function(event) {
    event.preventDefault();
    swalCustomButton.fire({
        html: '<h3 id="h3">Confirm Download</h3><br><i class="bx bx-question-mark custom-swal-icon"></i><br><br><p id="p">Are you sure you want to download?</p>',
        icon: null,
        showCancelButton: true,
        confirmButtonText: 'Download',
        cancelButtonText: 'Cancel',
        customClass: {
          popup: 'custom-swal-popup',
          confirmButton: 'custom-swal-confirm',
          cancelButton: 'custom-swal-cancel',
          icon: 'custom-swal-icon'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const a = document.createElement('a');
            a.href = "/img/CV (San Yu Aung).pdf";
            a.download = "CV (San Yu Aung).pdf";
            a.click();
        }
    });
});

QR.addEventListener('click', function(event) {
    event.preventDefault();
    swalQR.fire({
        html: '<div><img src="img/QR.png" alt=""></div>',
        icon: null,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: {
          popup: 'custom-swal-popup',
          cancelButton: 'custom-swal-cancel',
          icon: 'custom-swal-icon'
        }
    });
});

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextword =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextword.style.opacity = "1";
  Array.from(nextword.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

var mixer = mixitup(".portfolio-gallery");

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
    if (entery.isIntersecting) {
      entery.target.classList.add("show-items");
    } else {
      entery.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

window.history.pushState(null, "", window.location.href);
window.addEventListener("popstate", function (event) {
  window.history.pushState(null, "", window.location.href);
});
