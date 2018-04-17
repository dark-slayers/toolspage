class AjaxUtil {
  static get(url, callSuccess) {
    fetch(url).then(response => response.json()).then((json) => {
      if (json.errorResponse) {
        alert(json.message);
      } else {
        callSuccess(json);
      }
    }).catch(e => console.log("Oops, error", e));;
  }
  static post(url, data, callSuccess) {
    var myRequest = this.createRequest('POST', url, data);
    this.f(myRequest, callSuccess);
  }
  static postAndGetResource(url, data) {
    var myRequest = this.createRequest('POST', url, data);
    fetch(myRequest).then(function(response) {
      if (response.ok) {
        return response.blob();
      }
      throw new Error('Network response was not ok.');
    }).then(function(blob) {
      var url = window.URL.createObjectURL(blob);
      var a = window.document.createElement("a");
      window.document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      var contentDisposition = response.headers.get("Content-Disposition");
      const fileName = contentDisposition.split('\'\'')[1];
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    }).catch(function(error) {
      console.log('下载出现异常：', error.message);
    });
  }
  static put(url, data, callSuccess) {
    var myRequest = this.createRequest('PUT', url, data);
    this.f(myRequest, callSuccess);
  }
  static delete(url, data, callSuccess) {
    var myRequest = this.createRequest('DELETE', url, data);
    this.f(myRequest, callSuccess);
  }
  static f(myRequest, callSuccess) {
    fetch(myRequest).then(response => response.json()).then((json) => {
      if (json.errorResponse) {
        alert(json.message);
      } else {
        callSuccess(json);
      }
    });
  }
  static createRequest(method, url, data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var myInit = {
      method: method,
      headers: myHeaders,
      cache: 'default',
      body: JSON.stringify(data),
      credentials:'same-origin'
    };
    return new Request(url, myInit);
  }
}

export default AjaxUtil;
