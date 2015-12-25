function one() {
	var g = document.querySelectorAll(".one").length;
	for (i = 0; i < g; i++) {
		var current = document.querySelectorAll(".one")[i].innerHTML;
		document.querySelectorAll(".one")[i].innerHTML = "<div class='-one'>" + current + "</div>";
	}
}

if (document.readyState != "loading"){
	one();
} else if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", one);
} else {
	document.attachEvent("onreadystatechange", function() {
		if (document.readyState != "loading")
			one();
	});
}