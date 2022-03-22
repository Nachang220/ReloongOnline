window.onload = function () {
	//<HEADER>=====================================================================
	const headerElement = document.querySelector(".header");
	const callback = function (entries) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove("_scroll");
		} else {
			headerElement.classList.add("_scroll");
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
}


//<МЕНЮ БУРГЕР>===================================================================
const iconMenu = document.querySelector(".icon-menu");
if (iconMenu) {
	const menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
}

//<ПОПАП>===================================================================
const popUp = document.querySelectorAll(".popup");

if (popUp) {
	const buttonExit = document.querySelectorAll(".popup__exit");
	const buttonsLog = document.querySelectorAll("button._login");
	const buttonsReg = document.querySelectorAll("button._register");
	popUp.forEach((item) => {
		switch (item.dataset.type) {
			case "login":
				buttonsLog.forEach((button) => {
					button.addEventListener("click", () => {
						item.classList.toggle("_active");
					})
				})
				break;
			case "register":
				buttonsReg.forEach((button) => {
					button.addEventListener("click", () => {
						item.classList.toggle("_active");
					})
				})
				break;
		}
	})

	buttonExit.forEach((item) => {
		item.addEventListener("click", () => {
			item.closest(".popup").classList.remove("_active");
			item.closest(".popup").querySelector("form").reset();
		})
	})
}

//<ЯЗЫК>===================================================================
const buttonLang = document.querySelector(".header__language");
buttonLang.addEventListener("click", changeHash);

function changeHash() {
	let hash = window.location.hash;
	hash = hash.substr(1);

	switch (hash) {
		case "ru":
			location.href = window.location.pathname + '#en';
			location.reload();
			break;
		case "en":
			location.href = window.location.pathname + '#ru';
			location.reload();
			break;
	}

}

function changeLanguage() {
	let hash = window.location.hash;
	if (!hash) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	hash = hash.substr(1);
	buttonLang.innerHTML = hash;
	for (let key in langArr) {
		let elem = document.querySelectorAll(`[data-lang = '${key}']`);
		if (elem) {
			elem.forEach((item) => {
				item.innerHTML = langArr[key][hash];
			})
		}

	}
}

changeLanguage();