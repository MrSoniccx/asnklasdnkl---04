import FechaNacimiento from "./fecha-nacimiento.js";
import Nombre from "./nombre.js";
import Persona from "./persona.js";
import Estudiante from "./estudiante.js"
import Maestro from "./maestro.js";
import Grupo from "./grupo.js";

class Main {
     constructor() {
         this.fecha = new FechaNacimiento(3, 3, 2005)
         this.nombre = new Nombre("Juan", "Gonzales", "Godinez")
         this.persona = new Persona(this.nombre, this.fecha, "Masculino")
         this.grupo = new Grupo(2,"G")

     }

     testFechaNacimiento(){
         console.log(this.fecha.getFecha())

         console.log(this.fecha.setFecha(new Date(2007, 5, 2)))
         console.log(this.fecha.setFecha(new Date(2050, 5, 2)))

         console.log(this.fecha.getFormatoCorto())
         console.log(this.fecha.getFormatoExtendido())
         console.log(this.fecha.getEdad())
     }
     testNombre(){
         console.log(this.nombre.getCompleto())
         console.log(this.nombre.getInvertido())
         console.log(this.nombre.getIniciales())
         console.log(this.nombre.getNombre())
         console.log(this.nombre.setApellidoPaterno("Rodriguez"))
         console.log(this.nombre.getApellidoMaterno())
         console.log(this.nombre.setApellidoMaterno("Hernandez"))
         console.log(this.nombre.getApellidoMaterno())
         
     }
     testPersona(){
         console.log(this.persona.getPerfil())

     }

     testEstudiante(){
         let e = new Estudiante(
            this.nombre,
            this.fecha,
            "Masculino",
            20161012,
            "lisordia@ucol.mx",
            "Facultad de telematica")

         e.print();
     }

     testMaestro(){
         let x = new Maestro(
             new Nombre("ramon","ramirez","rodriguez"),
             new FechaNacimiento(15, 3, 2014),
             "Motor de lancha",
             5000,
             20164872,
             "Matematicas")

         x.print()
         
     }
     
     testGrupo(){
        let e = new Estudiante(
            this.nombre,
            this.fecha,
            "Masculino",
            20161012,
            "lisordia@ucol.mx",
            "Facultad de telematica")

        let e2 = new Estudiante(
                new Nombre("ramon","ramirez","rodriguez"),
                new FechaNacimiento(1, 7, 2018),
                "Masculino",
                20175812,
                "liia@ucol.mx",
                "Facultad de telematica")

         console.log(this.grupo._encontrarEstudiante(e))
         console.log(this.grupo.registrar(e))
         console.log(this.grupo.registrar(e2))
         console.log(this.grupo._encontrarEstudiante(e))
         this.grupo.listar()
     }
}

let tester = new Main()
tester.testFechaNacimiento()
tester.testNombre()
tester.testPersona()
tester.testEstudiante()
tester.testMaestro()
tester.testGrupo()