let nums = document.querySelectorAll(".num");
let section = document.querySelector(".second");
let started = false;
let btn = document.getElementById("btn");

function counting() {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
}

function startCount(el) {
  let val = el.dataset.val;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == val) {
      clearInterval(count);
    }
  }, 31500 / val);
}

window.onscroll = function () {
  scrolling();
  counting();
};

function scrolling() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.onclick = function () {
  document.documentElement.scrollTop = 0;
};
// Modal
let boxes = document.querySelectorAll(".box");
let modal = document.querySelector(".modal");
let img = document.querySelector("img.main");
let closebtn = document.querySelector(".close");
let lis = document.querySelectorAll("#gallery ul li");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    modal.classList.add("appear");
    img.src = box.querySelector(".box .img-fluid").src;
  });
});

closebtn.onclick = function () {
  modal.classList.remove("appear");
};

//filtering
lis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", management);
});

// Remove Class Active

function removeActive() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function management() {
  boxes.forEach((box) => {
    box.parentElement.style.display = "none";
  });
  document.querySelectorAll(this.dataset.dish).forEach((el) => {
    el.style.display = "block";
  });
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
