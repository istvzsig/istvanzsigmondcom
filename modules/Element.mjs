export default class Element {
    constructor(tag, id, where, text) {
        this.tag = tag;
        this.id = id;
        this.where = where;
        this.text = text;

        this.create();
    }
    create() {
        let el = document.createElement(this.tag);
        this.id !== 0 ? el.id = this.id : false;
        this.where.appendChild(el);
        this.text !== undefined ? el.innerText = this.text : false;
        // el.innerText = this.text
        return el
    }

}
