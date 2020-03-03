const semana = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']


export default class FechaNacimiento{

    


    constructor(dia,mes,año)
    {
    this.dia = dia
    this.mes = mes
    this.año = año
    this._fecha = new Date(this.año,(this.mes-1),this.dia)
    }

    
    getEdad()
    {
        let fechaActual = new Date()
        let edad = Math.floor(((fechaActual - this._fecha) / (1000 * 60 * 60 * 24) / 365));
        return edad
    }
    getFormatoCorto()
    {
        return (`${this.dia}/${this.mes}/${this.año}`)
    }
    getFormatoExtendido()
    {
        let dia = this._fecha.getDay()
        
        return (semana[dia]+" "+this.dia+" de "+meses[this.mes]+" del "+this.año)
        
    }
    getFecha()
    {
        return this._fecha
    }
    setFecha(x)
    {
        if(x <= Date.now()){
        this._fecha = x
        return true
        }

        return false
    }
}
