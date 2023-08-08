import IVehicle from "../interfaces/IVehicle";

// 2 - produtos concretos apresentam implementações diferentes da interface

export default class Truck implements  IVehicle{
    deliver(): void {
        this.getCargo()
        console.log("iniciando o trajeto via terra");
    }

    getCargo(): void {
        console.log("pegando a carga");
    }
}