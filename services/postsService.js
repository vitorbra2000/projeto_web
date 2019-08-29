
var getPosts = function() {
    var posts = [
        {
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'meu primeiro post',
            body:'meu primeiro post bla bla bla'
        },
        {
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