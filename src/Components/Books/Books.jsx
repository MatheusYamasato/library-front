import React, {useState, useEffect} from 'react'
import style from './Books.module.css'
import { buscaLivros } from '../../api/api'
import { Link } from 'react-router-dom'


export const Books = () => {
    const converter = (valor) => {
        const valorConvertido = (valor / 100).toFixed(2)
        return valorConvertido
    }

    const [books, setBooks] = useState([])
    
    useEffect(() => {
        buscaLivros(`/books`, setBooks)
    }, [])
    

    return (
        <main>
            <section>
                <ul className={style.container}>
                    {
                        books.map(book => (
                            <div className={style.card}>
                                <img className={style.img} src={book.image} alt="Imagem do Livro" />
                                <p className={style.title}>{book.title}</p>
                                <p className={style.author}>{book.author}</p>
                                <p className={style.category}>{book.category}</p>
                                <p className={style.price}>R$ {converter(book.price)}</p>
                            </div>
                        ))
                    }
                </ul>                                                                   
            </section>
            <Link to="/livros/inserirlivro"> Inserir Livro </Link>
        </main>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   