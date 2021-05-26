import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://library-stone.herokuapp.com'
})

export const buscaLivros = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const createBook = (url, image, title, author, category, price) => {
    const post = api.post('/books', {
        image: image,
        title: title,
        author: author,
        category: category,
        price: price
    })
    return post
}