import React from "react";
import { useDispatch } from 'react-redux'
import userActions from '../../redux/actions/userActions'
import Swal from 'sweetalert2'

export default function Details(props) {
  const dispatch = useDispatch()
  const { updateMyProfile } = userActions
  let { user } = props;
 

  async function updateUser() {
    try {
      const { value: formValues } = await Swal.fire({
        title: 'Update User',
        showCancelButton: true,
        confirmButtonText: 'Update',
        html:
          '<input placeHolder="Name" id="name" class="swal2-input">' +
          '<input placeHolder="LastName"id="lastName" class="swal2-input">' +
          '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
          '<input placeHolder="Age"id="age" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          let name = document.getElementById('name').value
          let lastName = document.getElementById('lastName').value
          let photo = document.getElementById('photo').value
          let age = document.getElementById('age').value

          let data = {
            id: user._id,     
            user: {
            }
          }
          if (name !== '') {
            data.user.name = name
          }
          if (lastName !== '') {
            data.user.lastName = lastName
          }
          if (photo !== '') {
            data.user.photo = photo
          }          
          if (age !== '') {
            data.user.age = age
          }          
          dispatch(updateMyProfile(data))
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
    <div className="cont-card-detail">
      <div className="container-img-detail">
        <img src={user.photo} alt={user.name} />
      </div>
      <h1>{user.name} {user.lastName}</h1>
      <div>
        <h3>Age: {user.age}</h3>
        <button id="boton-editeprofile" onClick={updateUser}>Edit my Profile</button>
      </div>
    </div>
  );
}