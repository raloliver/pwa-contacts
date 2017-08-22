class ContactList {
    constructor() {
        this._contacts = [];
        this._contactForm = document.querySelector("#contact-form");
    }

    add(contact) {
        this._contacts.push(contact);
    }

    edit(contact) {
        this._contacts.splice(contact, 1);        
    }

    delete(contact) {
        this._contacts.splice(contact, 1);
    }

    get contacts() {
        return [].concat(this._contacts);
    }
}