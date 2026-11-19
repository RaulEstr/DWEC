document.addEventListener("DOMContentLoaded", () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts?userId=1');
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4)
        {
            if (xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        }
    };
    
    xhr.send();

});