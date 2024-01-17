import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import CardResultSearch from "./CardResultSearch";
import { format } from "date-fns";
import { IoThermometerOutline } from "react-icons/io5";
import { BiWind } from "react-icons/bi";
import { FiCompass } from "react-icons/fi";
import { Card } from "react-bootstrap";
import { utcToZonedTime } from "date-fns-tz";



const Forcast = (props) => {


    const API_FORECASTS_5_DAYS = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${props.id}?apikey=%09Mu2uvB1T1eAvbZkcutyUTDg7TJR2GJLc&language=it&metric=true&details=true`
    const [day, setDay] = useState([])
    const timezone = localStorage.getItem("timezone")

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 4
        },
        screen: {
            breakpoint: { max: 1200, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    // let Key = "b393dd8cb61c7b8713fdf8753c9dc653"
    // const API = `http://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&appid=${Key}`
    // const [day, setDay] = useState([])
    // const [dayName, setDayName] = useState("")
    // const getforcast = async () => {

    //     console.log("getforcast")
    //     try {
    //         let resp = await fetch(API)
    //         if (resp.ok) {
    //             let data = await resp.json()

    //             setDay(data.list)


    //         }
    //     } catch (error) {

    //     }

    // }
    const getforcast2 = async () => {

        console.log("getforcast")
        try {
            let resp = await fetch(API_FORECASTS_5_DAYS)
            if (resp.ok) {
                let data = await resp.json()
                console.log(data)
                setDay(data.DailyForecasts)


            }
        } catch (error) {

        }

    }



    useEffect(() => {
        getforcast2()
        console.log(day)
    }, [])



    return (

        <Carousel responsive={responsive} className="text-center my-4">
            {day.map((weaD, i) =>
            (
                <>
                    <div key={i} className="mx-1 bg-light rounded p-3 border border-3 ">
                        <Card.Title className="text-center display-5 my-2"></Card.Title>




                        <Card.Title className="p-3 text-center text-secondary opacity-50">{format(new Date(weaD.Date), "EEEE  dd ")}</Card.Title>
                        <div className=" w-100 m-2">
                            <div>
                                <p className="m-0 p-0 fw-bold text-secondary size-text-carousel ">{weaD.Day.IconPhrase
                                }</p>
                                <img className="w-auto "

                                    // src="https://developer.accuweather.com/sites/default/files/01-s.png"
                                    src={`https://developer.accuweather.com/sites/default/files/${weaD.Day.Icon < 10 ? "0" + weaD.Day.Icon : weaD.Day.Icon}-s.png`}
                                />
                            </div>
                            <div className=" font-weight-bold font-size">
                                {/* {actual} */}

                                <p className="m-0 p-0 size-text-carousel"><IoThermometerOutline /> Max:
                                    {weaD.Temperature.Maximum.Value}°C
                                </p>
                                <p className="m-0 p-0 size-text-carousel"><IoThermometerOutline /> Min:
                                    {weaD.Temperature.Minimum.Value}°C
                                </p>
                                <p className="m-0 p-0 size-text-carousel"><BiWind /> Wind:
                                    {weaD.Day.Wind.Speed.Value} {weaD.Day.Wind.Speed.Unit}
                                    <FiCompass />
                                    {weaD.Day.Wind.Direction.Localized}
                                </p>
                            </div>




                        </div>




                        <div className=" m-2">
                            <div className="w-100 d-flex justify-content-center align-items-center">

                                <img className=" mt-1 w-25"

                                    // src="https://developer.accuweather.com/sites/default/files/01-s.png"
                                    src={`https://developer.accuweather.com/sites/default/files/01-s.png`}
                                />

                                <div className="d-flex flex-column font-size text-secondary">
                                    <p className="w-100 size-text-carousel m-0 p-0">Sorge : {format(utcToZonedTime(new Date(weaD.Sun.Rise), timezone), "HH:mm")}

                                    </p>
                                    <p className="w-100 size-text-carousel m-0 p-0">Tramonta :  {format(utcToZonedTime(new Date(weaD.Sun.Set), timezone), "HH:mm")}

                                    </p>
                                </div>
                            </div>
                            <div className="w-100 d-flex justify-content-center align-items-center">

                                <img className="  font-size text-secondary"
                                    // src="https://developer.accuweather.com/sites/default/files/34-s.png"
                                    src={`https://developer.accuweather.com/sites/default/files/33-s.png`}
                                />
                                <div className="d-flex flex-column font-size text-secondary">
                                    <p className="w-100 size-text-carousel m-0 p-0">Sorge :
                                        {format(utcToZonedTime(new Date(weaD.Moon.Rise), timezone), "HH:mm")}
                                        {/* format(new Date(weaD.Moon.Rise), "HH:mm")} */}
                                    </p>
                                    <p className="w-100 size-text-carousel m-0 p-0">Tramonta :
                                        {format(utcToZonedTime(new Date(weaD.Moon.Set), timezone), "HH:mm")}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )
            )}


        </Carousel>
    )
}
export default Forcast