import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card } from "react-bootstrap"

const NameCity = () =>{
    const params = useParams()
    const name = params.nameCity
    const lat = params.lat
    const lon = params.lon
    const [weather, setWeather]= useState([])
    const [temp,setTemp] = useState() 
    const [max,setMax] = useState()
    const [min,setMin] = useState()
    const [icon, setIcon]= useState()
    const [actual,setActual]= useState()
    const [wind,setWind]= useState()
    const [humidity,sethumidity] = useState()

    let Key = "b393dd8cb61c7b8713fdf8753c9dc653"
    const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`

    // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b393dd8cb61c7b8713fdf8753c9dc653

    const cityWeather = async ()=>{
        try {
            let resp = await fetch(API+Key)
            if(resp.ok){
               let data = await resp.json()
                
                setWeather(data)
                
                setTemp(Math.trunc(data.main.temp-273))
                setIcon(data.weather[0].icon)
                setActual(data.weather[0].main)
                setMax(Math.trunc(data.main.temp_max-273))
                setMin(Math.trunc(data.main.temp_min-273))
                setWind(data.wind.speed*1.6)
                sethumidity(data.main.humidity)
                

            }
        } catch (error) {

        }
      
    }
    useEffect(()=>{
        cityWeather()
    },[])
    useEffect(()=>{
        cityWeather()
    },[temp,actual,icon])
    return(
        <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <p className="font-weight-bold">{actual}</p>
            <p>Temp max: {max}</p>
            <p>Temp Min: {min}</p>
            <p>Wind: {wind}</p>
            <p>Umidity:{humidity}%</p>
            <p>Temp. Percepita :{temp}</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
        </>
    )
    
   
}

export default NameCity