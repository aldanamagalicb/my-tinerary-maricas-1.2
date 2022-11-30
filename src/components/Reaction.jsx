import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../redux/actions/reactionActions'


export default function Reaction(props) {
    const { token, id } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    let { itineraryid } = props
    const { getReaction, updateReaction } = reactionActions
    const [reactions, setReaction] = useState([])
    const [like, setLike] = useState(true)


    useEffect(() => {
        reactioness()

    }, [like])

    async function reactioness() {
        let res = await dispatch(getReaction(itineraryid))
        setReaction(res.payload.response)
    }

    async function likeItinerary(e) {
        let name
        let icon
        let iconBack
        reactions.data.map(react => {
            if (react.name === e.target.name) {
                name = react.name
                icon = react.icon
                iconBack = react.iconBack
            }
        })

        let data = {
            token,
            id: itineraryid,
            name,
        }
        try {
            await dispatch(updateReaction(data))
            setLike(!like)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            {reactions.success &&
                reactions.data.map((reaction) => {
                    let res = reaction.userId.find(user => user._id === id)
                    return (
                    res ? (
                        <>
                        <img src={reaction.icon} name={reaction.name} alt={reaction.name} key={reaction._id} width='25px' onClick={likeItinerary} />
                        <p>{reactions.lengthOfReactions[reaction.name]}</p>
                        </>
                    ) : (
                        <>
                        <img src={reaction.iconBack} name={reaction.name} alt={reaction.name} key={reaction._id} width='25px' onClick={likeItinerary} />
                        <p>{reactions.lengthOfReactions[reaction.name]}</p>
                        </>
                    ))
                })
            }
        </>
    )
}
