import { useEffect, useState } from 'react'
import styles from '../styles/Films.module.css'

export default function Films() {
    const [searchTerm, setSearchTerm] = useState('batman')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    // const fetchData = async () => {
    //     setLoading(true)
    //     try {
    //         const resp = await fetch(`${url}&s=${searchTerm}`)
    //         const data = await resp.json()
    //         setMovies(data)
    //         console.log(data)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [searchTerm])

  return (
    <div className={styles.films}>
        <form>
            <label htmlFor="searchmovie">Search Movie</label>
            <input type="text" name="searchmovie" id="searchmovie" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
        </form>
        <div className={styles.movies}>

        </div> 
    </div>
  )
}