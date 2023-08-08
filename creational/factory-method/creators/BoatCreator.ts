import IVehicle from "../interfaces/IVehicle";
import VehicleCreator from "./VehicleCreator";
import Boat from "../concrete-products/Boat";

// 4 - o Criador Concreto sobrescreve o método fábrica para retornar o objeto específico
export default class BoatCreator extends VehicleCreator{
    protected createVehicle(): IVehicle {
        return new Boat()
    }
}