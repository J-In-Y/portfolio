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


function setupModal({ modalId, buttonClass }) {
  const modal = document.getElementById(modalId);
  const openBtn = document.querySelector(`.${buttonClass}`);
  const closeBtn = modal.querySelector(".close");

  if (!openBtn || !modal) return; // 안전 체크

  openBtn.addEventListener("click", () => {
    // 모달 열기
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = '';
  });

  // ESC로 닫기
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = "none";
      document.body.style.overflow = '';
    }
  });
}

// 모달 초기화 (모달4는 유튜브 링크만, JS 필요 없음)
setupModal({ modalId: "modal1", buttonClass: "openModal1" });
setupModal({ modalId: "modal2", buttonClass: "openModal2" });
setupModal({ modalId: "modal3", buttonClass: "openModal3" });
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
