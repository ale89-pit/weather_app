import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { IoThermometerOutline } from "react-icons/io5"
import { BiWind } from "react-icons/bi"
import { FiCompass } from "react-icons/fi"
import { format } from "date-fns"
import { utcToZonedTime } from 'date-fns-tz';
import { useParams } from "react-router-dom"
import Forcast from "./Forcast"
import ForcastHours from "./ForcastHours"
import { useDispatch } from "react-redux"


const CardResultSearch = ({ weather }) => {
    console.log(weather)
    const dispatch = useDispatch()
    const params = useParams()
    const name = params.nameCity
    const lat = params.lat
    const lon = params.lon
    const KEY = params.key
    const timezone = localStorage.getItem("timezone")
    let sunRise = new Date(utcToZonedTime(weather.Sun.Rise, timezone))
    let sunSet = new Date(utcToZonedTime(weather.Sun.Set, timezone))
    let moonRise = new Date(utcToZonedTime(weather.Moon.Rise, timezone))
    let moonSet = new Date(utcToZonedTime(weather.Moon.Set, timezone))
    console.log(format(sunRise, "HH:mm", { timezone }))

    return (
        <>
            <Container className=" mx-auto my-4 bg-light rounded p-3 border border-3 overflow-hidden">
                <Card.Title className="text-center display-5 my-2">{name}</Card.Title>




                <Card.Title className="p-3 text-center text-secondary opacity-50">{format(new Date(weather.Date), "EEEE  dd MMMM yyyy")}</Card.Title>
                <Row className="d-flex ">
                    <Col xs={12} md={4} className="d-flex flex-column justify-content-center align-items-center mx-auto">
                        <p className="align-self-center fs-3">{weather.Day.IconPhrase}</p>
                        <div className="d-flex justify-content-center align-items-start">
                            <img className="w-100 mt-2"

                                // src="https://developer.accuweather.com/sites/default/files/01-s.png"
                                src={`https://developer.accuweather.com/sites/default/files/${weather.Day.Icon < 10 ? "0" + weather.Day.Icon : weather.Day.Icon}-s.png`}
                            />

                            <div className="w-100 font-size align-self-end">
                                {/* {actual} */}

                                <p><IoThermometerOutline /> Max:
                                    {weather.Temperature.Maximum.Value}°C
                                </p>
                                <p><IoThermometerOutline /> Min:
                                    {weather.Temperature.Minimum.Value}°C
                                </p>
                                <p><BiWind /> Wind:
                                    {weather.Day.Wind.Speed.Value} {weather.Day.Wind.Speed.Unit}
                                    {'\u00A0'}
                                    <FiCompass />
                                    {weather.Day.Wind.Direction.Localized}
                                </p>
                            </div>
                        </div>



                    </Col>
                    <Col xs={12} md={7} >
                        <ForcastHours />
                    </Col>
                </Row>

                <div className="w-100 d-flex justify-content-center align-items-center ">
                    <div className="w-100 d-flex justify-content-center align-items-center">

                        <img className=" mt-2"

                            // src="https://developer.accuweather.com/sites/default/files/01-s.png"
                            src={`https://developer.accuweather.com/sites/default/files/01-s.png`}
                        />

                        <div className="d-flex gap-2 font-size text-secondary">
                            <span>
                                Sorge {format(sunRise, "HH:mm", { timezone })}
                                {/* Rise {format(new Date(weather.Sun.EpochRise), "HH:mm")} */}
                            </span>
                            <br />
                            <span>Tramonta {format(sunSet, "HH:mm", { timezone })}
                            </span>
                        </div>
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">

                        <img className=" mt-2"
                            // src="https://developer.accuweather.com/sites/default/files/34-s.png"
                            src={`https://developer.accuweather.com/sites/default/files/33-s.png`}
                        />
                        <div className="d-flex gap-2 font-size text-secondary">
                            <span>Sorge {format(moonRise, "HH:mm", { timezone })}
                            </span>
                            <br />
                            <span>Tramonta: {format(moonSet, "HH:mm", { timezone })}
                            </span>
                        </div>
                    </div>
                </div>

                <Forcast lat={lat} lon={lon} id={KEY} />
                <Button onClick={() => {
                    dispatch({

                        type: "ADD_PREF",

                        payload: KEY


                    })
                }}>Aggiungi ai preferiti</Button>
            </Container>

        </>
    )
}

export default CardResultSearch