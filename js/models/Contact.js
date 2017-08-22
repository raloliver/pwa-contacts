class Contact {
    constructor(id, nome, email, celular) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._celular = celular;
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get email() {
        return this._email;
    }

    get celular() {
        return this._celular;
    }    
}