const listaOpcoes=document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

listaOpcoes.addEventListener("click", identificarOpcoes)

function identificarOpcoes(event){
    const elemento=event.target

    if(elemento.tagName == "LI"){
        const id=elemento.id
        const opcaoSelecionada=document.querySelector('div[data-id="${id}"]')
        console.log(opcaoSelecionada)
    }
}