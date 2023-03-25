import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function Game() {
    const [startGame, setStartGame] = React.useState(false)
    const [currentBall, setCurrentBall] = React.useState(0)
    const [prevNums, setPrevNums] = React.useState([])
    const [ballNum, setBallNum] = React.useState(generateBalls())
    const [bingo, setBingo] = React.useState({player: 1, isBingo: false})

    function Timer() {
        const [time, setTime] = React.useState(10)
        React.useEffect(() => {
            setTimeout(() => setTime(time - 1), 1000)
            if (time === 1) {
                setTime(10)
                getBall()
            }
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
        const num = Math.floor(Math.random() * (ballNum.length)) + 1
        removeBall(num)
    }
    
    function removeBall(num) {
        const index = ballNum.indexOf(num)
        const temp = [...ballNum]
        const removed = temp.splice(index, 1)
        if (prevNums.length <= 100) {
            setPrevNums(arr => [...arr, removed])
        }
        setCurrentBall(removed)
        setBallNum(temp)
    }
    
    return (
        <section id="game">
            {bingo.isBingo && <div className="game-over-container">
                <div className="game-over">
                    <h1>Player {bingo.player} has won!!</h1>
                    <Link to="/"><button className="btn">New Game</button></Link>
                </div>
            </div>}
            <div className="game-container">
                <div className="game-header">
                    <h1>Current Number: {currentBall}</h1>
                    {startGame && <Timer/>}
                </div>
                <div className="game-card">
                    <div className="prevNum">
                        <h1>Previous Numbers ({100 - prevNums.length} Left)</h1>
                        <div className="prevNum-container">
                            {prevNums.map(num => <p>{num}</p>)}
                        </div>
                    </div>
                    <Card player={1} startGame={startGame} setBingo={setBingo}/>
                    <Card player={2} startGame={startGame} setBingo={setBingo}/>
                </div>
                {!startGame && <button className="btn start-btn" onClick={() => {setStartGame(prevState => !prevState)}}>START GAME</button>}
            </div>
        </section>
    )
}