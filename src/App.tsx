import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'

// Context/Contexts
import { MainContext } from './context/Context'

// Components
import Navbar from './components/Navbar'
import Aside from './components/Aside'
import Main from './components/Main'

interface Tweet {
    name: string,
    username: string,
    tweetVal: string,
    profileImg: string,
    comment: number,
    retweet: number,
    date: Date
}

export default function App() {
    const [tweetData, setTweetData] = useState() // All tweets data 
    const [tweetInput, setTweetInput] = useState<string>('') // Input from tweet form

    // Tweet Object
    const tweet: Tweet = {
        name: 'John Doe',
        username: 'john_doe123',
        tweetVal : tweetInput,
        profileImg: 'person2.jpg',
        comment: Math.floor(Math.random() * 5),
        retweet: Math.floor(Math.random() * 10),
        date: new Date()
    }

    
    // Submit a Tweet
    const submitTweet = () => {
        if (tweet.tweetVal === '') return alert('Please fill the input area!')
        axios.post('http://localhost:5000/tweets', tweet)
            .then(res => res)
            .catch(err => err)
    }

    // Get Tweet Data
    useEffect(() => {
        axios.get('http://localhost:5000/tweets')
            .then(res => {
                let newData = res.data
                newData.reverse()
                setTweetData(newData)
            })
            .catch(err => err)
    }, [])

    let data = {
        
    }
    if (tweetData !== undefined) {

        data = {
            tweetData
        }
    }
    return (
        <MainContext.Provider value={data}>
            <Navbar />
            <Aside />
            <Main 
                submitTweet={submitTweet}
                tweetInput={tweetInput}
                setTweetInput={setTweetInput}
            />
        </MainContext.Provider>
    )
}
