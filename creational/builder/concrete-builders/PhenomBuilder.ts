import { Fuselage } from "../components/Fuselage";
import { Interior } from "../components/Interior";
import { Mechanics } from "../components/Mechanics";
import Model from "../components/Model";
import IAirplaneBuilderInterface from "../interface/IAirplaneInterface";
import Phenom from "../products/Phenom";

// 2 - construtores concretos proveem diferentes implementações das etapas e possuem um produto como atributo resultante

export default class PhenomBuilder implements IAirplaneBuilderInterface{
    private result:Phenom = new Phenom()

    getResult(): Phenom {
        return this.result
    }
    
    reset(): void {
        this.result = new Phenom()
    }

    setModel(model: Model) {
        this.result.model = model
        
    }

    setFuselage(fuselage: Fuselage) {
        this.result.fuselage = fuselage
    }

    setInterior(interior: Interior) {
        this.result.interior = interior
    }

    setMechanics(mechanics: Mechanics) {
        this.result.mechanics = mechanics
    }

}