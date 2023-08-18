// 2 - O componente folha é um componente sem filhos, normalmente com regras de negocio mais consolidadas

import Component from "./Component";

export default class Installation implements Component{
    isReleased = false
    pn:string = ""

    constructor(pn:string) {
        this.pn = pn;
    }

    read(): void {
        console.log(this.pn + ": " + this.isReleased);
    }

    release(): void {
        this.isReleased = true
        console.log(this.pn + " liberada!\n");
    }
}