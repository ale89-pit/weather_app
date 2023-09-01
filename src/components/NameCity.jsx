import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Card, Container, Spinner } from "react-bootstrap"
import Forcast from "./Forcast"
import { useDispatch, useSelector } from "react-redux"
import { type } from "@testing-library/user-event/dist/type"
import * as Icon from 'react-bootstrap-icons';
import { format } from 'date-fns';
const NameCity = () => {
    const selected = useSelector((state) => state.preference.content.selected)
    const dispatch = useDispatch()
    const params = useParams()
    const [loading, setloading] = useState(true)
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

    const API_KEY_WEATHER2 = "Mu2uvB1T1eAvbZkcutyUTDg7TJR2GJLc"
    const KEY = params.key
    console.log(KEY)
    const API_2 = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${KEY}?apikey=${API_KEY_WEATHER2}&language=it-it&details=true&metric=true`

    const cityWeather2 = async () => {
        try {
            let resp = await fetch(API_2)
            console.log("fetch")
            if (resp.ok) {
                let data = await resp.json()
                console.log(data)
                setWeather(data)
                setloading(false)
                console.log(data.DailyForecasts[0].Day.Icon)


                // setIcon(data.DailyForcasts[0].Day.Icon)
                // setActual(data.DailyForecasts[0].main)
                // setMax(data.DailyForecasts[0])
                // setMin(data.DailyForecasts[0])
                // setWind(data.DailyForecasts[0])
                // sethumidity(data.DailyForecasts[0])



            }
        } catch (error) {

        }

    }

    useEffect(() => {
        cityWeather2()
    }, [])
    useEffect(() => {
        cityWeather2()
        console.log(weather)
    }, [KEY, loading])

    return (
        <Container>
            {/* {loading ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> :
                <div className=" w-75 mx-auto bg-light rounded p-3 border border-3">
                    <Card.Title className="text-center display-5 my-2">{name}</Card.Title>
                    <div className="d-flex justify-content-center align-items-start m-2">

                        <div className="w-50 justify-content-center align-items-center">

                            <img className="w-100 mt-2" src={`https://developer.accuweather.com/sites/default/files/${weather.DailyForecasts[0].Day.Icon < 10 ? "0" + weather.DailyForecasts[0].Day.Icon : weather.DailyForecasts[0].Day.Icon}-s.png`} />
                            <div className="d-flex flex-column">
                                <span>Sorge : {format(new Date(weather.DailyForecasts[0].Sun.Rise), "HH:mm")}</span>
                                <span>Tramonta : {format(new Date(weather.DailyForecasts[0].Sun.Set), "HH:mm")}</span>
                            </div>
                        </div>

                        <div className="w-50">
                            <Card.Title className="p-3">Giorno</Card.Title>


                            <p className="font-weight-bold">{actual}</p>
                            <p>Temp max: {weather.DailyForecasts[0].Temperature.Maximum.Value}°C</p>
                            <p>Temp Min: {weather.DailyForecasts[0].Temperature.Minimum.Value}°C</p>
                            <p>Wind: {weather.DailyForecasts[0].Day.Wind.Speed.Value} {weather.DailyForecasts[0].Day.Wind.Speed.Unit}  {weather.DailyForecasts[0].Day.Wind.Direction.Localized} </p>





                        </div>
                        <div className="w-50 justify-content-center align-items-center">

                            <img className="w-100 mt-2" src={`https://developer.accuweather.com/sites/default/files/${weather.DailyForecasts[0].Night.Icon < 10 ? "0" + weather.DailyForecasts[0].Night.Icon : weather.DailyForecasts[0].Night.Icon}-s.png`} />
                            <div className="d-flex flex-column">
                                <span>Sorge : {format(new Date(weather.DailyForecasts[0].Moon.Rise), "HH:mm")}</span>
                                <span>Tramonta : {format(new Date(weather.DailyForecasts[0].Moon.Set), "HH:mm")}</span>
                            </div>
                        </div>

                        <div className="w-50">
                            <Card.Title className="p-3">Notte</Card.Title>


                            <p className="font-weight-bold">{actual}</p>
                            <p>Temp max: {weather.DailyForecasts[0].Temperature.Maximum.Value}°C</p>
                            <p>Temp Min: {weather.DailyForecasts[0].Temperature.Minimum.Value}°C</p>
                            <p>Wind: {weather.DailyForecasts[0].Night.Wind.Speed.Value} {weather.DailyForecasts[0].Night.Wind.Speed.Unit}  {weather.DailyForecasts[0].Night.Wind.Direction.Localized} </p>





                        </div>
                    </div>
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
                        })} />}
                </div>} */}
            <Card className="mx-auto mt-4 py-5 px-32 ">
                <h4>Nome città</h4>
            </Card>

            <Forcast lat={lat} lon={lon} />
        </Container >
    )


}

export default NameCity