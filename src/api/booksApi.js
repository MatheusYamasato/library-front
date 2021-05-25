import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://library-stone.herokuapp.com'
})

export const busca = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}