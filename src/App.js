import React, { Component } from 'react'
import './App.css';
import Board from './Board'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: ['✖️', '✖️', '✖️', '✖️', '✖️', '✖️', '✖️', '✖️', '✖️'],
            bomb : Math.floor(Math.random() * 9),
            treasure : Math.floor(Math.random() * 9),
            end: '',
            playOn: true,
            counter: 7,
            score: 0,
            highScore: 0
        }
    }


    getLocation = (e) => {

        let locationId = e.target.id
        let { bomb, treasure, playOn, counter, score, highScore} = this.state;
        let newSpaces = this.state.spaces;

        if (playOn === true && counter > 0) {
            this.setState({counter: counter-1})
            if (counter == 1 && locationId != treasure) {
                newSpaces[locationId] = '🌴 '
                this.setState({end: 'You ran out of moves', playOn: false, score: 0})
            } else if (bomb == locationId) {
                newSpaces[bomb] = '💣 ';
                this.setState({spaces: newSpaces, end: 'You Lose', playOn: false, score: 0})
            } else if(treasure == locationId) {
                newSpaces[treasure] = '❌';
                // let newHighScore = score
                // highScore < score && newHighScore > highScore ? this.setState({highScore: newHighScore}):
                this.setState({spaces: newSpaces, end: 'You win!', playOn: false, score: score + 1})
            } else {
                newSpaces[locationId] = '🌴 '
                this.setState({spaces: newSpaces})
            }

        } else {return;}

}

    boardReset = () => {
        let { spaces, end, playOn, counter} = this.state
        let newBomb = Math.floor(Math.random() * 8)
        let newTreasure = Math.floor(Math.random() * 8)
        let newSpaces = ['✖️', '✖️', '✖️', '✖️', '✖️', '✖️', '✖️', '✖️', '✖️']

        this.setState({
            spaces: newSpaces,
            bomb: newBomb,
            treasure: newTreasure,
            end: '',
            playOn: true,
            counter: 7
    })
}

    render() {
        let { spaces, end, counter, score, highScore } = this.state

        return (
          <div>
            <Board
            onclicking ={this.getLocation}
            spaces = {spaces}
            end = {end}
            boardReset = {this.boardReset}
            counter= {counter}
            score = {score}
            highScore = {highScore}
            />
          </div>
        );
      }
    }


export default App;
