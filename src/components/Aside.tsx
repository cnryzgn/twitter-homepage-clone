import Trend from "./Trend"

export default function Aside() {
    

    return (
        <div className="aside-container">
            <div className="searchbar">
                 <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search Twitter"/>
            </div>

            <div className="trends-container">
                <div className="header">
                    <h2>Trends for you</h2>
                    <i className="fa-solid fa-gear"></i>
                </div>

                <Trend />

                <Trend />

                <Trend />

                <Trend />

                <Trend />

                <div className="trends-footer">
                    <a href="#">Show more</a>
                </div>
            </div>

            <div className="trends-container">
                <div className="header">
                    <h2>Who to follow</h2>
                </div>

                <div className="trends follow-user">
                    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="nodejs.png" />
                    <div className="user-data">
                        <h4>NodeJS</h4>
                        <p>@nodejs</p>
                    </div>
                    <button>follow</button>
                </div>
                
                <div className="trends follow-user">
                    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="js.png" />
                    <div className="user-data">
                        <h4>Javascript</h4>
                        <p>@js</p>
                    </div>
                    <button>follow</button>
                </div>

                <div className="trends follow-user">
                    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="reactjs.png" />
                    <div className="user-data">
                        <h4>React JS</h4>
                        <p>@reactjs</p>
                    </div>
                    <button>follow</button>
                </div>

                <div className="trends-footer">
                    <a href="#">Show more</a>
                </div>
            </div>
        </div>
    )
}