const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	// console.log('klik');
	menu.classList.toggle('open');
});
