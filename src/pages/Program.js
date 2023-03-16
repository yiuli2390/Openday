import React from 'react'
import { useLocation } from "react-router-dom";
import { Container } from 'react-bootstrap';

export const Program = (props) => {
  const location = useLocation();
  const data = location.state?.data[0];
  console.log(data, " data");
  return (
    <>
    <Container>
        <div className="mt-4 text-black">
            <h2>{data.title}</h2>
            <div className="w-75 p-3 mx-auto">
                <p>Start from: {data.start_time}</p>
                <p>End at: {data.end_time}</p>
                <p>{data.description}</p>
                <p>Room: {data.room}</p>
                <p>Floor: {data.floor}</p>
            </div>
        </div>

        <div className="mt-4 text-black">
            <h4>Location</h4>
            <div className="w-75 p-3 mx-auto">
                <h6>{data.location.title}</h6>
                <img class="img-fluid mx-auto d-block" src={data.location.cover_image} alt={data.name} />
                <p>{data.location.description}</p>
                <p>Address: {data.location.address}</p>
                <p>Postcode: {data.location.postcode}</p>
                <p>For more information please visit <a href={data.location.website}>here</a></p>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Program