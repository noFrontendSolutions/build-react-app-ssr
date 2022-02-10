import {useEffect, useState} from "react"

const fetchData = async (url: string, setter: Function) => {
    const response = await fetch(url)
    const data = await response.json()
    setter([...data])
  }

const useFetch = async (url: string) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        try {
            fetchData(url, setData)
        }
        catch(err) {
            console.log(err)
        }
    }, [])
    return data
}

export {useFetch}