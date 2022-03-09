const listaOpcoes=document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

listaOpcoes.addEventListener("click", identificarOpcoesTransacao)

function identificarOpcoesTransacao(event){
    const elemento=event.target

    if(elemento.tagName == "LI"){
        const id=elemento.id
        const opcaoSelecionada=document.querySelector(`div[data-id="${id}"]`)
        
        removeClasseMostrar()

        opcaoSelecionada.classList.add("mostrar")
    }
}

function removeClasseMostrar(){
    const listaDivs=document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i=0;i<listaDivs.length;i++){
        listaDivs[i].classList.remove("mostrar")
    }
}