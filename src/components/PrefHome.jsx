import { useEffect } from "react"
import { Card } from "react-bootstrap"
import { useState } from "react"
import { useSelector } from "react-redux"
const PrefHome = (props) => {
    const [wea, setWea] = useState()
    // const state = useSelector((state) => state.preferece.content)
    const getWeat = async () => {
        try {
            let resp = await fetch(props.api)
            if (resp.ok) {
                let data = resp.json()
                setWea(data)
                console.log(wea)
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getWeat()
        console.log("PrefHome")

        console.log(wea)
    }, [])
    useEffect(() => {

        console.log("PrefHome update")
        console.log(wea)
    }, [wea])



    return ("ciao")
    //     <Card style={{ width: '18rem' }}>
    // //         <Card.Title>{city.name}</Card.Title>
    // //         <Card.Img src="holder.js/100px180" />
    // //         <Card.Body>
    // //             <Card.Text> {city.weather[0].description}</Card.Text>
    // //             <Card.Text> Temperatura :{(Math.trunc(city.main.temp - 273))}</Card.Text>
    // //             <Card.Text> Min : {(Math.trunc(city.main.temp_min - 273))}</Card.Text>
    // //             <Card.Text>Max : {(Math.trunc(city.main.temp_max - 273))}</Card.Text>
    // //             <Card.Text> Vento : {city.wind.speed} Km/h</Card.Text>
    // //             <Button variant="primary">Add to preferences</Button>
    // //         </Card.Body>
    // //     </Card>

}


export default PrefHome