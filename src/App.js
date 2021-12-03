import React from 'react'
import "./css/App.css"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            player1Score: 0,
            player2Score:0,
            player1Turn: true,
            player1Dice: "-",
            player2Dice: "-",
        }
    }
    

    rollDice = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1

        this.setState({
            player1Turn: !this.state.player1Turn
        }) 
    
        if (this.state.player1Turn){
            this.setState({
                player1Dice: randomNumber,
                player1Score: this.state.player1Score + randomNumber
            })

        } else {
            this.setState({
                player2Dice: randomNumber,
                player2Score: this.state.player2Score + randomNumber
            })

        }      
    }

    resetGame = () => {
        this.setState({
            player1Score: 0,
            player2Score:0,
            player1Turn: true,
            player1Dice: "-",
            player2Dice: "-",
        })
    }
   
    render(){
        return (
            <div className="container"> 
                <div className="game-container">
                    {this.state.player1Score < 20 && this.state.player2Score < 20 ? 
                        <h1 id="game-header">{this.state.player1Turn ? "Player 1" : "Player 2"} Turn</h1>
                            :
                        <h1 id="game-header">{this.state.player1Score >= 20 ? "Player 1" : "Player 2"} has won!</h1>
                    }
                    <div className="players">
                        <div id="player1">
                            <h1>Score:
                                <span id="player1Score">{this.state.player1Score}</span>
                            </h1>
                            <div id="player1Dice" className={this.state.player1Turn ? "dice active" : "dice"}>{this.state.player1Dice}</div>
                        </div>
                        <div id="player2">
                            <h1>Score:
                                <span id="player2Score">{this.state.player2Score}</span>
                            </h1>
                            <div id="player2Dice" className={this.state.player1Turn ? "dice" : "dice active"}>{this.state.player2Dice}</div>
                        </div>
                    </div>

                    {this.state.player1Score < 20 && this.state.player2Score < 20 ? 
                     <button id="rollBtn" onClick={() => this.rollDice()}>Roll Dice 🎲</button>
                        :
                    <button id="resetBtn" onClick={() => this.resetGame()}>Reset Game 🔁</button>
     

                }
                </div>    
             </div>
        )
    }
}

export default App