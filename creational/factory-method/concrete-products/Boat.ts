import IVehicle from "../interfaces/IVehicle";

// 2 - produtos concretos apresentam implementações diferentes da interface

export default class Boat implements IVehicle{
    deliver(): void {
        this.getCargo()
        console.log("iniciando o trajeto pela agua");
    }

    getCargo(): void {
        console.log("pegando a carga");
    }
}