export class Game {
    constructor(id,nombre,desenvolupador,lanzamiento){
        this.id = id;
        this.nombre = nombre;
        this.desenvolupador = desenvolupador;
        this.lanzamiento = lanzamiento;
    }
      
       render(){
           return `id:${this.id}, nombre:${this.nombre}, desenvolupador:${this.desenvolupador}, lanzamiento:${this.lanzamiento}`
       }
}