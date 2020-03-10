import React from "react"

const Card = props => {
    
return (
    <div>
     <img src= {props.avatar_url} alt = {props.avatar_url} />
     <h2>{props.name}</h2>
     <p>{props.location}</p>
     <p>{props.followers}</p>
     <p>{props.following}</p>
    </div>
     )
}

export default Card