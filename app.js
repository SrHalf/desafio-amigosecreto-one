//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];//Armazena a lista de amigos


//Atualiza a lista de amigos
function atualizarListaDeAmigos(){
    const lista = document.querySelector("ul");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
    //Outra forma de fazer o forEach
    // for (let amigo of amigos){   
    //     const item = document.createElement("li");
    //     item.textContent = amigo;
    //     lista.appendChild(item);
    // }
}

//Adiciona um amigo na lista.
function adicionarAmigo(){
    const entrada = document.querySelector("input").value;
    if (entrada === ""){
        window.alert("Digite o nome de um amigo");
        return
    }
    amigos.push(entrada);
    document.querySelector("input").value = "";
    atualizarListaDeAmigos();//Exibe a lista de amigos após atualizar o array amigos..
    //console.log(amigos);
}

//Sorteia um amigo da lista.
function sortearAmigo(){
    if (amigos.length === 0){
        window.alert("Adicione amigos para sortear");
        return
    }
    const sorteado = Math.floor(Math.random() * amigos.length);
    //window.alert(`O amigo sorteado foi ${amigos[sorteado]}`);
    const resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo sorteado foi ${amigos[sorteado]}`;
}

//Meu bônus: Adicionar evento de tecla Enter para adicionar amigo
document.querySelector("input").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        adicionarAmigo();
    }
});