function fetchData(url){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function(){
        if(xhr.status == 200){
            resolve(xhr.responseText);
        } else {
            reject("Error: " + xhr.status);
        }
    


xhr.onerror = function(){
    reject("Network error");
};
xhr.send();
}
}; 

fetchData("https://jsonplaceholder.typicode.com/posts")
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
});