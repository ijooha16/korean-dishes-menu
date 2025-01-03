// home/민경

//nav 변수
const homeNavToHome = document.querySelector('#home_nav_main > li:first-child');
const homeNavToMember = document.querySelector(
  '#home_nav_main > li:last-child'
);
const homeSubNavLis = document.querySelectorAll('.member_nav');

//submenu 로직
//mouseover = submenu 등장
const homeSubNav = document.querySelector('#home_nav_sub');
homeNavToMember.addEventListener('mouseover', () => {
  homeSubNav.style.maxHeight = '150px';
});
//mouseout = submenu 사라짐
homeNavToMember.addEventListener('mouseout', () => {
  homeSubNav.style.maxHeight = '0';
});

//img slide 로직
const imgSlide = document.querySelector('#header_bg_wrap');
const slides = document.querySelectorAll('.header_bg_member').length;

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides;
  imgSlide.style.marginLeft = -(currentIndex * 100) + 'vw';
  imgSlide.style.transition = 'margin 1s';
}, 3000);

//member best card 애니메이션 로직
const memberBestCards = document.querySelectorAll('.member_best_card');
const memberForwardBtn = document.getElementById('forward_btn');
const memberBackwardBtn = document.getElementById('backward_btn');

//forward 로직
memberForwardBtn.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) {
    if (memberBestCards[i].classList.contains('member_best_card_active1')) {
      memberBestCards[i].classList.replace(
        'member_best_card_active1',
        'member_best_card_active2'
      );
    } else if (
      memberBestCards[i].classList.contains('member_best_card_active2')
    ) {
      memberBestCards[i].classList.replace(
        'member_best_card_active2',
        'member_best_card_active3'
      );
    } else if (
      memberBestCards[i].classList.contains('member_best_card_active3')
    ) {
      memberBestCards[i].classList.replace(
        'member_best_card_active3',
        'member_best_card_active1'
      );
    }
  }
});
//backward 로직
memberBackwardBtn.addEventListener('click', () => {
  for (let i = 0; i < 3; i++) {
    if (memberBestCards[i].classList.contains('member_best_card_active1')) {
      memberBestCards[i].classList.replace(
        'member_best_card_active1',
        'member_best_card_active3'
      );
    } else if (
      memberBestCards[i].classList.contains('member_best_card_active2')
    ) {
      memberBestCards[i].classList.replace(
        'member_best_card_active2',
        'member_best_card_active1'
      );
    } else if (
      memberBestCards[i].classList.contains('member_best_card_active3')
    ) {
      memberBestCards[i].classList.replace(
        'member_best_card_active3',
        'member_best_card_active2'
      );
    }
  }
});
