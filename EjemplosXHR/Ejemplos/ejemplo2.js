document.addEventListener("DOMContentLoaded", () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
    const data = JSON.stringify({ 
        title: 'New Post', 
        body: 'This is a new post', 
        userId: 1 
    });
    xhr.send(data);
});