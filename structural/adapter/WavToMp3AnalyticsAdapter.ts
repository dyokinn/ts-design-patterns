// adaptador extende a classe alvo

import Mp3Analytics from "./models/Mp3Analytics";
import WavFile from "./models/WavFile";

export default class WavToMp3AnalyticsAdapter extends Mp3Analytics {
    // classe a ser adaptada
    wav:WavFile= new WavFile()

    from(wav: WavFile):void {
        this.wav = wav
    }

    // metodos da classe extendida
    plotChart(): void {
        // faz os tratamentos necessarios
        console.log("chart do adaptador")
    }

    plotVisualizer(): void {
        // faz os tratamentos necessarios
        console.log("visualizer do adaptador")
    }

}