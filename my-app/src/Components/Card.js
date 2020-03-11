import React from "react";
import styled from "styled-components"

const TheDiv = styled.div`
width: 400px;
display: flex;
flex-direction: column;
background: lightblue;
justify-conetnt: center;
align-items: center;
margin: 2% auto;
border: red 2px solid;

`

const TheImg = styled.img`
width: 200px;
`



const Card = ({item}) => {
    
return (
    <TheDiv>
     <TheImg src= {item.avatar_url} alt = {item.avatar_url} />
     <h2>Name: {item.login}</h2>
     <p>Location: {item.location}</p>
     <p>Followers: {item.followers}</p>
     <p>Following: {item.following}</p>
    </TheDiv>
     )
}

export default Card