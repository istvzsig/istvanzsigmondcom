export default function loadJSON(url) {
    return fetch(url)
        .then(result => result.json())
        .then(data => {
            [data.sections.home, data.sections.portfolio, data.sections.contact]
                .forEach(SECTION => {
                    const section = document.createElement('section');
                    section.id = SECTION.id;
                    document.body.appendChild(section);

                    const h1 = document.createElement('h1');
                    const p = document.createElement('p');
                    const img = document.createElement('img');
                    SECTION.heading ? section.appendChild(h1) : false;
                    SECTION.paragraph ? section.appendChild(p) : false;

                    // SECTION.images.forEach(image => console.log(image))

                    SECTION.images ? loadImages(section, SECTION.images) : false


                    h1.innerText = SECTION.heading;
                    p.innerText = SECTION.paragraph;
                });
        });
}

class Element {
    constructor(tag, id, where) {
        this.tag = tag;
        this.id = id;
        this.where = where;

    }
    create(){

    }
}

function loadImages(section, images) {
    const gallery = document.createElement('div');
    section.append(gallery)
    return new Promise(resolve => {
        images.forEach(url => {

            const image = new Image();
            image.addEventListener('load', () => {
                resolve(image);
            });
            image.src = `/img/${url}.png`;
            gallery.appendChild(image);
        });
    });
}
