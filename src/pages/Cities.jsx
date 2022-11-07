import React, { useRef, useState, useEffect } from 'react'
import Checkbox from '../components/Checkbox'
import CityCard from '../components/Cities/CityCard'

export default function Cities() {

    let [ciudades, setCiudades] = useState([])
    let [filteredCities, setCiudadesFiltradas] = useState([])
    const America = useRef()
    const Europa = useRef()
    const searchId = useRef()

    const continentes = [ America, Europa]

    useEffect(() => {
        fetch('../cities.json')
            .then(response => response.json())
            .then(response => setCiudades(response))

            fetch('../cities.json')
            .then(response => response.json())
            .then(response => setCiudadesFiltradas(response))
    }, [])

    let checkCities = [...new Set(ciudades.map((ciudad) => ciudad.continent))]

    function filterCheckCards(){

        let checkFiltered = filterCheck()
        let searchFiltered = filterSearch(checkFiltered)
        setCiudadesFiltradas(searchFiltered)
        localStorage.setItem('filteredCities', JSON.stringify(searchFiltered))
    }

    function filterCheck(){
        let checks = []
        continentes.filter((continente) => continente.current?.checked).map((continente) => checks.push(continente.current.value))
        let filteredCities = ciudades.filter((ciudad) => checks.includes(ciudad.continent))

        if(checks.length === 0){
            return ciudades
        }
        return filteredCities
    }

    function filterSearch(array){
        if(searchId.current.value !== ''){
            let filteredCities = array.filter((ciudad) => ciudad.name.toLowerCase().includes(searchId.current.value.toLowerCase()))
            return filteredCities
        }else{
            return array
        }
    }

    return (
        <div className='cont-cities'>
            <div className='wrap flex center w-100 m-1'>
                <div className='flex justify-around mx-1 gap-2'>
                    {checkCities.map((continente, index) => {
                        return <Checkbox continent={continente} value={continente} refId={continentes[index]} fx={filterCheckCards}/>
                    })}
                </div>
                <div className='input-text'>
                    <input type="text" placeholder="Search" ref={searchId} onChange={filterCheckCards} />
                </div>
            </div>
            <div className='Cities-card-container'>
                {filteredCities.map((city) => {
                    return <CityCard city={city} />
                })}
            </div>
        </div>
    )
}