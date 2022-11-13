import './cities.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function CityCard(props) {
    const {city, id} = props
    return (
        <div className='CityCard-container' key={city.city}>
            <img src={city.photo} alt={city.name}/>
            <div className='CityCard-info'>
                <p>{city.name}</p>
                <p>{city.continent}</p>
            </div>
            <div className='CityCard-details'>
                <LinkRouter to={`/cities/${id}`}>See more</LinkRouter>
            </div>
        </div>
)
}