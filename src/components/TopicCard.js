import {useState} from 'react'
import { Card } from "react-bootstrap"
import {Link} from "react-router-dom"

export const TopicCard = ({id, img, name, description, topic}) => {
    const [data, setData] = useState([topic]);

    return (
        <Card>
            <Card.Img variant="top" src={img} height="150px" style={{objectFit: "cover"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <span className="fs-5">{name}</span>
                </Card.Title>
                <Card.Text>
                <span className="ms-6 text-muted">{description}</span>
                </Card.Text>
                <Link to={`/Topics/${id}`} state={{data : data}}>More info</Link>
            </Card.Body>
        </Card>
    )
}

export default TopicCard