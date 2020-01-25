import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	//const storedArray = [localStorage.getItem('squareRowsConfig')];
	//console.log(storedArray, typeof storedArray);
	
	const [squareRows, setSquareRows] = useState( [
		[{ id : 'square0', state : false }, { id : 'square1', state : false }, { id : 'square2', state : false }], 
		[{ id : 'square3', state : false }, { id : 'square4', state : false }, { id : 'square5', state : false }], 
		[{ id : 'square6', state : false }, { id : 'square7', state : false }, { id : 'square8', state : false }]
	]);
	
	const toggleColor = ({ target }) => {		
		const newRows = squareRows.map((row, idx) => {
			return row.map((square, idx) => {
				if(target.id === square.id){
					return {id : (square.id), state : (!square.state)}
				}
				return {id : (square.id), state : (square.state)}
			});
		});
		//localStorage.setItem('squareRowsConfig', JSON.stringify(newRows));
		//console.log(localStorage.getItem('squareRowsConfig'));
		setSquareRows(newRows);
	};
	
	return (
		<div className="App">{
			squareRows.map((row, idx) => {
				return (
					<div className = 'row' key = {`row${ idx + 1 }`}>{
						row.map((square, idx) => {
							return (
								<div id = { square.id } key = { square.id } className = { square.state ? 'square color' : 'square' } onClick = { (event) => toggleColor(event) }></div>
							)
						})
					}</div>
				)
			})
		}</div>
	);
}

export default App;
