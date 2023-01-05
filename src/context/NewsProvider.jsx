import { useState, useEffect, createContext } from "react"

const NewsContext = createContext()

const NewsProvider = ({ children }) => {

    const [category, setCategory] = useState('general')
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() => {
        const getAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

            try {

                const resp = await fetch(url, { method: 'GET' })
                const data = await resp.json()
                setNews(data.articles)
                setTotalNews(data.totalResults)
                setPage(1)

            } catch (error) {
                console.error(error)
            }
        }
        getAPI()

    }, [category])

    useEffect(() => {
        const getAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ve&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

            try {

                const resp = await fetch(url, { method: 'GET' })
                const data = await resp.json()
                setNews(data.articles)
                setTotalNews(data.totalResults)

            } catch (error) {
                console.error(error)
            }
        }
        getAPI()

    }, [page])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleChangePage = (e, valor) => {
        setPage(valor)
    }

    return (
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                news,
                totalNews,
                handleChangePage,
                page
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext