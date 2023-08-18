import Installation from "./elements/Installation";
import Top from "./elements/Top";

// 1 nivel
let t1 = new Top("topo 1")

// 2 nivel
let i1 = new Installation("instalacao 1")
let i2 = new Installation("instalacao 2")
let t2 = new Top("topo 2")

// 3 nivel
let i3 = new Installation("instalacao 3")

t1.add([i1, i2, t2])
t2.add([i3])

// lendo 

// liberando em cadeia
t1.release()
t1.read()