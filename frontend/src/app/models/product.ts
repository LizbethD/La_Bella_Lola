export class Product {
    
    constructor (_id = '', name = '', description = '',  precio =''){
        this._id =_id;
        this.name = name;
        this.description = description;
        this.precio = precio;
    }

    _id: string;
    name: string;
    description: String;
    precio: string;

}
