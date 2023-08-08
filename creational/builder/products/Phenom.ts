import { Fuselage } from "../components/Fuselage";
import { Interior } from "../components/Interior";
import { Mechanics } from "../components/Mechanics";
import Model from "../components/Model";

export default class Phenom {
    private _model?: Model = undefined;
    private _mechanics?: Mechanics = undefined;
    private _interior?: Interior = undefined;
    private _fuselage?: Fuselage = undefined;
    
    

    public get model(): Model | undefined {
        return this._model;
    }
    public set model(value: Model) {
        this._model = value;
    }

    public get mechanics(): Mechanics | undefined  {
        return this._mechanics;
    }
    public set mechanics(value: Mechanics) {
        this._mechanics = value;
    }

    public get interior(): Interior | undefined {
        return this._interior;
    }
    public set interior(value: Interior) {
        this._interior = value;
    }

    public get fuselage(): Fuselage | undefined {
        return this._fuselage;
    }
    public set fuselage(value: Fuselage) {
        this._fuselage = value;
    }
}