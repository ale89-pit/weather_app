import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PrefHome from './PrefHome'


const CardPref = () => {
    let Key = "b393dd8cb61c7b8713fdf8753c9dc653"
    const cityPref = useSelector((state) => state.preference.content.singlePreference)
    console.log(cityPref)
    const API_KEY_WEATHER2 = "Mu2uvB1T1eAvbZkcutyUTDg7TJR2GJLc"




    useEffect(() => {
        console.log("lettura state")
        console.log(cityPref)
    }, [])
    useEffect(() => {
        console.log("lettura state")
        console.log(cityPref)
    }, [cityPref.length])


    return (<>
        <h2 className='text-center display-1'>Preferiti</h2>
        <Container >
            <Row >

                {cityPref ? cityPref.map((city, i) => (
                    <>
                        <PrefHome key={i} api={`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city}?apikey=${API_KEY_WEATHER2}&language=it-it&details=true&metric=true`} id={city} /></>
                ))
                    : <h1>Add you city here</h1>
                }
            </Row>
        </Container>
    </>)
}

export default CardPref