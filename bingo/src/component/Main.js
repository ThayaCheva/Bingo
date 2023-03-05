import React from 'react'

export default function Main(props) {
    return (
        <section id="main-menu">
            <div className="main-container">
                <div className="menu-header">
                    <h1>ULTIMATE<span>BINGO</span></h1>
                    <p>Welcome to bingo, win by covering a complete horizontal, vertical or diagonal line. This game requires 2 people to play.</p>
                </div>
                <div className="menu-buttons">
                    <button className="menu-btn" onClick={() => {props.setStart(true)}}>Play Now</button>
                </div>
            </div>
            <div className="bingo-logo">
                <h1 className="logo-text">
                    <span>Let's</span>
                    <span>Play</span>
                    <span>Bingo</span>
                </h1>
                <div className="circle"></div>
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
        </section>
    )
}