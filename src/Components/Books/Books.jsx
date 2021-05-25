import React, {useState, useEffect} from 'react'
import './Books.module.css'
import { busca } from '../../api/booksApi'

export const Books = () => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        busca(`/books`, setBooks)
    }, [])
    
    return (
        <ul>
            {
                books.map(book => (
                    <div className="container">
                        <img src={book.image} alt="Imagem do Livro" />
                        <p>{book.title}</p>
                        <p>{book.price}</p>
                    </div>
                ))
            }
        </ul>        
    )
}
