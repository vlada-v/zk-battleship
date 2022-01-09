import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square" style={{background:
                (this.props.filled ? 'black' : 'white')}}
                onClick = {this.props.onClick}>
            </button>
        );
    }
}
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(this.props.size*this.props.size).fill(false)
        };
    }

    handleClick(i) {
        console.log(i);
        const squares = this.state.squares.slice();
        squares[i] = !squares[i];
        this.setState({squares: squares})
    }
    
    renderSquare(i) {
        return <Square filled = {this.state.squares[i]} 
                    onClick = {() => this.handleClick(i)}
                    key = {i}/>;
    }
  
    generateRow(n, offset) {
        return (
            <div className="board-row" key={offset}>
                {Array.from(Array(n).keys()).map(i => this.renderSquare(i+offset))}
            </div>
        );
    };

    generateBoard(n) {
        return (
            <div>
                {Array.from(Array(n).keys()).map(i => this.generateRow(n,n*i))}
            </div>
        );
    };

    render() {
        
        

        return (this.generateBoard(this.props.size));
    }
  }
  
  // ========================================
  
ReactDOM.render(
<Board size={5}/>,
document.getElementById('root')
);
