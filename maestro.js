import Persona from "./persona.js"
export default class Maestro extends Persona{

    constructor(nombre, fechaNacimiento, genero, sueldo, num, tipo){
        super(nombre, fechaNacimiento, genero)
        this._sueldo = sueldo
        this._num = num
        this._tipo = tipo
    }

    print(){
        console.log(this.getPerfil())
        console.log(this._sueldo)
        console.log(this._num)
        console.log(this._tipo)
    }
}