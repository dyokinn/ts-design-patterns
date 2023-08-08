// 3 - o Criador declara o método fábrica e delega sua implementação às subclasses, mantendo o retorno da interface e nao concreta

import IVehicle from "../interfaces/IVehicle";

export default abstract class VehicleCreator {
    // metodo fabrica
    protected abstract createVehicle():IVehicle

    // chamada exposta
    getTransport(){
        let vehicle:IVehicle = this.createVehicle()
        return vehicle
    }

}