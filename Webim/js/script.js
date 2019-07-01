var menu = document.querySelector(".navigation-menu__list-and-login");
var menu_open_btn = document.querySelector(".navigation-menu__btn");
var form = document.querySelector(".form__main-tag");
var name_input = document.querySelector(".form__input--name");
var tel_input = document.querySelector(".form__input--tel");
var email_input = document.querySelector(".form__input--email");
var password_input = document.querySelector(".form__input--password");
var site_input = document.querySelector(".form__input--site");
var chbox = document.querySelector(".form__checkbox");
var chbox_visual = document.querySelector(".form__checkbox-visual");

menu.classList.remove("nojs"); 

menu_open_btn.addEventListener("click", function (evt) {
	if (!menu_open_btn.classList.contains("open-menu")) {
		evt.preventDefault();
		menu_open_btn.classList.add("open-menu");
		menu.classList.add("show-menu");
	} else if (menu_open_btn.classList.contains("open-menu")) {
		menu_open_btn.classList.remove("open-menu");
		menu.classList.remove("show-menu");
		menu.classList.add("close-menu");
		setTimeout(function(){
    	menu.classList.remove("close-menu");
	}, 500);
	}
}); 

form.addEventListener("submit", function (evt) {
  if (!name.value || !tel.value || !email.value ||
   !password.value || !site.value || !chbox.checked) {
    evt.preventDefault();

    if (!name_input.value) {
    	name_input.classList.add("wrong");
		name_input.addEventListener("click", function (evt) {
			name_input.classList.remove("wrong"); 
		}
		)}

    if (!email_input.value) {
    	email_input.classList.add("wrong");
    	email_input.addEventListener("click", function (evt) {
			email_input.classList.remove("wrong"); 
		}
		)    	
    }

    if (!tel_input.value) {
		tel_input.classList.add("wrong");
    	tel_input.addEventListener("click", function (evt) {
			tel_input.classList.remove("wrong"); 
		}
		)
    }

    if (!password_input.value) {
		password_input.classList.add("wrong");
    	password_input.addEventListener("click", function (evt) {
			password_input.classList.remove("wrong"); 
		}
		)
    }

    if (!site_input.value) {
		site_input.classList.add("wrong");
    	site_input.addEventListener("click", function (evt) {
			site_input.classList.remove("wrong"); 
		}
		)
    }

        if (!chbox.checked) {
		chbox_visual.classList.add("wrong");
    	chbox.addEventListener("click", function (evt) {
			chbox_visual.classList.remove("wrong"); 
		}
		)
    }
	}
});

name_input.onblur = function() {
	if (name_input.value) {
 		name_input.classList.add("active");
 		 } else {
 		 	name_input.classList.remove("active");
 		 }
} 

tel_input.onblur = function() {
	if (tel_input.value) {
 		tel_input.classList.add("active");
 		 } else {
 		 	tel_input.classList.remove("active");
 		 }
} 

email_input.onblur = function() {
	if (email_input.value) {
 		email_input.classList.add("active");
 		 } else {
 		 	email_input.classList.remove("active");
 		 }
} 

password_input.onblur = function() {
	if (password_input.value) {
 		password_input.classList.add("active");
 		 } else {
 		 	password_input.classList.remove("active");
 		 }
} 

site_input.onblur = function() {
	if (site_input.value) {
 		site_input.classList.add("active");
 		 } else {
 		 	site_input.classList.remove("active");
 		 }
} 
