function startTimeA() {
	var jsonData = getJSON("http://172.24.1.3/get_data");
	var objData = JSON.parse(jsonData);
	console.log(jsonData);

	var elem = document.getElementById("skill");
	elem.innerHTML = objData["volume"] + " ml";

	if (objData.status == 0) {
		statusnya = "StandBy";
		document.getElementById("hasil").style.backgroundColor = "green";
	} else if (objData.status == 1) {
		statusnya = "Terima Request";
		document.getElementById("hasil").style.backgroundColor = "yellow";
	} else if (objData.status == 2) {
		statusnya = "Proses Perah";
		document.getElementById("hasil").style.backgroundColor = "red";
	} else if (objData.status == 3) {
		statusnya = "Kirim Data";
		document.getElementById("hasil").style.backgroundColor = "blue";
	} else if (objData.status == 4) {
		statusnya = "Valve Terbuka";
		document.getElementById("hasil").style.backgroundColor = "purple";
	}

	document.getElementById("runningtext1").innerHTML = objData["iot_name"];
	document.getElementById("hasil").innerHTML = statusnya;
	document.getElementById("Kambing").innerHTML = objData["jenis"];

	timerA = setTimeout(function () {
		startTimeA();
	}, 500);
}
startTimeA();

function startTimeB() {
	var jsonData = getJSON("http://172.24.1.4/get_data");
	var objData = JSON.parse(jsonData);
	console.log(jsonData);

	var elem = document.getElementById("skillB");
	elem.innerHTML = objData["volume"] + " ml";

	if (objData.status == 0) {
		statusnya = "StandBy";
		document.getElementById("hasilB").style.backgroundColor = "green";
	} else if (objData.status == 1) {
		statusnya = "Terima Request";
		document.getElementById("hasilB").style.backgroundColor = "yellow";
	} else if (objData.status == 2) {
		statusnya = "Proses Perah";
		document.getElementById("hasilB").style.backgroundColor = "red";
	} else if (objData.status == 3) {
		statusnya = "Kirim Data";
		document.getElementById("hasilB").style.backgroundColor = "blue";
	} else if (objData.status == 4) {
		statusnya = "Valve Terbuka";
		document.getElementById("hasilB").style.backgroundColor = "purple";
	}

	document.getElementById("runningtextB").innerHTML = objData["iot_name"];
	document.getElementById("hasilB").innerHTML = statusnya;
	document.getElementById("KambingB").innerHTML = objData["jenis"];

	timerA = setTimeout(function () {
		startTimeB();
	}, 500);
}
startTimeB();


