import './cities.css'
import { useDispatch } from 'react-redux'
import citiesActions from '../../redux/actions/citiesActions'
import Swal from 'sweetalert2'
import React from 'react'



export default function MyCard(props) {

    const dispatch = useDispatch()
    const { deleteMyTineraries, updateMyTineraries } = citiesActions
    const { tinerary } = props

    async function deleteTinerary() {
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
                    dispatch(deleteMyTineraries(tinerary._id))
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    async function updateTinerary() {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Update Tinerary',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Description"id="Description" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Photo Url 2"id="photo2" class="swal2-input">' +
                    '<input placeHolder="Photo Url 3"id="photo3" class="swal2-input">' +
                    '<input placeHolder="Price"id="price" class="swal2-input">' +
                    '<input placeHolder="Duration"id="duration" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let description = document.getElementById('Description').value
                    let photo = document.getElementById('photo').value
                    let photo2 = document.getElementById('photo2').value
                    let photo3 = document.getElementById('photo3').value
                    let price = document.getElementById('price').value
                    let duration = document.getElementById('duration').value

                    let data = {
                        id: tinerary._id,
                        tinerarie: {
                        }
                    }
                    if (name !== '') {
                        data.tinerarie.name = name
                    }
                    if (description !== '') {
                        data.tinerarie.description = description
                    }
                    if (photo !== '') {
                        data.tinerarie.photo = photo
                    }
                    if (photo2 !== '') {
                        data.tinerarie.photo2 = photo2
                    }
                    if (photo3 !== '') {
                        data.tinerarie.photo3 = photo3
                    }
                    if (price !== '') {
                        data.tinerarie.price = price
                    }
                    if (duration !== '') {
                        data.tinerarie.duration = duration
                    }
                    dispatch(updateMyTineraries(data))
                }
            })

            if (formValues) {
                Swal.fire(JSON.stringify(formValues))
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='CityCard-container' >
            <img src={tinerary.photo} alt={tinerary.name} />
            <div className='CityCard-info'>
                <p>{tinerary.name}</p>
                <p>Duration: {tinerary.duration} hrs</p>
            </div>
            <div className='CityCard-details'>
                <a onClick={updateTinerary}>Edit</a>
                <a className='a2' onClick={deleteTinerary}>Delete</a>
            </div>
        </div>
    )
}