const api = (method, url, payload) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          code: xhr.status,
          message: xhr.responseText,
        });
      }
    };
    xhr.send(JSON.stringify(payload));
    xhr.onerror = function () {
      reject({
        code: xhr.status,
        message: xhr.responseText,
      });
    };
  });
};

module.exports = api;
