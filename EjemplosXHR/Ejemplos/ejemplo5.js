document.addEventListener("DOMContentLoaded", () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4)
        {
            if (xhr.status === 200) {
                console.log("Hay "+JSON.parse(xhr.responseText).length+" usuarios.");
            }
        }
    };
    
    xhr.send();

});