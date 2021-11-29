document.querySelector('.inform__burger').addEventListener('click', () => {
	document.querySelectorAll('.inform__burger, .burger__nav').forEach(item => {
		item.classList.toggle('active');
	});
	document.querySelector('body').classList.toggle('lock');
})