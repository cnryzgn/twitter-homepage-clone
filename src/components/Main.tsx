import Tweet from "./Tweet"
import { MainContext, useContext } from '../context/Context'

export default function Main({ submitTweet, tweetInput, setTweetInput } : any) {
    const { tweetData } : any = useContext(MainContext)


    const formHandler = (e: any): void => {
        e.preventDefault()

        window.location.reload()
    }    


    return (
        <main>
            <div className="header">
                <h3>Home</h3>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            
            <div className="tweet-form-section">
                <div className="img-container">
                    <img 
                        src="person2.jpg" 
                        alt="profile_img.jpg"
                    />
                </div>

                <form onSubmit={ (e) => formHandler(e) } className="tweet-input-container" >
                    <input 
                        name="tweet" 
                        id="tweet" 
                        placeholder="What's happening?" 
                        value={tweetInput}
                        onChange={ (e) => setTweetInput((e.target as HTMLInputElement).value) }
                    />
                    <div className="tweet-bottom">
                        <div className="icons">
                            <i className="fa-solid fa-image"></i>
                            <i className="fa-solid fa-bars-staggered"></i>
                            <i className="fa-solid fa-face-smile"></i>
                            <i className="fa-solid fa-calendar-check"></i>  
                        </div>
                        <button
                            onClick={() => submitTweet()}
                            >
                            Tweet
                        </button>
                    </div>
                </form>
            </div>

            {tweetData?.map((tweet: any) => (
                <Tweet 
                    key={ tweet.id }
                    tweet={tweet}
                />
            ))}

        </main>
    )
}