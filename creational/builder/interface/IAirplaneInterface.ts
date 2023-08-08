// 1 - a interface do construtor declara as etapas de construção comuns a todos os construtores concretos   

import { Fuselage } from "../components/Fuselage"
import { Interior } from "../components/Interior"
import { Mechanics } from "../components/Mechanics"
import Model from "../components/Model"

export default interface IAirplaneBuilderInterface {
    reset():void

    setModel(model:Model)

    setFuselage(fuselage: Fuselage)
    setMechanics(mechanics: Mechanics)
    setInterior(interior: Interior)
}