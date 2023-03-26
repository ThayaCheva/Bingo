import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function Game() {
    const [startGame, setStartGame] = React.useState(false)
    const [prevNums, setPrevNums] = React.useState([])
    const [ballNum, setBallNum] = React.useState(generateBalls())
    const [bingo, setBingo] = React.useState({player: 1, isBingo: false})

    function Timer() {
        const [time, setTime] = React.useState(10)
        React.useEffect(() => {
            setTimeout(() => setTime(time - 1), 1000)
            if (time === 0 && prevNums.length < 100) {
                setTime(3)
                getBall()
            }
        }, [time])
        return <h1>{time}</h1>
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
        if (prevNums.length < 5) {
            setPrevNums(arr => [...arr, removed])
        }
        else if (prevNums.length < 10) {
            setPrevNums(arr => arr.filter(i => i != prevNums[0]))
            setPrevNums(arr => [...arr, removed])
        }
        setBallNum(temp)
    }
    
    return (
        <section id="game">
            {bingo.isBingo && <div className="game-over-container">
                <div className="game-over">
                    <h1>Player {bingo.player} Bingo!</h1>
                    <Link to="/"><button className="btn">New Game</button></Link>
                </div>
            </div>}
            <div className="timer">
                    {startGame && <Timer/>}
            </div>
            <div className="game-container">
                <div className="game-header">
                    <div className="prevNum">
                        <div className="prevNum-container">
                            {prevNums.map(num => <h1>{num}</h1>)}
                        </div>
                    </div>
                </div>
                <div className="game-card">
                    <Card player={1} startGame={startGame} setBingo={setBingo}/>
                    <Card player={2} startGame={startGame} setBingo={setBingo}/>
                </div>
                {!startGame && <button className="btn start-btn" onClick={() => {setStartGame(prevState => !prevState)}}>START GAME</button>}
            </div>
        </section>
    )
}