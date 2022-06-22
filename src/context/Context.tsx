import { useContext, createContext } from "react"

interface TweetData {
    tweetVal: string,
    id: number
}

const MainContext = createContext({})

export  {
    MainContext,
    useContext
}