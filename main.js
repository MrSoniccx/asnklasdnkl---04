import FechaNacimiento from "./fecha-nacimiento.js";
import Nombre from "./nombre.js";

class Main {
     constructor() {
         this.fecha = new FechaNacimiento(3, 3, 2005)
         this.nombre = new Nombre("Juan", "Gonzales", "Godinez")
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
}

let tester = new Main()
tester.testFechaNacimiento()
tester.testNombre()