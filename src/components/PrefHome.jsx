import { useEffect } from "react"
import { Card } from "react-bootstrap"
import { useState } from "react"
import { useSelector } from "react-redux"


const PrefHome = (props) => {
    const [wea, setWea] = useState([])

    useEffect(() => {
        getWeat()
        console.log("PrefHome")

        console.log(wea)
    }, [])
    const getWeat = async () => {
        try {
            let resp = await fetch(props.api)
            if (resp.ok) {
                let data = await resp.json()
                setWea([data])

                console.log()
            }
        } catch (error) {

        }

    }
    useEffect(() => {

    }, [wea])




    return (

        wea.map((w, i) => {
            console.log(w)
            return (<Card key={i} tyle={{ width: '18rem' }}>
                <Card.Title>{w.name}</Card.Title>
                <Card.Img src={`https://openweathermap.org/img/w/${w.weather[0].icon}.png`} />
                <Card.Body>
                    <Card.Text> {w.weather[0].description}</Card.Text>
                    <Card.Text> Temperatura :{(Math.trunc(w.main.temp - 273))}</Card.Text>
                    <Card.Text> Min : {(Math.trunc(w.main.temp_min - 273))}</Card.Text>
                    <Card.Text>Max : {(Math.trunc(w.main.temp_max - 273))}</Card.Text>
                    <Card.Text> Vento : {w.wind.speed} Km/h</Card.Text>

                </Card.Body>
            </Card>)
        })


    )
}


export default PrefHome