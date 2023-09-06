import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CloseButton, Col, Container, Row, Spinner } from "react-bootstrap"

import { useSelector } from "react-redux"
import { type } from "@testing-library/user-event/dist/type"
import * as Icon from 'react-bootstrap-icons';
import { format } from 'date-fns';
import CardResultSearch from "./CardResultSearch"
const NameCity = () => {
    const selected = useSelector((state) => state.preference.content.selected)

    const params = useParams()
    const [loading, setloading] = useState(true)
    // const [selected, setSelected] = useState(props.selected)







    const [weather, setWeather] = useState([])


    // let Key = "b393dd8cb61c7b8713fdf8753c9dc653"
    // const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=`

    // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b393dd8cb61c7b8713fdf8753c9dc653



    const API_KEY_WEATHER2 = "Mu2uvB1T1eAvbZkcutyUTDg7TJR2GJLc"
    const KEY = params.key

    const API_2 = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${KEY}?apikey=${API_KEY_WEATHER2}&language=it-it&details=true&metric=true`

    const cityWeather2 = async () => {
        try {
            let resp = await fetch(API_2)
            console.log("fetch")
            if (resp.ok) {
                let data = await resp.json()
                console.log(data)
                setWeather(data.DailyForecasts[0])

                setloading(false)
                console.log(data.DailyForecasts[0].Day.Icon)






            }
        } catch (error) {

        }

    }

    useEffect(() => {
        cityWeather2()

    }, [])
    useEffect(() => {
        cityWeather2()

    }, [KEY, loading])

    return (
        <Container>

            <Row>
                <Col className="col-12 mx-auto">

                    {loading && weather ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> :
                        <>

                            <CardResultSearch weather={weather} />
                        </>}
                </Col>
            </Row>

        </Container >
    )


}

export default NameCity