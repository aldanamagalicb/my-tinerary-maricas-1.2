import React, { useRef, useState, useEffect } from 'react'
import Checkbox from '../components/Checkbox'
import CityCard from '../components/Cities/CityCard'
import { useSelector, useDispatch } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import NotFound from './NotFound'

export default function Cities() {


    let {allCities, continentCities, searchInput, checkBoxes, checkedCities } = useSelector(store => store.citiesReducer)
    const dispatch = useDispatch()
    const {getCities, getContinentCities} = citiesActions

    let [time, setTime] = useState(true)

    if(time){
        allCities = null
    }

    let [checkboxes, setCheckboxes] = useState([])
    const searchId = useRef()
    const input = useRef()

    useEffect(() => { 
        
        setTimeout(() => {
            setTime(false)
        }, 1000);
        
        if (searchInput || checkBoxes){
            let aux = {
                search: searchInput,
                continents: checkBoxes,
                continentChecked: checkedCities
            }
            dispatch(getContinentCities(aux))
            searchId.current.value = searchInput
            if (checkedCities){
                checkedCities.forEach(check => {
                    let checked = Array.from(input.current).find(input => input.value === check)
                    checked.checked = true
                })
            }
        } else {
            dispatch(getCities())
        }

        // eslint-disable-next-line
    },[])


    function filterCheck(check){
        let checks = []
        if(check.target.checked){
            checks = [...checkedCities, check.target.value]
    }else{
        checks = checkboxes.filter((checkbox) => checkbox !== check.target.value)
    }
    setCheckboxes(checks)
    return checks
}

    function filterCities(cityFil){
        let check = filterCheck(cityFil)
        let url = check.map( (continent) => `continent=${continent}`).join('&');
        let data = {
            continents: url,
            search: searchId.current.value,
            continentChecked: check
        }
        dispatch(getContinentCities(data))
    }


    return (
        <div className='cont-cities'>
            <div className='wrap flex center w-100 m-1'>
                <form ref={input} className='flex justify-around mx-1 gap-2'>
                    {continentCities.map((continent) => {
                        return <Checkbox continent={continent} value={continent} fx={filterCities}/>
                        }
                    )}
                </form>
                <div className='input-text'>
                    <input type="text" placeholder="Search" ref={searchId} onChange={filterCities} />
                </div>
            </div>
                <div className='Cities-card-container'>
                    {
                        allCities !== null ?

                        allCities.length > 0 ? allCities?.map((city) => {
                        return <CityCard city={city} id={city._id} />
                    }) : <NotFound />

                        : <>
                            <article class="d-flex flex-column align-items-center">
                                <img src="https://media4.giphy.com/media/IIkMsHnwjWmxzbGki9/200w.webp?cid=ecf05e474ox5rhx1zdwa5nz8db02wuslpxnmhlb9syirkk7u&rid=200w.webp&ct=s" alt="error" class="gif img-fluid " width="385px" />
                            </article>
                        </>
                }
                </div>
        </div>
    )
}