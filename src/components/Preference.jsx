import { useParams } from "react-router-dom"

const Preference = () => {
    const params = useParams()
    const name = params.name
    return (<h1>{name}</h1>)
}

export default Preference