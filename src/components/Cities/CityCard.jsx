// import React from 'react'
// import './cities.css'

// export default function CityCard(props) {
//     let { city } = props

//     return (
//         <div className='cardCity'>
//             <div className='card-image'>
//                 <img src={city.photo} alt={city.name} />
//             </div>
//             <div className='card-content'>
//                 <h3>{city.name}</h3>
//                 <p>{city.continent}</p>
//                 <p>{city.population}</p>
//             </div>
//             <div className='card-action'>
//                 <a href='#'>More Info</a>
//             </div>
//         </div>
//     )
// }
import './cities.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function CityCard(props) {
    const {city} = props
    return (
        <div className='CityCard-container' key={city.city}>
            <img src={city.photo} alt={city.name}/>
            <div className='CityCard-info'>
                <p>{city.name}</p>
                <p>{city.continent}</p>
            </div>
            <div className='CityCard-details'>
                <LinkRouter to={`/cities/${city._id}`}>See more</LinkRouter>
            </div>
        </div>
 )
}