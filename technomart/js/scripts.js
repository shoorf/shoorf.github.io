var buyItiem = document.querySelectorAll(".buy");
var showCart = document.querySelector(".cart");
var closeCart = document.querySelector(".cross-cart");

for (var i = 0; i < buyItiem.length; i++) 
	buyItiem[i].addEventListener("click", function (event) {
	event.preventDefault();
 	showCart.classList.add("cart-show");
});

	closeCart.addEventListener("click", function (event) {
	event.preventDefault();
	showCart.classList.remove("cart-show");
});
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (showCart.classList.contains("cart-show")) {
				showCart.classList.remove("cart-show");
			}
		}
	});


var mapButton = document.querySelector(".map");
var map = document.querySelector(".modal-content-map");
var closeMap = document.querySelector(".cross-map");

mapButton.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.add("map-show");
});

closeMap.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.remove("map-show");
});

window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (map.classList.contains("map-show")) {
				map.classList.remove("map-show");
			}
		}
	});



var feedback = document.querySelector(".feedback-btn");
var showForm = document.querySelector(".feedback-form");
var closeForm = document.querySelector(".cross-feedback");

feedback.addEventListener("click", function(event) {
	event.preventDefault();
	showForm.classList.add("show-feedback");
});

closeForm.addEventListener("click", function(event) {
	event.preventDefault();
	showForm.classList.remove("show-feedback");
});

window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (showForm.classList.contains("show-feedback")) {
				showForm.classList.remove("show-feedback");
			}
		}
	});