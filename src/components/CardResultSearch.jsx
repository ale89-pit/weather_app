import { Card } from "react-bootstrap"
import { IoThermometerOutline } from "react-icons/io5"
import { BiWind } from "react-icons/bi"
import { FiCompass } from "react-icons/fi"
import { format } from "date-fns"
import { useParams } from "react-router-dom"
import Forcast from "./Forcast"


const CardResultSearch = ({ weather }) => {
    console.log(weather)
    const params = useParams()
    const name = params.nameCity
    const lat = params.lat
    const lon = params.lon
    const KEY = params.key
    const timezone = localStorage.getItem("timezone")

    return (
        <>
            <div className=" w-100 mx-auto bg-light rounded p-3 border border-3">
                <Card.Title className="text-center display-5 my-2">{name}</Card.Title>




                <Card.Title className="p-3 text-center text-secondary opacity-50">{format(new Date(weather.Date), "EEEE  dd MMMM yyyy")}</Card.Title>
                <div className="d-flex justify-content-center align-items-center w-100 m-2">
                    <img className="w-50 mt-2"

                        // src="https://developer.accuweather.com/sites/default/files/01-s.png"
                        src={`https://developer.accuweather.com/sites/default/files/${weather.Day.Icon < 10 ? "0" + weather.Day.Icon : weather.Day.Icon}-s.png`}
                    />

                    <div className="w-50 font-size">
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




                <div className="d-flex justify-content-center align-items-start m-2">
                    <div className="w-50 d-flex justify-content-center align-items-center">

                        <img className=" mt-2"

                            // src="https://developer.accuweather.com/sites/default/files/01-s.png"
                            src={`https://developer.accuweather.com/sites/default/files/${weather.Day.Icon < 10 ? "0" + weather.Day.Icon : weather.Day.Icon}-s.png`}
                        />

                        <div className="font-size">
                            <span>{weather.Sun.Rise}
                                {/* Rise {format(new Date(weather.Sun.Rise), "HH:mm")} */}
                            </span>
                            <br />
                            <span>Set {format(new Date(weather.Sun.Set), "HH:mm")}
                            </span>
                        </div>
                    </div>
                    <div className="w-50 d-flex justify-content-center align-items-center">

                        <img className=" mt-2"
                            // src="https://developer.accuweather.com/sites/default/files/34-s.png"
                            src={`https://developer.accuweather.com/sites/default/files/${weather.Night.Icon < 10 ? "0" + weather.Night.Icon : weather.Night.Icon}-s.png`}
                        />
                        <div className="font-size">
                            <span>Rise {format(new Date(weather.Moon.Rise), "HH:mm")}
                            </span>
                            <br />
                            <span>Set: {format(new Date(weather.Moon.Set), "HH:mm")}
                            </span>
                        </div>
                    </div>
                </div>

                <Forcast lat={lat} lon={lon} id={KEY} />
            </div>

        </>
    )
}

export default CardResultSearch