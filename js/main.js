(() => {

	var icon = document.querySelector("#butterfly1");
	console.log(icon);

	function logId() {
		console.log(this.id);
	}


	icon.addEventListener("click", logId);

})();

	