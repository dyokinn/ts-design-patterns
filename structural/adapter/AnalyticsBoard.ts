// classe que usa a classe alvo

import Mp3Analytics from "./models/Mp3Analytics"

export default class AnalyticsBoard {
    plotAll(mp3: Mp3Analytics): any {
        mp3.plotChart()
        mp3.plotVisualizer()
    }
}