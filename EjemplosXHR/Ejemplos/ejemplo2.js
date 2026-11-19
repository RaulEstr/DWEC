const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhr.onload = ()=> {
    if (xhr.status === 201) {
        console.log(JSON.parse(xhr.responseText));
    }
};
const data = JSON.stringify({ 
    "userId": 1,
    "title": 'New Post', 
    "body": 'This is a new post'     
});
xhr.send(data);
