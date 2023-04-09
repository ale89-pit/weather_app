import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Card, Container } from "react-bootstrap"
import Forcast from "./Forcast"
import { useDispatch, useSelector } from "react-redux"
import { type } from "@testing-library/user-event/dist/type"
const NameCity = () => {
    const preference = useSelector((state) => state.preference)
    const dispatch = useDispatch()
    const params = useParams()

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
            <div className="d-flex w-100">
                <div className="w-50">
                    <img className="w-100" src={`https://openweathermap.org/img/w/${icon}.png`} />
                </div>

                <div className="w-50">
                    <Card.Title>{name}</Card.Title>


                    <Card.Text className="font-weight-bold">{actual}</Card.Text>
                    <Card.Text>Temp max: {max}</Card.Text>
                    <Card.Text>Temp Min: {min}</Card.Text>
                    <Card.Text>Wind: {wind}</Card.Text>
                    <Card.Text>Umidity:{humidity}%</Card.Text>
                    <Card.Text>Temp. Percepita :{temp}</Card.Text>


                </div>
                <Button onClick={(() => {
                    dispatch({

                        type: "ADD_PREF",
                        payload: weather,
                    })
                })}>add</Button>
            </div>
            <Forcast lat={lat} lon={lon} />
        </Container>
    )


}

export default NameCity