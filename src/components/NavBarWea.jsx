import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBarWea = () => {
  const [query, setQuery] = useState('')

  const city = useSelector((state) => state.weather)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const API_KEY_WEATHER2 = "Mu2uvB1T1eAvbZkcutyUTDg7TJR2GJLc"
  const API_URL_WEATHER_GEOCODING2 = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY_WEATHER2}&q=${query}&language=it`





  const newString = (e) => {
    setQuery(e.target.value)
  }
  const citySerch = async (e) => {
    e.preventDefault()
    const Key = "b393dd8cb61c7b8713fdf8753c9dc653"
    const API = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${Key}`


    try {
      let resp = await fetch(API)
      if (resp.ok) {
        let data = await resp.json()

        dispatch({
          type: "ADD_CITY",
          payload: data,

        })
        setQuery('')



      }
    } catch (error) {

    }

  }

  const citySerch2 = async (e) => {
    e.preventDefault()
    if (location !== "/") {
      navigate('/')
    }


    try {
      let resp = await fetch(API_URL_WEATHER_GEOCODING2)
      if (resp.ok) {
        let data = await resp.json()
        console.log(data)
        dispatch({
          type: "ADD_CITY",
          payload: data,

        })
        // setQuery('')



      }
    } catch (error) {

    }

  }
  useEffect(() => {

  }, [])


  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className='cursor-pointer' onClick={(() => navigate("/"))}>Weather</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/"
                // onClick={(() => {
                //   dispatch({
                //     type: "ADD_CITY",
                //     payload: [],
                //     loading: false,
                //   })
                // })}
                className="nav-link">Home</Link>


            </Nav>
            <Form className="d-flex" onSubmit={citySerch2}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={newString}
              />
              <Button variant="success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBarWea