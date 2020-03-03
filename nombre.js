export default class Nombre{

    constructor(nombre, apellidoPaterno, apellidoMaterno)
    {
        this._nombre = nombre
        this._apellidoPaterno = apellidoPaterno
        this._apellidoMaterno = apellidoMaterno
    }

    getCompleto()
    {
        return (`${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`)
    }

    getInvertido()
    {
        return (`${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`)
    }

    getIniciales()
    {
        return  (`${this._nombre.charAt(0)}${this._apellidoPaterno.charAt(0)}${this._apellidoMaterno.charAt(0)}`)
    }

    getNombre(){
        return this._nombre
    }
    setApellidoPaterno(x){
        this._apellidoPaterno = x
        return true
    }

    getApellidoMaterno(){
        return this._apellidoMaterno
    }
    setApellidoMaterno(x){
        this._apellidoMaterno = x
        return true
    }
}
