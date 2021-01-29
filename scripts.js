const Modal = {
    open(){
        //Abrir Modal
        //Adicionar a clase active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        //Fechar o modal
        //Remover a classe active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')

    }
    
}