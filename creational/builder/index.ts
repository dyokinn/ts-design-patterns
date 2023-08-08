import PhenomBuilder from "./concrete-builders/PhenomBuilder";
import AirplaneDirector from "./director/AirplaneDirector";
import Phenom from "./products/Phenom";

const director = new AirplaneDirector()

const phenomBuilder = new PhenomBuilder()

director.constructPhenom(phenomBuilder)

const phenom:Phenom = phenomBuilder.getResult()

console.log(phenom.model?.toString());
