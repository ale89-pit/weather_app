import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import PrefHome from './PrefHome'
import { Link } from 'react-router-dom';


const CardPref = () => {
    let Key = "b393dd8cb61c7b8713fdf8753c9dc653"
    const cityPref = useSelector((state) => state.preference.content.singlePreference)
    console.log(cityPref)




    // const lon = city.coord.lon
    // const lat = city.coord.lat
    // const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=`
    useEffect(() => {

    }, [])
    useEffect(() => {
        console.log("lettura state")
        console.log(cityPref)
    }, [cityPref])


    return (<>
        <h2 className='text-center'>Your city weather</h2>
        <Container className="pt-5 d-flex">

            {cityPref ? cityPref.map((city, i) => (
                <>
                    <PrefHome key={i} api={`https://api.openweathermap.org/data/2.5/weather?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${Key}`} index={i} /></>
            ))
                : <h1>Add you city here</h1>
            }
        </Container>
    </>)
}

// cityPref.map((city) => {
//     <Card style={{ width: '18rem' }}>
//         <Card.Title>{city.name}</Card.Title>
//         <Card.Img src="holder.js/100px180" />
//         <Card.Body>
//             <Card.Text> {city.weather[0].description}</Card.Text>
//             <Card.Text> Temperatura :{(Math.trunc(city.main.temp - 273))}</Card.Text>
//             <Card.Text> Min : {(Math.trunc(city.main.temp_min - 273))}</Card.Text>
//             <Card.Text>Max : {(Math.trunc(city.main.temp_max - 273))}</Card.Text>
//             <Card.Text> Vento : {city.wind.speed} Km/h</Card.Text>
//             <Button variant="primary">Add to preferences</Button>
//         </Card.Body>
//     </Card>
// })









export default CardPref