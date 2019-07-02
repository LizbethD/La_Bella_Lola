export class User {

    constructor (_id = '', first_name = '', last_name = '', address ='',
    phone = 0, e_mail = '', perfil =''){
        this._id =_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
        this.phone = phone;
        this.e_mail = e_mail;
        this.perfil = perfil;
    }
    _id: string;
    first_name: string;
    last_name: string;
    address: string;
    phone: number;
    e_mail: string;
    perfil: string;
}
