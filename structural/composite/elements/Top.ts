// 3 - O componente container é um componente com filhos, normalmente delegando suas funcoes abaixo da cadeia além de executar

import Component from "./Component";

export default class Top implements Component{
    isReleased = false
    pn:string = ""
    children:Component[] = []

    constructor(pn:string) {
        this.pn = pn;
    }
    
    add(components:Component[]) {
        for (let component of components) {
            this.children.push(component)
        }
    }

    read(): void {
        console.log(this.pn + ": " + this.isReleased);
        console.log("--------------------------");

        for(let component of this.children) {
            component.read()
        }
    }

    release(): void {
        console.log("--------------------------");
        this.isReleased = true
        console.log(this.pn + " liberado\n");

        for(let component of this.children) {
            component.release()
        }
    }
}