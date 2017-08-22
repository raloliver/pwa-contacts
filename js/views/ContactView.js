class ContactView extends View {

    constructor(element) {
        super(element);
    }

    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>TELEFONE</th>
                </tr>
            </thead>

            <tbody>
                ${model.contacts.map(contact => 
                    `
                        <tr id="contact-${contact.id}">
                            <td>${contact.id}</td>
                            <td>${contact.nome}</td>
                            <td>${contact.email}</td>
                            <td>${contact.celular}</td>
                            <td width="30" id="edit" data-contact="${contact.id}" onclick="contactController.edit(event)"><i class="glyphicon glyphicon-edit"></i></td>
                            <td width="30" id="delete" data-contact="${contact.id}" onclick="contactController.delete(event)"><i class="glyphicon glyphicon-remove"></i></td>
                        </tr>
                    `
                ).join('')}
            </tbody>
        </table>
        `;
    }

}