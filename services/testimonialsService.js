var getTestimonials = function() {
    var testimonials = [
        {
            id: 1,
            name: 'fulano de tal',
            company: 'catolicasc',
            title: 'cara da TI',
            testimony: 'eu gosto muito de javascript',

        },
        {
            id: 2,
            name: 'joaozinho',
            company: 'catolicasc',
            title: 'cara da secretaria',
            testimony: 'eu tb gosto muito de javascript',
            
        }

    ];

    return testimonials;
}
module.exports = {
    getTestimonials: getTestimonials
}