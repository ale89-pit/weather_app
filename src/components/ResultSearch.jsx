import { Badge, Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ResultSearch = (props) => {

    ;

    return (

        <ListGroup key={props.key} className="d-flex w-xs-100 w-md-75 w-lg-75">



            < ListGroup.Item className="d-flex justify-content-between align-items-center ps-2 " >
                <div className="d-flex align-items-center m-0">
                    <div>
                        <h4>{props.city.LocalizedName}</h4>

                    </div>
                    <div className="d-flex flex-column">
                        <Badge className="bg-success d-none d-md-block">{props.city.Region.LocalizedName}</Badge>
                        <Badge className="bg-danger d-none d-md-block">{props.city.Country.LocalizedName}</Badge>

                    </div>
                    <div className="font-size d-flex ">
                        <p className="p-0 m-0 ">{props.city.AdministrativeArea.LocalizedType}</p> {'\u00A0'}
                        <p className="p-0 m-0 ">
                            {props.city.AdministrativeArea.LocalizedName}</p>
                    </div>
                </div>
                <Link onClick={() => { localStorage.setItem("timezone", props.city.TimeZone.Name) }}
                    to={`/${props.city.LocalizedName}/${props.city.GeoPosition.Latitude}/${props.city.GeoPosition.Longitude}/${props.city.Key}`}
                    className="btn btn-warning display-6">Show</Link>
            </ListGroup.Item >






        </ListGroup >


    )
}

export default ResultSearch;