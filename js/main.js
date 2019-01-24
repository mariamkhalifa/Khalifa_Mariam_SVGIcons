(() => {

	var butterfly = document.querySelector('#butterfly1');

	function logId() {
		console.log(this.id);
	}

	butterfly.addEventListener('click', logId);

})();

	