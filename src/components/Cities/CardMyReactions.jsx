import './cities.css'
import React from 'react'


export default function MyCard(props) {

    const { tinerary, photo, name, onClick, idR } = props
    

    return (
        <div className='reactionCard-container' >
            <img src={tinerary.photo} alt={tinerary.name}
            id={ name === 'love' ? ('love')
            : name === 'like' ? ('like')
            : name === 'not-like' ? ('not-like')
            : name === 'surprise' ? ('surprise')
            : null
            } />
            <div className='reactionCard-info'>
                <p>{tinerary.name}</p>
                <img src={photo} alt={name} name={idR} onClick={onClick}  />
            </div>
        </div>
    )
}   