import { useEffect } from "react"
import { useState } from "react"
import { Container, ListGroup, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ResultSearch from "./ResultSearch"






const WeatherShow = () => {
  const dispatch = useDispatch()

  // const [lon, setLon] = useState('')
  //   const [lat, setLat] = useState('')
  //     const API = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid="
  //     const Key = "b393dd8cb61c7b8713fdf8753c9dc653"
  const cityResult = useSelector((state) => state.weather.content[0])
  const loading = useSelector((state) => state.weather.loading)
  const state = useSelector((state) => state.preference)

  useEffect(() => {

  }, [])
  useEffect(() => {

  }, [cityResult])



  return (

    <Container >
      <Row>
        <Col className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 mx-auto">

          {loading && cityResult.length > 0 ? cityResult.map((city, i) => <ResultSearch city={city} key={i} />) :

            <p>Nessun risultato trovato</p>}

        </Col>
      </Row>

    </Container>

  )
}

export default WeatherShow