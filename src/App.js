import React, {Component} from 'react';
import './App.css';
import Board from './Board'
import BlankPiece from './BlankPiece'
import XPiece from './XPiece'
import OPiece from './OPiece'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Board/>
            </div>
        );
    }
}

export default App;
