const urlAPI = "https://gateway.marvel.com/v1/public";
const privateKey = "db9a04ee0a03b40d32e6bf93a0eac9700abbeea9";
const publicKey = "52ae90d675ed08ef64a37f2ede00b8e2";

function getHash(timeStamp) {
  return md5(timeStamp + privateKey + publicKey);
}

function get(endpoint, params = "") {
  const timeStamp = Date.now().toString();
  const url = `${urlAPI}${endpoint}?apikey=${publicKey}${params}`;

  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (xhttp.status >= 200 && xhttp.status < 300) {
        var data = JSON.parse(xhttp.response);
        resolve(data);
      } else {
        reject(xhttp.statusText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}


