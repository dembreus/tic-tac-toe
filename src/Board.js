import React, {Component} from 'react';
import './App.css';
import XPiece from './XPiece'
import OPiece from './OPiece'
import BlankPiece from './BlankPiece'

class Board extends Component {

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <OPiece/>
                        <BlankPiece/>
                        <XPiece/>
                    </tr>
                    <tr>
                        <BlankPiece/>
                        <OPiece/>
                        <BlankPiece/>
                    </tr>
                    <tr>
                        <XPiece/>
                        <BlankPiece/>
                        <XPiece/>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Board;