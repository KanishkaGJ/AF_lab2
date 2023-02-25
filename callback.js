


// callback function
function fetchData(URL, callback) {
    let xtr = new XMLHttpRequest();
    xtr.open("GET", URL);
    xtr.onload = function () {
        if (xtr.status == 200) {
            callback(null, xtr.responseText);
        } else {
            callback("Error: " + xtr.status);
        }
    }
    xtr.onerror = function () {
        callback("network error", null);
    };
    xtr.send();
}

fetchData("https://jsonplaceholder.typicode.com/posts", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
