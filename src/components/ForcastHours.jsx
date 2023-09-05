import { format } from "date-fns"
import { utcToZonedTime } from "date-fns-tz"
import { async } from "q"
import { useEffect, useState } from "react"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import { useParams } from "react-router"


const ForcastHours = () => {
    const params = useParams()
    const id = params.key
    const [hourForcast, setHourForcast] = useState();
    const [loading, setLoading] = useState(true)
    const timezone = localStorage.getItem("timezone")
    console.log(id)
    const API_FORCAST_12_HOURS = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${id}?apikey=Mu2uvB1T1eAvbZkcutyUTDg7TJR2GJLc&language=it&details=true&metric=true`


    let forcastHourFetch = async () => {
        try {
            let resp = await fetch(API_FORCAST_12_HOURS)
            if (resp.ok) {
                let data = await resp.json()
                console.log(data)
                setHourForcast(data)
                setLoading(false)
            } else {
                alert("fetch error")
            }
        } catch {
            alert("fetch error 2")
        }



    }


    useEffect(() => {
        forcastHourFetch()
    }, [])

    return (
        <div className="overflow-scroll max-height">
            <ListGroup  >
                {!loading &&
                    hourForcast.map((hour, i) => {
                        return (
                            <ListGroup.Item>
                                <div className="d-flex justify-content-between align-items-center m-0">
                                    <div className="m-0 p-0">
                                        <p className="p-0 m-0">{format(utcToZonedTime(new Date(hour.DateTime), timezone), "HH:mm")}</p>

                                    </div>
                                    <div className="mx-1 p-0" >
                                        <img src={`https://developer.accuweather.com/sites/default/files/${hour.WeatherIcon < 10 ? "0" + hour.WeatherIcon : hour.WeatherIcon}-s.png`}></img>

                                    </div>
                                    <div className="font-size mx-1 p-0">
                                        <p className="p-0 m-0 ">{hour.IconPhrase}

                                        </p>
                                    </div>
                                    <div className="font-size  mx-1 p-0">
                                        <p className="p-0 m-0 " title="Temp">{hour.Temperature.Value}°C</p>

                                    </div>
                                    <div className="font-size mx-1 p-0 d-none d-lg-block">
                                        <p className="p-0 m-0" title="Humidity">{hour.RelativeHumidity}%</p>

                                    </div>
                                </div>


                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup >
        </div>
    )
}

export default ForcastHours