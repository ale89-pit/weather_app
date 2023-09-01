import { useEffect } from "react"
import { useState } from "react"
import { Container, ListGroup, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"






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

    <Container>
      <Row>
        <Col>


          <ListGroup className="d-flex">

            {loading ? cityResult.map((city, i) => (
              <Link key={i} to={`/${city.LocalizedName}/${city.GeoPosition.Latitude}/${city.GeoPosition.Longitude}/${city.Key}`} >
                <ListGroup.Item className="ps-2">
                  <h4>{city.LocalizedName}</h4>
                  <span className="mx-2">{city.AdministrativeArea.LocalizedType} : {city.AdministrativeArea.LocalizedName + ", "}</span>
                  {/* <br /> */}
                  {
                    city.SupplementalAdminAreas.map((s, i) => (
                      <span key={i} >
                        {i > 0 ? ' - ' : ''}
                        {s.LocalizedName}
                      </span>
                    ))
                  }<span>, </span>
                  {/* {city.SupplementalAdminAreas.map((s, i) => i > 1 ? <span>{s.LocalizedName.concat(", ")}</span> : <span>{s.LocalizedName}</span>)} */}
                  {/* <br /> */}
                  <span >{city.Country.LocalizedName}</span> - <span>{city.Region.LocalizedName}</span>

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