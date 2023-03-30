import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <section id="main-menu">
            <div className="top-container">
                <nav>
                    <h1>BALLAE</h1>
                    <ul>
                        <a>HOME</a>
                        <a>ABOUT</a>
                        <a>CONTACT</a>
                        <a>TERMS</a>   
                        <a>SIGN UP</a>   
                    </ul>
                </nav>
                <div className="menu-container">
                
                    <div className="menu-header">
                        <h1>BINGO</h1>
                        <p>Welcome to our online bingo world, where the numbers never stop rolling and the fun never ends! Our website is dedicated to bringing you the ultimate bingo experience, with a wide variety of games, generous bonuses, and exciting prizes.</p>
                    </div>

                    <div className="menu-buttons">
                        <Link to="/game" className="menu-btn btn"><button>Play Now</button></Link>
                        <Link to="/game" className="menu-btn btn"><button>Leaderboard</button></Link>
                    </div>
                </div>
            </div>
            <div className="bottom-container">test</div>
        </section>
    )
}