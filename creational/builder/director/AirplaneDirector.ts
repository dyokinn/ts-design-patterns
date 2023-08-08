import Model from "../components/Model";
import IAirplaneBuilderInterface from "../interface/IAirplaneInterface";

export default class AirplaneDirector {
    constructPhenom(builder: IAirplaneBuilderInterface){
        builder.reset()
        builder.setModel(Model.p500)
        // outras chamadas
    }
}