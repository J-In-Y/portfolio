$("#header ul li a").click(function () {
  $("#header ul li a").removeClass("active");
  $(this).addClass("active");
});

const b_left = new Swiper(".b_left", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 500,
});

const b_righ = new Swiper(".b_right", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
});


const knotted_list = new Swiper(".knotted_list", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
});

const isam_list = new Swiper(".isam_list", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
});

const team_list = new Swiper(".team_list", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
});

const app_list = new Swiper(".app_list", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
});

const bxbi_list = new Swiper(".bxbi_list", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
});

// // modal
// // modal_노티드
// const modal1 = document.getElementById("modal1");
// const open1 = document.querySelector(".openModal1");
// const close1 = modal1.querySelector(".close");

// open1.addEventListener("click", () => {
//   modal1.style.display = "flex";
//   document.body.style.overflow = 'hidden';
// });

// close1.addEventListener("click", () => {
//   modal1.style.display = "none";
//   document.body.style.overflow = '';
// });
// // modal_이샘
// const modal2 = document.getElementById("modal2");
// const open2 = document.querySelector(".openModal2");
// const close2 = modal2.querySelector(".close");

// open2.addEventListener("click", () => {
//   modal2.style.display = "flex";
//   document.body.style.overflow = 'hidden';
// });
// close2.addEventListener("click", () => {
//   modal2.style.display = "none";
//   document.body.style.overflow = '';
// });
// // modal_투어지
// const modal3 = document.getElementById("modal3");
// const open3 = document.querySelector(".openModal3");
// const close3 = modal3.querySelector(".close");

// open3.addEventListener("click", () => {
//   modal3.style.display = "flex";
//   document.body.style.overflow = 'hidden';
// });
// close3.addEventListener("click", () => {
//   modal3.style.display = "none";
//   document.body.style.overflow = '';
// });

// //tourzy_video
// // modal_컨셉4 비디오
// const modal4 = document.getElementById("modal4");
// const open4 = document.querySelector(".openModal4");
// const close4 = modal4.querySelector(".close");
// const video4 = modal4.querySelector("video");

// open4.addEventListener("click", () => {
//   modal4.style.display = "flex";
//   document.body.style.overflow = 'hidden';
//   video4.currentTime = 0;  // 모달 열 때 영상 처음부터
//   video4.play();            // 자동 재생
// });

// close4.addEventListener("click", () => {
//   modal4.style.display = "none";
//   document.body.style.overflow = '';
//   video4.pause();           // 모달 닫을 때 영상 일시정지
//   video4.currentTime = 0;   // 처음으로 되돌림
// });

// // ESC로 닫기
// window.addEventListener('keydown', e => {
//   if (e.key === 'Escape' && modal4.style.display === 'flex') {
//     modal4.style.display = "none";
//     document.body.style.overflow = '';
//     video4.pause();
//     video4.currentTime = 0;
//   }
// });


// // modal_스토리브
// const modal5 = document.getElementById("modal5");
// const open5 = document.querySelector(".openModal5");
// const close5 = modal5.querySelector(".close");

// open5.addEventListener("click", () => {
//   modal5.style.display = "flex";
//   document.body.style.overflow = 'hidden';
// });
// close5.addEventListener("click", () => {
//   modal5.style.display = "none";
//   document.body.style.overflow = '';
// });

// // modal_담온
// const modal6 = document.getElementById("modal6");
// const open6 = document.querySelector(".openModal6");
// const close6 = modal6.querySelector(".close");

// open6.addEventListener("click", () => {
//   modal6.style.display = "flex";
//   document.body.style.overflow = 'hidden';
// });
// close6.addEventListener("click", () => {
//   modal6.style.display = "none";
//   document.body.style.overflow = '';
// });


function setupModal({ modalId, buttonClass, video = false }) {
  const modal = document.getElementById(modalId);
  const openBtn = document.querySelector(`.${buttonClass}`);
  const closeBtn = modal.querySelector(".close");
  let videoEl;

  if (video) videoEl = modal.querySelector("video");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
    if (videoEl) {
      videoEl.currentTime = 0;
      videoEl.play();
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = '';
    if (videoEl) {
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  });

  // ESC로 닫기
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = "none";
      document.body.style.overflow = '';
      if (videoEl) {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    }
  });
}

setupModal({ modalId: "modal1", buttonClass: "openModal1" });
setupModal({ modalId: "modal2", buttonClass: "openModal2" });
setupModal({ modalId: "modal3", buttonClass: "openModal3" });
setupModal({ modalId: "modal4", buttonClass: "openModal4", video: true }); // 비디오 모달
setupModal({ modalId: "modal5", buttonClass: "openModal5" });
setupModal({ modalId: "modal6", buttonClass: "openModal6" });


// footer bounce
const spans = document.querySelectorAll('#footer h1 span');
spans.forEach((span, i) => {
  span.style.animationDelay = `${i * 0.1}s`;
});

//gotop
$('.gotop').hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 800) {
    $('.gotop').fadeIn(200);
  } else {
    $('.gotop').fadeOut(200);
  }
});

$(".gotop").click(function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
