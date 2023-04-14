import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Card, Container } from "react-bootstrap"
import Forcast from "./Forcast"
import { useDispatch, useSelector } from "react-redux"
import { type } from "@testing-library/user-event/dist/type"
import * as Icon from 'react-bootstrap-icons';
const NameCity = () => {
    const selected = useSelector((state) => state.preference.content.selected)
    const dispatch = useDispatch()
    const params = useParams()
    // const [selected, setSelected] = useState(props.selected)

    const name = params.nameCity
    const lat = params.lat

    const lon = params.lon

    const [weather, setWeather] = useState([])
    const [temp, setTemp] = useState()
    const [max, setMax] = useState()
    const [min, setMin] = useState()
    const [icon, setIcon] = useState()
    const [actual, setActual] = useState()
    const [wind, setWind] = useState()
    const [humidity, sethumidity] = useState()

    let Key = "b393dd8cb61c7b8713fdf8753c9dc653"
    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=`

    // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b393dd8cb61c7b8713fdf8753c9dc653

    const cityWeather = async () => {
        try {
            let resp = await fetch(API + Key)
            if (resp.ok) {
                let data = await resp.json()

                setWeather(data)

                setTemp(Math.trunc(data.main.temp - 273))
                setIcon(data.weather[0].icon)
                setActual(data.weather[0].main)
                setMax(Math.trunc(data.main.temp_max - 273))
                setMin(Math.trunc(data.main.temp_min - 273))
                setWind(data.wind.speed * 1.6)
                sethumidity(data.main.humidity)


            }
        } catch (error) {

        }

    }

    useEffect(() => {
        cityWeather()
    }, [])
    useEffect(() => {
        cityWeather()

    }, [temp, actual, icon])
    return (
        <Container>
            <div className="d-flex w-75 mx-auto bg-secondary opacity-75 p-3 border border-3">
                <div className="w-25 justify-content-center align-items-center">
                    <img className="w-100 " src={`https://openweathermap.org/img/w/${icon}.png`} />
                </div>

                <div className="w-75">
                    <Card.Title className="p-3">{name}</Card.Title>


                    <p className="font-weight-bold">{actual}</p>
                    <p>Temp max: {max}°C</p>
                    <p>Temp Min: {min}°C</p>
                    <p>Wind: {wind} Km/h</p>
                    <p>Umidity:{humidity}%</p>
                    <p>Temp. Percepita :{temp}°C</p>



                    {selected ? <Icon.StarFill
                        onClick={(() => {
                            dispatch({

                                type: "REMOVE",

                                payload: weather,
                                selected: false,

                            })
                            // setSelected(false)
                        })} ></Icon.StarFill> : <Icon.Star onClick={(() => {
                            dispatch({

                                type: "ADD_PREF",

                                payload: weather,
                                selected: true,


                            })
                            // setSelected(true)
                        })} />}</div>

            </div>
            <Forcast lat={lat} lon={lon} />
        </Container>
    )


}

export default NameCity