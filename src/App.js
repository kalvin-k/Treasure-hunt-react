import React, { Component } from 'react'
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: ['✖️', '✖️', '✖️', '✖️', '✖️', '✖️', '✖️', '✖️', '✖️'],
            bomb : Math.floor(Math.random() * 9),
            treasure : Math.floor(Math.random() * 9),
            end: '',
            playOn: true
        }
    }


    getLocation = (e) => {
        let locationId = e.target.id

        let { bomb, treasure, playOn} = this.state;
        let newSpaces = this.state.spaces;
        if (playOn === true) {
            if (bomb == locationId) {
                console.log('bomb' + this.state.bomb);
                newSpaces[bomb] = '💣 ';
                this.setState({spaces: newSpaces, end: 'You Lose', playOn: false})
            } else if(treasure == locationId) {
                console.log('treasure' + this.state.treasure );
                newSpaces[treasure] = '❌';
                this.setState({spaces: newSpaces, end: 'You win!', playOn: false})

            } else {
                newSpaces[locationId] = '🌴 '
                this.setState({spaces: newSpaces})
            }
    } else {return;}
}

    // board = (num) => {
    //
    //     const bomb = Math.floor(Math.random() * 9);
    //     const treasure = Math.floor(Math.random() * 9);
    //
    // }

    render() {
        let { spaces } = this.state

        return (
          <div>
            <center>
            <h1> Treasure Hunt </h1> 
            <h1>
                {this.state.end}
            </h1>
              <table>
                  <tbody>
                      <tr>
                              <td id = '0' onClick = {this.getLocation} >{spaces[0]}</td>
                              <td id = {1} onClick = {this.getLocation} >{spaces[1]}</td>
                              <td id = {2} onClick = {this.getLocation} >{spaces[2]}</td>
                      </tr>
                      <tr>
                              <td id = {3} onClick = {this.getLocation} >{spaces[3]}</td>
                              <td id = {4} onClick = {this.getLocation} >{spaces[4]}</td>
                              <td id = {5} onClick = {this.getLocation}>{spaces[5]}</td>
                      </tr>
                      <tr>
                              <td id = {6} onClick = {this.getLocation}>{spaces[6]}</td>
                              <td id = {7} onClick = {this.getLocation} >{spaces[7]}</td>
                              <td id = {8} onClick = {this.getLocation}>
                              {spaces[8]}</td>
                      </tr>
                  </tbody>
              </table>
              </center>
          </div>
        );
      }
    }


export default App;
