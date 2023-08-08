import BoatCreator from "./creators/BoatCreator";
import TruckCreator from "./creators/TruckCreator";
import VehicleCreator from "./creators/VehicleCreator";
import IVehicle from "./interfaces/IVehicle";

const creator:VehicleCreator = new TruckCreator()

const vehicle:IVehicle = creator.getTransport()

vehicle.deliver()
