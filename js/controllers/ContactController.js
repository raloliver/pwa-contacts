class ContactController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._id = $('#id');      
        this._nome = $('#nome');
        this._email = $('#email');
        this._celular = $('#celular');
        this._contactList = new ContactList();

        this._contactView = new ContactView($('#contact-view'));
        this._contactView.update(this._contactList);
    }

    add(event) {
        event.preventDefault();

        this._contactList.add(this._createContact());
        this._contactView.update(this._contactList);
        
        this._cleanForm();
    }

    edit(event) {
        event.preventDefault();
        const contactId = event.currentTarget.dataset.contact;    

        this._contactList.edit(this._editContact(contactId));
           
    }

    delete(event) {
        event.preventDefault();
        const contactId = event.currentTarget.dataset.contact;
        
        this._contactList.delete(this._removeContact(contactId));             
    }

    _createContact() {
        return new Contact(
            this._id.value,
            this._nome.value,
            this._email.value,
            this._celular.value
        );
    }

    _editContact(contact) {        
        let contactList = new ContactList();
        const contactData = document.querySelector(`#contact-${contact}`).children;                
        this._cleanForm();
        const [nome, email, celular] = [contactData[1].textContent, contactData[2].textContent, contactData[3].textContent];
        contactList._contactForm.querySelector("[name=nome]").value = nome;        
        contactList._contactForm.querySelector("[name=email]").value = email;
        contactList._contactForm.querySelector("[name=celular]").value = celular;
        contactList._contactForm.querySelector("[name=id]").value = contactData[0].textContent;        
    }
    
    _removeContact(contact) {
        document.querySelector(`#contact-${contact}`).remove();
    }
    
    _cleanForm() {
        this._id.value = Math.floor(Math.random() * 9999);
        this._nome.value = '';
        this._email.value = '';
        this._celular.value = '';
        this._nome.focus();
    }
}