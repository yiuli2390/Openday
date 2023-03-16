import {useState} from 'react'
import { Card } from "react-bootstrap"
import {Link} from "react-router-dom"

export const ProgramCard = (program) => {
    const [data, setData] = useState([program]);

    return (
        <Card className="card w-75 d-flex justify-content-center ">
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <span className="fs-5">{program.title}</span>
                </Card.Title>
                <Card.Text>
                <span className="ms-6 text-muted">{program.description_short}</span>
                </Card.Text>
                <Link to={`/Program/${program.id}`} state={{data : data}}>Read more</Link>
            </Card.Body>
        </Card>
        
    )
}

export default ProgramCard