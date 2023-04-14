import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBarWea = () => {
  const [query, setQuery] = useState('')

  const city = useSelector((state) => state.weather)
  const dispatch = useDispatch()






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
  useEffect(() => {

  }, [])


  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" onClick={(() => {
                dispatch({
                  type: "ADD_CITY",
                  payload: [],
                  loading: false,
                })
              })} className="nav-link">Home</Link>


            </Nav>
            <Form className="d-flex" onSubmit={citySerch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={newString}
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default NavBarWea