import React from 'react'
import { useEffect} from 'react'
import CardMyReactions from '../components/Cities/CardMyReactions'
import '../components/form/form.css'
import reactionActions from '../redux/actions/reactionActions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export default function MyReactions() {
    const dispatch = useDispatch()
    const { id, token } = useSelector(store => store.userReducer)
    const {reaction} = useSelector(store => store.reactionReducer)
    const { getUserReactions, deleteReaction } = reactionActions

    useEffect(() => {
        reactioness()
        // eslint-disable-next-line
    }, [])
    
    async function reactioness() {
        try {
            
            await dispatch(getUserReactions(id, token))
        } catch (error) {
            console.log(error)
        }
    }

    async function pullReaction(e) {
        try {  
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your reaction has been deleted.',
                        'success'
                        )
                        dispatch(deleteReaction({id: e.target.name, token}))
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="cont-h2">
            <h2>My Reactions</h2>
            <div className='cont-cities'>
                <div className='Cities-card-container'>
                    {reaction.length > 0 && (reaction.map((elements) => {
                        return <CardMyReactions event={elements.itineraryId || elements.showId} key={elements._id} idR={elements._id} name={elements.name} photo={elements.icon} onClick={pullReaction} />
                    }))
                    }
                </div>
            </div>
        </div>
    )
}   