import React from 'react'
import {nanoid} from 'nanoid'
export default function Card(props) {
    const [card, setCard] = React.useState(newGrid())
    function newGrid() {
        const numbers = [] 
        for (let i = 0; i < 25; i++) {
            numbers[i] = genNum()
        }
        return numbers
    }

    function genNum() {
        return ( 
            {
                id: nanoid(),
                value: Math.floor(Math.random() * 100),
                isMatched: false
            }
        )
    }

    function getNewCard() {
        const gameStart = true
        if (gameStart) {
            setCard(newGrid())
        }
    }

    function setMatched(id) {
        if (props.startGame) {
            setCard(oldCard => oldCard.map(card => {
                return card.id === id ? {...card, isMatched: !card.isMatched} : card
            }))
        }
    }

    return (
        <section id="card">
            <h2>Player {props.player}</h2>
            <div className="card-container">
                {card.map(num => 
                    <button className={`num btn ${num.isMatched ? "matched" : ""}`} onClick={() => {setMatched(num.id)}}><p className="card-value">{num.value}</p></button>)
                }
            </div>
            {!props.startGame && <button className="btn new-card" onClick={()=>getNewCard()}>New Card</button>}
        </section>
    )
}