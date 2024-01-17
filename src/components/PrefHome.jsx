import { useEffect } from "react"
import { Card, Col } from "react-bootstrap"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import * as Icon from 'react-bootstrap-icons';



const PrefHome = (props) => {
    const preference = useSelector((state) => state.preference.content)
    const [city, setcity] = useState([])
    const [loadCity, setLoadCity] = useState(true)
    const [wea, setWea] = useState([])
    const [loadWea, setLoadWea] = useState(true)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(true)


    const getWeat = async () => {
        try {
            let resp = await fetch(props.api)
            if (resp.ok) {
                let data = await resp.json()
                setWea(data)
                setLoadWea(false)
                console.log(data)
            }
        } catch (error) {

        }


    }
    const getcity = async () => {
        try {
            let resp = await fetch(`http://dataservice.accuweather.com/locations/v1/${props.id}?apikey=Mu2uvB1T1eAvbZkcutyUTDg7TJR2GJLc&language=it&details=false`)
            if (resp.ok) {
                let data = await resp.json()
                setcity([data])
                setLoadCity(false)
                console.log(data)
            }
        } catch (error) {

        }

    }
    useEffect(() => {
        getWeat()
        getcity()
        console.log(city)
        console.log(wea)
    }, [])
    useEffect(() => {
        console.log(city)
        console.log(wea)
    }, [preference.length])




    return (

        <Col xs={12} sm={8} md={6} lg={4} xl={4} className="align-items-stretch">

            {!loadCity && !loadWea &&
                <Card className="m-2 cardHome ">
                    <h3 className="align-self-center mx-auto shadow-3">{city[0].LocalizedName}</h3>
                    <div className="d-flex justify-content-center align-items-center">
                        <Link to={`/${city[0].LocalizedName}/${city[0].GeoPosition.Latitude}/${city[0].GeoPosition.Longitude}/${props.id}`} >
                            <div className="d-flex justify-content-center align-items-center">



                                <img src={`https://developer.accuweather.com/sites/default/files/${wea.DailyForecasts[0].Day.Icon < 10 ? "0" + wea.DailyForecasts[0].Day.Icon : wea.DailyForecasts[0].Day.Icon}-s.png`} />


                            </div>
                            <div className="font-size max-height-prefer d-flex flex-column justify-content-center align-items-center">


                                <p className="text-dark text-center"> {wea.DailyForecasts[0].Day.IconPhrase}</p>
                                <span>
                                    <p className="text-dark"> Min : {wea.DailyForecasts[0].Temperature.Minimum.Value} °C</p>
                                    <p className="text-dark">Max : {wea.DailyForecasts[0].Temperature.Maximum.Value} °C</p>
                                </span>


                            </div>
                        </Link>
                        {/* <Icon.StarFill onClick={(() => {
                            dispatch({

                                type: "REMOVE",
                                payload: index,
                            })
                            setSelected(false)
                        })} ></Icon.StarFill> */}
                    </div>

                </Card >

            }

        </Col >

    )
}


export default PrefHome