import React, { useState, useEffect } from "react"
import moment from "moment"

export default function Tweet({ tweet }: { tweet: any }) {
    const [likeClick, setLikeClick] = useState<boolean>(false);
    const [likeCounter, setLikeCounter] = useState<number>(0);
    
    
    useEffect(() => {
        if (likeClick) {
            // When click the like button plus 1
            setLikeCounter((prevState: number) => prevState += 1)
        } 
        
        if (!likeClick && likeCounter > 0) {
            // When click the like button minus 1
            setLikeCounter((prevState: number) => prevState -= 1)
        }
    }, [likeClick])

    return (
        <div key={tweet.id} className="tweet-container">
            <div className="img-container">
                <img src={ tweet.profileImg } alt={ tweet.profileImg } />
            </div>

            <div className="tweet-content">
                <div className="userdata">
                    <h3>{ tweet.name }</h3>
                    <p>
                        <span>@{ tweet.username }</span>
                    </p>
                    <p>{ moment(tweet.date).fromNow() }</p>
                </div>

                <div className="tweet">
                    <p>{tweet.tweetVal}</p>
                </div>

                <div className="icons">
                    <p>
                        <i className="fa-solid fa-comment"></i>
                        { tweet.comment }
                    </p>
                    <p>
                        <i className="fa-solid fa-retweet"></i>
                        { tweet.retweet }
                    </p>

                    <p
                        key={tweet.id}
                        onClick={() => {
                            setLikeClick((prevState: boolean) => !prevState)
                        }}
                    >
                        <span
                            key={tweet.id}
                            id={likeClick ? "test" : "unliked"}
                            className="material-symbols-outlined"
                        >
                            favorite
                        </span>
                        { likeCounter }
                    </p>
                </div>
            </div>
        </div>
    );
}
