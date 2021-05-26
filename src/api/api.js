import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://library-stone.herokuapp.com'
})

export const buscaLivros = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const posta = async(url, setDado) => {
    const post = await api.post(url)
    setDado(post)
}