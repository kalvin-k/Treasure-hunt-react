import React, { Component } from 'react'


class Board extends Component {
    render() {
        return (
          <div>
          <center>
          <h1> Treasure Hunt </h1>
          <h1>
              {this.props.end}
          </h1>
          <h2> Counter: {this.props.counter} </h2>
          <h2> Win Streak: {this.props.score} </h2>
          <h2> High Score: {this.props.highScore} </h2> 
            <table>
                <tbody>
                    <tr>
                            <td id = '0' onClick = {this.props.onclicking} >{this.props.spaces[0]}</td>
                            <td id = {1} onClick = {this.props.onclicking} >{this.props.spaces[1]}</td>
                            <td id = {2} onClick = {this.props.onclicking} >{this.props.spaces[2]}</td>
                    </tr>
                    <tr>
                            <td id = {3} onClick = {this.props.onclicking} >{this.props.spaces[3]}</td>
                            <td id = {4} onClick = {this.props.onclicking} >{this.props.spaces[4]}</td>
                            <td id = {5} onClick = {this.props.onclicking}>{this.props.spaces[5]}</td>
                    </tr>
                    <tr>
                            <td id = {6} onClick = {this.props.onclicking}>{this.props.spaces[6]}</td>
                            <td id = {7} onClick = {this.props.onclicking} >{this.props.spaces[7]}</td>
                            <td id = {8} onClick = {this.props.onclicking}>
                            {this.props.spaces[8]}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick = {this.props.boardReset}>
                THIS IS OUR BUTTON
            </button>
            </center>
          </div>
        );
      }
    }


export default Board;
