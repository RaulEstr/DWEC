const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts?userId=1');
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};
xhr.send();