import Element from "./Element.mjs"
import loadImages from "./loadImages.mjs"
import selector from "./selector.mjs"

export default class Portfolio {
    constructor(url) {
        this.url = url

        this.createFromJSON()

    }
    
    createFromJSON() {
        return fetch(this.url)
            .then(result => result.json()) // make json object
            .then(data => { // get data from json object
                [data.sections.home, data.sections.portfolio, data.sections.contact] //
                    .forEach(SECTION => {

                        const section = new Element('section', SECTION.id, document.body)

                        SECTION.heading ?
                            new Element('h1', 0, selector(SECTION.id), SECTION.heading)
                        :   false;

                        SECTION.paragraph ?
                            new Element('p1', 0, selector(SECTION.id), SECTION.paragraph)
                        :   false;

                        SECTION.images ?
                            loadImages(selector(SECTION.id), SECTION.images)
                        :   false;

                    });
            });
    }
}
