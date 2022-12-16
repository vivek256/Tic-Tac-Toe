import './App.css';
import React,{useState} from 'react';


const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'black'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}



function Game() {
  let i=0;

const [isXTrue,setIsXTrue] =useState(true);
  const [winner,setWinner]= useState('None')
  const [arr,setArr] = useState([null,null,null,null,null,null,null,null,null]);
  // const [val,setVal] = useState();

function checkWinner(newArr){

  if((newArr[2] === 'X' && newArr[4] === 'X' && newArr[6] === 'X')){
    setWinner('X')
  }

  if((newArr[0] === 'X' && newArr[4] === 'X' && newArr[8] === 'X')){
    setWinner('X')
  }

  if((newArr[2] === 'O' && newArr[4] === 'O' && newArr[6] === 'O')){
    setWinner('O')
  }

  if((newArr[0] === 'O' && newArr[4] === 'O' && newArr[8] === 'O')){
    setWinner('O')
  }

  for(let i=0;i< 9 ;i+=1){
      if((newArr[i] === 'X' && newArr[i+3] === 'X' && newArr[i+6] === 'X')){
        setWinner('X')
      }
      if((newArr[i] === 'X' && newArr[i+1] === 'X' && newArr[i+2] === 'X')){
        setWinner('X')
      }
      if((newArr[i] === 'O' && newArr[i+3] === 'O' && newArr[i+6] === 'O')){
        setWinner('O')
      }
      if((newArr[i] === 'O' && newArr[i+1] === 'O' && newArr[i+2] === 'O')){
        setWinner('O')
      }
    }
  
  
}
// function handleReset(){
//   setArr([null,null,null,null,null,null,null,null,null])
// }


  

function Square(props) {
 console.log('square');
function handleValue(event){
  console.log('handleValue')
  if( winner === 'None'){

    const newArr = arr.map((x,ind) => {
      if( x === null && ind === event.target.id-1){
        return isXTrue ? 'X' : 'O';
      }else if(x!== null ){
        return arr[ind];
      }else{
        return null;
      }
    })
    setIsXTrue(!isXTrue)
    setArr(newArr);
    checkWinner(newArr);
  }






}


  return (
    
    <button
      id= {(i+=1)/2}
      className="square"
      style={squareStyle} onClick={handleValue}>{props.value}
    </button>
    
  );
}
function Board() {
  console.log('in board')

  function setTheArray(arr){
    setWinner('None')
    setArr([null,null,null,null,null,null,null,null,null])
  }
  
  return (
 
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{isXTrue ? 'X' : 'O'}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner}</span></div>
      <button style={buttonStyle} onClick={(arr) => setTheArray(arr)}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square value={arr[0]}/>
          <Square value={arr[1]}/>
          <Square value={arr[2]}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={arr[3]}/>
          <Square value={arr[4]}/>
          <Square value={arr[5]}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={arr[6]}/>
          <Square value={arr[7]}/>
          <Square value={arr[8]}/>
        </div>
      </div>
    </div>
   
  );}





  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );

}

  


export default Game;