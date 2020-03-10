export default class Grupo{

    /**
     * 
     * @param {number} semestre 
     * @param {string} grupo 
     */
    constructor(semestre, grupo){
        this._semestre = semestre
        this._grupo = grupo
        this._estudiantes = new Array();
    }

    registrar(estudiante){
        if(this._encontrarEstudiante(estudiante) == true)
        { return false}
        else{ this._estudiantes.push(estudiante); return true}
    }

    listar(){
        this._estudiantes.forEach( (estudiante, i) => {
            console.log(`${i+1} ${estudiante.getPerfil()}`)
        })
    }

    _encontrarEstudiante(estudiante){
        let result = false

        this._estudiantes.forEach(e => {
            if (e.esIgualA(estudiante)){
                result = true
            }
        })

        return result
    }

    _encontrarEstudianteV2(estudiante){
        let result = this._estudiantes.find( e => e.esIgualA(estudiante))
        return result
    }

    _encontrarIndiceEstudiante(estudiante) {
        let posicion = -1
        this._estudiantes.forEach( (e, i) => {
            if(e == estudiante){
                posicion = i
            }
        })
        return posicion
    }

    _encontrarIndiceEstudianteV2(estudiante){
        let indice = this._estudiantes.findIndex(e => {
            e.esIgualA(estudiante)
        })
        return indice
    }

    removeEstudiante(estudiante){
        var i = this._estudiantes.indexOf(estudiante)

        if(i !== -1){
            this._estudiantes.splice(i,1)
            return true
        }

        return false
    }

    actualizar(estudiante, newEstudiante)

     {var i = this._estudiantes.indexOf(estudiante)
        if(i !== -1){

            this._estudiantes[i] = newEstudiante
            //o tambien puede funcionar this._estudiantes.splice(i,1, newEstudiante)
            return true
        }

        return false
    }
}