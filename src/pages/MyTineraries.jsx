import React from 'react'
import { useEffect} from 'react'
import MyCardTinerary from '../components/Cities/MyCardTinerary'
import '../components/form/form.css'
import citiesActions from '../redux/actions/citiesActions'
import { useDispatch, useSelector } from 'react-redux'



export default function MyTineraries() {
    const dispatch = useDispatch()
    const { myTineraries } = useSelector(store => store.citiesReducer)
    const { id } = useSelector(store => store.userReducer)
    const { getMyTineraries } = citiesActions

    useEffect(() => {
        dispatch(getMyTineraries(id))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="cont-h2">
            <h2>My Tineraries</h2>
            <div className='cont-cities'>
                <div className='Cities-card-container'>
                    {myTineraries.length > 0 && (myTineraries.map((tinerary) => {
                        return <MyCardTinerary tinerary={tinerary} id={tinerary._id}  />
                    }))
                    }
                </div>
            </div>
        </div>
    )
}