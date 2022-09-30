function startTimeA() {
	var jsonData = getJSON("http://172.24.1.3/get_data");
	var objData = JSON.parse(jsonData);
	console.log(jsonData);

	var elem = document.getElementById("skill");
	elem.innerHTML = objData["volume"] + " ml";

	if (objData.status == 0) {
		prosesnya = "ON";
		document.getElementById("indikator").style.backgroundColor = "green";
	} else if (objData.status == 1) {
		prosesnya = "ON";
		document.getElementById("indikator").style.backgroundColor = "yellow";
	} else if (objData.status == 2) {
		prosesnya = "ON";
		document.getElementById("indikator").style.backgroundColor = "red";
	} else if (objData.status == 3) {
		prosesnya = "ON";
		document.getElementById("indikator").style.backgroundColor = "blue";
	} else if (objData.status == 4) {
		prosesnya = "Clean Up";
		document.getElementById("indikator").style.backgroundColor = "grey";
		document.getElementById("latar").style.backgroundColor = "green";
	}

	document.getElementById("proses").innerHTML = prosesnya;

	timerA = setTimeout(function () {
		startTimeA();
	}, 500);
}
startTimeA();



