import { useEffect } from "react"

export default function Navbar() {
    useEffect(() => {
        document.getElementById('home')?.focus()
    }, [])

    
    return (
        <nav>
            <div className="logo">
                <i className="fa-brands fa-twitter"></i>
            </div>

            <div className="nav-list">
                <a id="home" href="#">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </a>

                <a href="#">
                    <i className="fa-solid fa-hashtag"></i>
                    <span>Explore</span>
                </a>

                <a href="#">
                    <i className="fa-solid fa-bell"></i>
                    <span>Notifications</span>
                </a>

                <a href="#">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Messages</span>
                </a>

                <a href="#">
                    <i className="fa-solid fa-bookmark"></i>
                    <span>Bookmarks</span>
                </a>
            </div>

            <button>
                <span>Tweet</span>
                <i className="fa-brands fa-twitter"></i>
            </button>
        </nav>
    )
}