import '../Cities/cities.css'
import { useDispatch, useSelector } from 'react-redux'
import hotelsActions from '../../redux/actions/hotelsActions'
import Swal from 'sweetalert2'
import React from 'react'



export default function MyCardShow(props) {
    const {token} = useSelector(store => store.userReducer)
    const dispatch = useDispatch()
    const { deleteMyShow, updateMyShow } = hotelsActions
    const { show } = props

    async function deleteShow() {
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
                        'Your file has been deleted.',
                        'success'
                    )
                    dispatch(deleteMyShow({id: show._id, token}))
                } else {
                    Swal.fire(
                        'Cancelled',
                        'Your file is safe :)',
                        'error'
                    )
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    async function updateShow() {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Update Show',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Description"id="Description" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Price"id="price" class="swal2-input">' +
                    '<input placeHolder="Date"id="date" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let description = document.getElementById('Description').value
                    let photo = document.getElementById('photo').value                  
                    let price = document.getElementById('price').value
                    let date = document.getElementById('date').value

                    let data = {
                        id: show._id,
                        shows: {
                        }
                    }
                    if (name !== '') {
                        data.shows.name = name
                    }
                    if (description !== '') {
                        data.shows.description = description
                    }
                    if (photo !== '') {
                        data.shows.photo = photo
                    }                   
                    if (price !== '') {
                        data.shows.price = price
                    }
                    if (date !== '') {
                        data.shows.date = date
                    }
                    dispatch(updateMyShow({data, token}))
                }
            })

            if (formValues) {
                Swal.fire(JSON.stringify(formValues))
            } else {
                Swal.fire('Cancelled')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='CityCard-container' >
            <img src={show.photo} alt={show.name} />
            <div className='CityCard-info'>
                <p>{show.name}</p>
                <p>Price: {show.price}$</p>
            </div>
            <div className='CityCard-details'>
                <a onClick={updateShow}>Edit</a>
                <a className='a2' onClick={deleteShow}>Delete</a>
            </div>
        </div>
    )
}