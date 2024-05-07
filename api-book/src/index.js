const express = require('express')
const app = express()
const port = 3000

const books =[
    {
        id: 1,        
        nome: 'O pente do careca',
        categoria: 'autoajuda',
        valor: 21.90,
        autor:'João Cleber'
    },
    {
        id: 1,        
        nome: 'O pente do careca',
        categoria: 'autoajuda',
        valor: 21.90,
        autor:'João Cleber'
    },
    {
        id: 1,        
        nome: 'O pente do careca',
        categoria: 'autoajuda',
        valor: 21.90,
        autor:'João Cleber'
    }
]

const book ={
    id: 1,
    nome: 'O pente do careca',
    categoria: 'autoajuda',
    valor: 21.90,
    autor:'João Cleber'
}

// function print(texto, callback){
//     var formatado = callback(texto)
//     console.log(formatado);
// }

// function formatarDollar(valor){
//     return '$ ' + valor;
// }

// function formatarReal(valor){
//     return 'R$ ' + valor;
// }

// print(10, formatarDollar);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/books/:bookId', (req, res) => {
    const {book} = req.params;
    console.log(book)
    var result = books.find((b) => b.id == book)
    res.send(result);
})

app.listen(port, () => {
    console.log("Server Already")
  })