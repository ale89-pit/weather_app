import { useEffect } from "react"
import { useState } from "react"
import { Container, ListGroup, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"






const WeatherShow = () => {

  // const [lon, setLon] = useState('')
  //   const [lat, setLat] = useState('')
  //     const API = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid="
  //     const Key = "b393dd8cb61c7b8713fdf8753c9dc653"
  const cityResult = useSelector((state) => state.weather.content[0])
  const loading = useSelector((state) => state.weather.loading)

  useEffect(() => {

  }, [])




  return (

    <Container>
      <Row>
        <Col>


          <ListGroup className="d-flex">

            {loading ? cityResult.map((city, i) => (
              <Link key={i} to={`/${city.name}/${city.lon}/${city.lat}`}>
                <ListGroup.Item className="ps-2" >
                  <h4>{city.name}</h4><span>{city.country}</span> <span>{city.state}</span>

                </ListGroup.Item>
              </Link>


            )

            )
              : null
            }


          </ListGroup>
        </Col>
      </Row>

    </Container>

  )
}

export default WeatherShow