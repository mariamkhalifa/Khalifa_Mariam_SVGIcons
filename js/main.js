(() => {

	var AllIcons = document.querySelectorAll(".icon");

	function logId() {
		console.log(this.id);
	}


	AllIcons.forEach(currenticon => currenticon.addEventListener("click",logId));

})();

	