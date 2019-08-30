
var getPosts = function() {
    var posts = [
        {
            id: 1,
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'meu primeiro post',
            body:'meu primeiro post bla bla bla'
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'meu segundo post',
            body:'meu segundo post bla bla bla'
        },
    ];

    return posts;
}
    
module.exports = {
    getPosts: getPosts
}