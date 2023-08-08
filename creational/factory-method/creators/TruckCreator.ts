import IVehicle from "../interfaces/IVehicle";
import VehicleCreator from "./VehicleCreator";
import Truck from "../concrete-products/Truck";

// 4 - o Criador Concreto sobrescreve o método fábrica para retornar o objeto específico
export default class TruckCreator extends VehicleCreator{
    protected createVehicle(): IVehicle {
        return new Truck()
    }
}