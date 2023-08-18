import AnalyticsBoard from "./AnalyticsBoard";
import WavToMp3AnalyticsAdapter from "./WavToMp3AnalyticsAdapter";
import Mp3Analytics from "./models/Mp3Analytics";
import WavFile from "./models/WavFile";

const board: AnalyticsBoard = new AnalyticsBoard()

const wav: WavFile = new WavFile()
const mp3:Mp3Analytics = new Mp3Analytics()

board.plotAll(mp3)

// nao funciona
//board.plotAll(wav)

// funciona
const mp3Adaptee = new WavToMp3AnalyticsAdapter()
mp3Adaptee.from(wav)

board.plotAll(mp3Adaptee)