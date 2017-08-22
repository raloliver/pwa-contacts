class View {

    constructor(element) {

        this._element = element;
    }
    
    template() {

        throw new Error('Método não disponível.');
    }

    update(model) {

        this._element.innerHTML = this.template(model);
    }
}