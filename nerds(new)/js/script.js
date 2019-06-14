var popup_open = document.querySelector(".map-and-contact .btn");
var popup = document.querySelector(".modal");
var popup_close = document.querySelector(".modal-btn-exit");
var form = document.querySelector(".modal .modal-form");
var name_input = document.querySelector(".name");

popup_open.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show"); 
}); 

popup_close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.add("modal-close-animation");
popup.classList.remove("modal-wrong-animation");
setTimeout(function(){
    popup.classList.remove("modal-close-animation");
}, 500);
}); 

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			popup.classList.add("modal-close-animation");
			popup.classList.remove("modal-wrong-animation");
			setTimeout(function(){
    			popup.classList.remove("modal-close-animation");
			}, 500);
		}
}
}); 


form.addEventListener("submit", function (evt) {
  if (!document.querySelector(".name").value ||
   !document.querySelector(".form-textarea").value ||
    !document.querySelector(".email").value) {
    evt.preventDefault();

    if (!document.querySelector(".name").value) {
    	console.log("имя нета");
    	document.querySelector(".name").classList.add("wrong");
			name_input.addEventListener("click", function (evt) {
			name_input.classList.remove("wrong"); 
		}
		)}

    if (!document.querySelector(".email").value) {
    	console.log("мыла нета");
    	document.querySelector(".email").classList.add("wrong");
    	document.querySelector(".email").addEventListener("click", function (evt) {
			document.querySelector(".email").classList.remove("wrong"); 
		}
		)    	
    }

    if (!document.querySelector(".form-textarea").value) {
    	console.log("сообщения нета");
    	document.querySelector(".form-textarea").classList.add("wrong");
    	document.querySelector(".form-textarea").addEventListener("click", function (evt) {
			document.querySelector(".form-textarea").classList.remove("wrong"); 
		}
		)
    }
			popup.classList.remove("modal-wrong-animation");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-wrong-animation");
	}
});

document.querySelector(".name").onblur = function() {
	if (document.querySelector(".name").value) {
 		document.querySelector(".name").classList.add("active");
 		 } else {
 		 	document.querySelector(".name").classList.remove("active");
 		 }
} 

document.querySelector(".email").onblur = function() {
	if (document.querySelector(".email").value) {
 		document.querySelector(".email").classList.add("active");
 		 } else {
 		 	document.querySelector(".email").classList.remove("active");
 		 }
} 

document.querySelector(".form-textarea").onblur = function() {
	if (document.querySelector(".form-textarea").value) {
 		document.querySelector(".form-textarea").classList.add("active");
 		 } else {
 		 	document.querySelector(".form-textarea").classList.remove("active");
 		 }
} 