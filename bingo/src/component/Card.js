import React from 'react'

export default function Card(props) {
    const [cardNum, setCardNum] = React.useState(newGrid())
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
            value: Math.floor(Math.random() * 100),
            isMatched: false
            }
        )
    }

    return (
        <section id="card">
            <h2>Player {props.player}</h2>
            <div className="card-container">
                {cardNum.map(num => <button className={`num ${num.isMatched ? "matched" : ""}`}>{num.value}</button>)}
            </div>
            <button className="new-card" onClick={()=>setCardNum(newGrid())}>New Card</button>
        </section>
    )
}