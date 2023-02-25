function fetchData(url){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function(){
            if(xhr.status == 200){
                resolve(xhr.responseText);
            } else {
                reject("Error: " + xhr.status);
            }
        };
        xhr.onerror = function(){
            reject("Network error");
        };
        xhr.send();
    });

}

async function fetchDataAsynce(url){
    try{
        let data = await fetchData(url);
        console.log(data);
    } catch(err){
    console.log(err);
}
}

fetchDataAsynce("https://jsonplaceholder.typicode.com/posts");

