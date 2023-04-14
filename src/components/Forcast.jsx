import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';



const Forcast = (props) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    let Key = "b393dd8cb61c7b8713fdf8753c9dc653"
    const API = `http://api.openweathermap.org/data/2.5/forecast?lat=${props.lon}&lon=${props.lat}&appid=${Key}`
    const [day, setDay] = useState([])
    const [dayName, setDayName] = useState("")
    const getforcast = async () => {


        try {
            let resp = await fetch(API)
            if (resp.ok) {
                let data = await resp.json()

                setDay(data.list)


            }
        } catch (error) {

        }

    }

    // const showName = (string) => {
    //     let d = new Date(string)

    //     const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    //     // let dayname = 
    //     setDayName(weekday[d.getDay()])

    // }



    useEffect(() => {
        getforcast()
    }, [])



    return (

        <Carousel responsive={responsive} className="text-center">
            {day.map((weaD, i) =>
            (<div key={i}>




                <img
                    className="d-block mx-auto"
                    src={`https://openweathermap.org/img/w/${weaD.weather[0].icon}.png`}
                    alt="First slide"
                />
                <h5>{weaD.dt_txt}</h5>
                <h3>{Math.trunc((weaD.main.temp - 273))}</h3>
                <p>{weaD.weather[0].description}</p>


                <p>{weaD.dt_txt}</p>

            </div>)
            )}


        </Carousel>
    )
}
export default Forcast