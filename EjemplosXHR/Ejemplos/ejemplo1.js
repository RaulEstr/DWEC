const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};
xhr.send();