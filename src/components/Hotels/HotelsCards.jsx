import '../Cities/cities.css'
import {Link as LinkRouter} from 'react-router-dom'

export default function HotelCard(props) {
    const { hotel, id } = props
    return (
        <div className='CityCard-container' key={hotel.city}>
            <img className="img-card"
                    src={hotel.photo[0]}
                        alt={hotel.name} />
            <div className='CityCard-info'>
                <p>{hotel.name}</p>
                <p>Capacity: {hotel.capacity}</p>
            </div>
            <div className='CityCard-details'>
                <LinkRouter to={`/hotels/${id}`}>See more</LinkRouter>
            </div>
        </div>
)
}



