import React from 'react'

export default function Main(props) {
    return (
        <section id="main-menu">
            <div className="main-container">
                <div className="menu-header">
                    <h1>BINGO!</h1>
                    <p>Welcome to bingo, win by covering a complete horizontal, vertical or diagonal line.</p>
                </div>
                <div className="menu-buttons">
                    <button className="menu-btn" onClick={props.startGame}>NEXT</button>
                </div>
            </div>
        </section>
    )
}