import React  from 'react'
import { useEffect } from 'react'
import '../components/form/form.css'
import hotelsActions from '../redux/actions/hotelsActions'
import { useDispatch, useSelector } from 'react-redux'
import MyCardShow from '../components/Hotels/MyCardShow'

export default function MyShows() {

    const dispatch = useDispatch()
    const {myShows} = useSelector(store => store.hotelsReducer)
    const {getMyShow} = hotelsActions

    const { id } = useSelector(store => store.userReducer)
    
    useEffect(() => {
        dispatch(getMyShow(id))
        // eslint-disable-next-line
    },[])
    console.log(myShows);
    return (
      <div className="cont-h2">
        <h2>My Shows</h2>
        <div className='cont-cities'>
          <div className='Cities-card-container'>
            {myShows.length > 0 && (
              myShows.map((show) => {
                return <MyCardShow show={show} key={show._id} id={show._id} />;
              })
            ) }
          </div>
        </div>
      </div>
      );
}