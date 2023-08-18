// 1 - a interface de componente descreve metodos comuns a cada componente da arvore (nao implementa)

export default interface Component {
    release(): void
    read(): void
}