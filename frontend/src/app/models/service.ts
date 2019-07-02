export class Service {
    
    constructor (_id = '', paquete = '', cantidad = '',  date ='',
    direction= ''){
        this._id =_id;
        this.paquete = paquete;
        this.cantidad = cantidad;
        this.date = date;
        this.direction = direction;
    }

    _id: string;
    paquete: string;
    cantidad: String;
    date: string;
    direction: string;

}
