import React from 'react'
import Card from './Card'

export default function Game() {
    return (
        <section id="game">
            <div className="game-container">
                <div className="game-header">
                    <h1>BINGO</h1>
                    <h1>Current Number: </h1>
                </div>
                <div className="game-card">
                    <Card player={1}/>
                    <Card player={2}/>
                </div>
            </div>
        </section>
    )
}