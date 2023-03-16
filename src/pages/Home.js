import { Container} from "react-bootstrap" 
import {Col, Row} from "react-bootstrap"
import TopicCard from "../components/TopicCard"
import myData from "../db.json"

export const Home = () => {const descrip = (str) => {
      if(str.length > 85){
        str = str.substring(0,85) + "...";
      }
      return str;
    }
  return (
    <>
      <Container className="mb-4">
        <h1 className="text-center">{myData.description}</h1>
        <h3>Topics</h3>
        <Row xs={1} md={2} lg={3} className="g-3" >
          {myData.topics.map(topics => (
            <Col key={topics.id}>
              <TopicCard id={topics.id} img={topics.cover_image} name={topics.name} description={descrip(topics.description)} topic={topics} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Home