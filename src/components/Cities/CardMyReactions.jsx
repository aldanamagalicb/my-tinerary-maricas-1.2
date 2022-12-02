import './cities.css'
import React from 'react'


export default function MyCard(props) {

    const { event, photo, name, onClick, idR } = props
    

    return (
        <div className='reactionCard-container' >
            <img src={event.photo} alt={event.name}
            id={ name === 'love' ? ('love')
            : name === 'like' ? ('like')
            : name === 'not-like' ? ('not-like')
            : name === 'surprise' ? ('surprise')
            : null
            } />
            <div className='reactionCard-info'>
                <p>{event.name}</p>
                <img src={photo} alt={name} name={idR} onClick={onClick}  />
            </div>
        </div>
    )
}   