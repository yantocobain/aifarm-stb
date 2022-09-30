var serverBase = "";
var server_url = "jws/";

function hideloading() {
  document.getElementById("loading").style.display = "none";
}

function showloading() {
  document.getElementById("loading").style.display = "inline";
}

function postAjax(url, data, success) {
  var params =
    typeof data == "string"
      ? data
      : Object.keys(data)
          .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          })
          .join("&");
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("POST", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3) {
      if (xhr.status == 200) {
        success(xhr.responseText);
      } else {
        alertX(
          "Tidak dapat membuka koneksi, Pastikan WIFI sudah terkoneksi dengan jam, silahkan coba kembali"
        );
      }
    }
  };
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(params);
  return xhr;
}

function balik() {
  document.location = "index.html";
}

function balikPerangkat() {
  document.location = "perangkat.html";
}

function alertX(msg) {
  alert(msg);
}

function getData(data) {
  data = data.replace("\r", "");
  data = data.replace("\n", "");
  if (data != "") {
    data = data.substr(2);
  }
  return data;
}

function getJSON(url) {
  var resp;
  var xmlHttp;
  resp = "";
  xmlHttp = new XMLHttpRequest();
  if (xmlHttp != null) {
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    resp = xmlHttp.responseText;
  }
  return resp;
}

function cbFunction(myCheck, id) {
  var checkBox = document.getElementById(myCheck);
  var data = document.getElementById(id);
  if (checkBox.checked == true) {
    data.value = 1;
  } else {
    data.value = 0;
  }
}

function switchFunction() {
  var checkBox = document.getElementById(myCheck);
  var data = document.getElementById(id);
  if (checkBox.checked == true) {
    data.value = 1;
  } else {
    data.value = 0;
  }
}

function postJSON(url, data, success) {
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("POST", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3) {
      if (xhr.status == 200) {
        success(xhr.responseText);
      } else {
        alertX(
          "Tidak dapat membuka koneksi, Pastikan WIFI sudah terkoneksi dengan jam, silahkan coba kembali"
        );
      }
    }
  };
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
  return xhr;
}
