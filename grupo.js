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
            if (e == estudiante){
                result = true
            }
        })

        return result
    }
}