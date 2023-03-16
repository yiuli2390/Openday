import React from 'react'
import { useLocation } from "react-router-dom";
import { Container } from 'react-bootstrap';
import {Row} from "react-bootstrap"
import ProgramCard from '../components/ProgramCard';

export const Topics = (props) => {
  const location = useLocation();
  const data = location.state?.data[0];
  console.log(data, " data");
  return (
    <>
    <Container>
        <div className="mt-4 text-black">
            <h1 className="text-2xl font-bold">{data.name}</h1>
        </div>
        <img class="img-fluid mx-auto d-block" src={data.cover_image} alt={data.name} />
        <Row md={1} className="mt-4 mb-4 justify-content-md-center">
          {data.programs.map(program => (
            <ProgramCard {...program}/>
          ))}
        </Row>
    </Container>
    </>
  )
}

export default Topics