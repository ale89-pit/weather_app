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

        <Col xs={12} sm={8} md={4} xl={2}>

            {!loadCity && !loadWea &&
                <Card className="m-2 cardHome ">
                    <Card.Title className="text-center shadow-3">{city[0].LocalizedName}</Card.Title>
                    <div className="d-flex">
                        <Link to={`/${city[0].LocalizedName}/${city[0].GeoPosition.Latitude}/${city[0].GeoPosition.Longitude}/${props.id}`} >
                            <div>



                                <Card.Img src={`https://developer.accuweather.com/sites/default/files/${wea.DailyForecasts[0].Day.Icon < 10 ? "0" + wea.DailyForecasts[0].Day.Icon : wea.DailyForecasts[0].Day.Icon}-s.png`} />


                            </div>
                            <div className="font-size">

                                <Card.Body>
                                    <Card.Text className="text-dark"> {wea.DailyForecasts[0].Day.IconPhrase}</Card.Text>

                                    <Card.Text className="text-dark"> Min : {wea.DailyForecasts[0].Temperature.Minimum.Value}</Card.Text>
                                    <Card.Text className="text-dark">Max : {wea.DailyForecasts[0].Temperature.Maximum.Value}</Card.Text>


                                </Card.Body>
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

        </Col>

    )
}


export default PrefHome