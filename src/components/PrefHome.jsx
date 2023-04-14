import { useEffect } from "react"
import { Card } from "react-bootstrap"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import * as Icon from 'react-bootstrap-icons';



const PrefHome = (props) => {
    const preference = useSelector((state) => state.preference.content)
    const [wea, setWea] = useState([])
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(true)
    const index = props.index
    console.log(index)
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

    }, [wea, preference.length])




    return (
        wea.map((w, i) => {
            console.log(w)
            return (
                <Card className="m-2 cardHome " key={i} >
                    <Card.Title className="text-center shadow-3">{w.name}</Card.Title>
                    <div className="d-flex">
                        <Link selected={selected} to={`/${w.name}/${w.coord.lon}/${w.coord.lat}`}>
                            <div>



                                <Card.Img src={`https://openweathermap.org/img/w/${w.weather[0].icon}.png`} />


                            </div>
                            <div>

                                <Card.Body>
                                    <Card.Text> {w.weather[0].description}</Card.Text>
                                    <Card.Text> Temperatura :{(Math.trunc(w.main.temp - 273))}</Card.Text>
                                    <Card.Text> Min : {(Math.trunc(w.main.temp_min - 273))}</Card.Text>
                                    <Card.Text>Max : {(Math.trunc(w.main.temp_max - 273))}</Card.Text>
                                    <Card.Text> Vento : {w.wind.speed} Km/h</Card.Text>

                                </Card.Body>
                            </div>
                        </Link>
                        <Icon.StarFill onClick={(() => {
                            dispatch({

                                type: "REMOVE",
                                payload: index,
                            })
                            setSelected(false)
                        })} ></Icon.StarFill>
                    </div>

                </Card >

            )
        })


    )
}


export default PrefHome