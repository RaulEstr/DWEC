document.addEventListener("DOMContentLoaded", () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
    const data = JSON.stringify({
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        phone: '123-456-7890'
    });
    xhr.send(data);
});