
var getPosts = function() {
    var posts = [
        {
            id: 1,
            title: 'Panqueca Americana',
            image: 'post1.jpg',
            description: 'Ingredientes e Preparo de uma Panqueca Americana',
            body:'Criar uma Lista de ingredientes'
        },
        {
            id: 2,
            title: 'Pettit Gateau',
            image: 'post2.jpg',
            description: 'Ingredientes e Preparo de um Pettit Gateau',
            body:'Criar uma lista de ingredientes ',
        },
        {
            id: 3,
            title: 'Sistema Automatico de posts',
            image: 'maquina.jpg',
            description: 'novo sistema do blog',
            body:'Sistema de ingredientes',
        },
        {
            id: 4,
            title: 'Sistema Automatico de posts',
            image: 'maquina.jpg',
            description: 'novo sistema do blog',
            body:'Sistema de ingredientes',
        },
    ];

    return posts;
}
    
module.exports = {
    getPosts: getPosts
}