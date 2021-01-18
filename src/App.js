import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Card from "./Card"
import styled from "styled-components";

const App = () => {
const [charData, setCharData] = useState([]);

useEffect(() => {
  axios
    .get("https://rickandmortyapi.com/api/character/?page=2")
    .then((res) => {
      setCharData(res.data.results);
    })
    .catch((err) => console.log(err));
}, []);

const StyledDiv = styled.div`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: flex-start;
	`;



return (
  <div className="App">
    <h1 className="Header">Characters</h1>
    <StyledDiv>
    {charData.map((char) => {
      return <Card character = {char} />
    })}
    </StyledDiv>
  </div>
)
}

export default App;
