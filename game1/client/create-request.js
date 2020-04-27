function createRequest(method, url, data, callback=console.log){
    var xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onload = function() {
        var responseText = xhr.responseText;
        // console.log(responseText);
    callback(responseText);      
    };
    xhr.send(data);
}
