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
