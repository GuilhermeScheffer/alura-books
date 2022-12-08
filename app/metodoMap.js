function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // ...livro faz uma cópia de toda a estrutura que já foi realizada
    })
    return livrosComDesconto
}