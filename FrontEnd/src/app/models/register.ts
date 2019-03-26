export class Register {

    constructor(_id = '', name = '', ocupation = '', telephone = 0, dependencie = '', age = 0, email = ''){
        this._id = _id;
        this.name = name;
        this.ocupation = ocupation;
        this.telephone = telephone;
        this.dependencie = dependencie;
        this.age = age;
        this.email = email
    }

    _id: string;
    name: string;
    ocupation: string;
    telephone: number;
    dependencie: string;
    age: number;
    email: string
}
