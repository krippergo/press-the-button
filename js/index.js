const icon = document.querySelector(`#icon`);
const title = document.querySelector(`#title`);
const header = document.querySelector(`#header`);
const button = document.querySelector(`#button`);
const main = document.querySelector(`#main`);
const footer = document.querySelector(`#footer`);
const img = document.querySelector(`#img`);

button.addEventListener(`click`, function (evt) {
	let x = evt.clientX - 130;
	let y = evt.clientY - 130;

	img.style.top = y + `px`;
	img.style.left = x + `px`;
	animation();
});

function loading() {
	icon.href = `favicon.ico`;
	title.innerHTML = `С 14 Февраля!`;
	header.classList.remove(`none`);
	main.classList.remove(`none`);
	footer.classList.remove(`none`);
	button.classList.add(`none`);
}

function animation() {
	img.style.filter = `blur(50px)`;
	setTimeout(nextAnimation, 700);
}

function nextAnimation() {
	img.style.filter = `blur(1000px)`;
	setTimeout(loading, 100);
}
