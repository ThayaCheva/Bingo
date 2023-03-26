import React from 'react'
import {nanoid} from 'nanoid'
export default function Card(props) {
    const [card, setCard] = React.useState([])
    const [isGenerated, setIsGenerated] = React.useState(false)

    React.useEffect(() => {
        generateCard()
    }, [])
    
    React.useEffect(() => {
        if (isGenerated) {
            const isBingo = (bingoH() || bingoV() || bingoD())
            if (isBingo) {
                props.setBingo({player: props.player, isBingo: true})
            }
        }
    }, [card])

    function generateCard() {
        let nums = []
        while (nums.length < 25) {
            const rand = Math.floor(Math.random() * 100) + 1
            if (!nums.includes(rand)) {
                nums.push(rand)
            }
        }
        for (let i = 0; i < 25; i++) {
            nums[i] = genNum(nums[i])
        }
        console.log(nums)
        setCard(nums)
        setIsGenerated(true)
    }


    function bingoH() {
        let maxCol = 5
        for (let row = 0; row < 5; row++) {
            let count = 0
            for (let col = row * 5; col < maxCol; col++) {
                if (card[col].isMatched) {
                    count += 1
                }
                if (count === 5) {
                    return true
                }
            }
            maxCol = maxCol + 5
        }
    }

    function bingoV() {
        for (let col = 0; col < 5; col++) {
            let count = 0
            for (let row = col; row < 25; row += 5) {
                if (card[row].isMatched) {
                    count += 1
                    console.log(count)
                }
                if (count === 5) {
                    return true
                }
            }
        }
    }

    function bingoD() {
        let count = 0
        for (let i = 0; i < 25; i += 6) {
            if (card[i].isMatched) {
                count += 1
            }
            if (count === 5) {
                return true
            }
        }
        count = 0
        for (let i = 4; i < 25; i += 4) {
            if (card[i].isMatched) {
                count += 1
                console.log(count)
            }
            if (count === 5) {
                return true
            }
        }
    }

    function genNum(value) {
        return ( 
            {
                id: nanoid(),
                value: value,
                isMatched: false
            }
        )
    }

    function getNewCard() {
        const gameStart = true
        if (gameStart) {
            generateCard()
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
            <div className="container">
                {!props.startGame && <button className="new-btn" onClick={()=>getNewCard()}><p>↻</p></button>}
                <div className="card-title">
                    <p>B</p>
                    <p>I</p>
                    <p>N</p>
                    <p>G</p>
                    <p>O</p>
                </div>
                <div className="card-container">
                    {card.map(num => 
                        <button className={`num btn ${num.isMatched ? "matched" : ""}`} onClick={() => {setMatched(num.id)}}><p className="card-value">{num.value}</p></button>)
                    }
                </div>
            </div>
        </section>
    )
}   