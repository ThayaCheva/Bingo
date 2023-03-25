import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <section id="main-menu">
            <div className="left-container">
                <div className="menu-container">
                    <div className="menu-header">
                        <h1>CASUAL<span>BINGO</span></h1>
                        <p>Welcome to bingo, win by covering a complete horizontal, vertical or diagonal line. This game requires 2 people to play.</p>
                    </div>
                    <div className="menu-buttons">
                        <Link to="/game"><button className="menu-btn btn">Play Now</button></Link>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="bingo-logo">
                    <div className="circle">
                        <h1 className="logo-text">
                            <span>Let's</span>
                            <span>Play</span>
                            <span>Bingo</span>
                        </h1>
                        <div className="card">
                            <div className="card-grid">
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                                <div className="grid-items"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}