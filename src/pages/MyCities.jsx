import React from 'react'
import { useEffect } from 'react'
import MyCard from '../components/Cities/MyCard'
import '../components/form/form.css'
import citiesActions from '../redux/actions/citiesActions'
import { useDispatch, useSelector } from 'react-redux'

export default function MyCities() {

    const dispatch = useDispatch()
    const {myCities} = useSelector(store => store.citiesReducer)
    const {id} = useSelector(store => store.userReducer)
    const {getMyCities} = citiesActions


    useEffect(() => {
        dispatch(getMyCities(id))
        // eslint-disable-next-line
    },[])


    return (
        <div className="cont-h2">
            <h2>My Cities</h2>
            <div className='cont-cities'>
                <div className='Cities-card-container'>
                    {myCities.length > 0 && (myCities.map((city) => {
                        return <MyCard city={city} id={city._id}  />
                    }))}
                </div>
            </div>
        </div>

    )
}