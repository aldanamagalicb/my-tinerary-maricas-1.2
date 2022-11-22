import React  from 'react'
import { useEffect } from 'react'
import '../components/form/form.css'
import hotelsActions from '../redux/actions/hotelsActions'
import { useDispatch, useSelector } from 'react-redux'
import NotFound from './NotFound'
import MyCardAdmin from '../components/Hotels/MyCardAdmin'

export default function MyHotels() {

    const dispatch = useDispatch()
    const {hotelsAdmin} = useSelector(store => store.hotelsReducer)
    const {getMyHotels} = hotelsActions

        let userId = '636d82c66a32c7c4c029d58a'
    
    useEffect(() => {
        dispatch(getMyHotels(userId))
        // eslint-disable-next-line
    },[])
    
    return (
        <div className="cont-cities">      
        <h2>My Hotels</h2>  
          <div className='Cities-card-container'>
            {hotelsAdmin.length > 0 ? (
              hotelsAdmin.map((hotel) => {
                return <MyCardAdmin hotel={hotel} key={hotel._id} id={hotel._id} />;
              })
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      );
}