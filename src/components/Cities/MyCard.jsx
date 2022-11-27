import './cities.css'
import { useDispatch, useSelector } from 'react-redux'
import citiesActions from '../../redux/actions/citiesActions'
import Swal from 'sweetalert2'
import React from 'react'



export default function MyCard(props) {
    const {token} = useSelector(store => store.userReducer)
    const dispatch = useDispatch()
    const { deleteMyCity, updateMyCity } = citiesActions
    const { city } = props

    async function deleteCity() {
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
                    dispatch(deleteMyCity({id: city._id, token}))
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    async function updateCity() {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Update City',
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Continent"id="continent" class="swal2-input">' +
                    '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
                    '<input placeHolder="Population"id="population" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let continent = document.getElementById('continent').value
                    let photo = document.getElementById('photo').value
                    let population = document.getElementById('population').value

                    let data = {
                        id: city._id,
                        citie: {
                        }
                    }
                    if (name !== '') {
                        data.citie.name = name
                    }
                    if (continent !== '') {
                        data.citie.continent = continent
                    }
                    if (photo !== '') {
                        data.citie.photo = photo
                    }
                    if (population !== '') {
                        data.citie.population = population
                    }
                    dispatch(updateMyCity(data))
                    // window.location.reload()
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
            <img src={city.photo} alt={city.name} />
            <div className='CityCard-info'>
                <p>{city.name}</p>
                <p>{city.continent}</p>
            </div>
            <div className='CityCard-details'>
                <a onClick={updateCity}>Edit</a>
                <a className='a2' onClick={deleteCity}>Delete</a>
            </div>
        </div>
    )
}