import React from 'react'
import Card from './Card'

export default function Game() {
    const [startGame, setStartGame] = React.useState(false)
    const [numBall, setNumBall] = React.useState(0)
    const [numArray, setNumArray] = React.useState([])
    const [pulledArray, setPulledArray] = React.useState(generateBalls())
    
    
    function Timer() {
        const [time, setTime] = React.useState(10)
        React.useEffect(() => {
            setTimeout(() => setTime(time - 1), 1000)
            if (time === 1) {
                setTime(10)
                getBall()
            }
            console.log(time)
        }, [time])
        return <h1>Time till next number: {time}</h1>
    }


    function generateBalls() {
        let arr = []
        for (let i = 1; i <= 100; i++) {
            arr.push(i)
        }
        return arr
    }

    function getBall() {
        const num = Math.floor(Math.random() * (pulledArray.length)) + 1
        removeBall(num)
        console.log(pulledArray)
    }
    
    function removeBall(num) {
        const index = pulledArray.indexOf(num)
        const temp = [...pulledArray]
        const removed = temp.splice(index, 1)
        setNumArray(arr => [...arr, removed])
        setNumBall(removed)
        setPulledArray(temp)
    }
    return (
        <section id="game">
            <div className="game-container">
                <div className="game-header">
                    <h1>BINGO</h1>
                    <h1>Current Number: {numBall}</h1>
                    {startGame && <Timer/>}
                </div>
                <div className="game-card">
                    <Card player={1} startGame={startGame}/>
                    <Card player={2} startGame={startGame}/>
                </div>
                {!startGame && <button className="btn start-btn" onClick={() => {setStartGame(prevState => !prevState)}}>START GAME</button>}
                <div className="prevNum">
                    <h1>Previous Numbers ({100 - numArray.length} Left)</h1>
                    <div className="prevNum-container">
                        {numArray.map(num => <p>{num}</p>)}
                    </div>
                </div>
            </div>
        </section>
    )
}