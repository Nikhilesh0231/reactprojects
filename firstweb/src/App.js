import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import { blog } from './DATA/Blog';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  let headerinfo = {     
    email: 'nt@gmail.com',
    phone: '893270983287'
  }
  return (
    <div className="App">
      {/* <Header email ="nt@gmail.com" phone = "8873787292"/> */}
      <Header headerInfo={headerinfo}>
        <h3>Hello</h3>
        <FontAwesomeIcon icon = {faWhatsapp} className='text-danger  px-2 display-4'/>
        <FontAwesomeIcon icon = {faFacebook} className='text-danger px-2 display-4'/>
        <FontAwesomeIcon icon = {faTelegram} className='text-danger px-2 display-4'/>
        <FontAwesomeIcon icon = {faInstagram} className='text-danger px-2 display-4'/>
        <FontAwesomeIcon icon = {faPhone} className='text-danger px-2 display-4'/>
        <FontAwesomeIcon icon = {faSearch} className='text-danger px-2 display-4'/>
      </Header>
      {/* <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4'>
              <h1>Our Cources</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Course1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container> */}
      <Container>
        <Row>
        {blog.map((v,i)=>{
          return(<ProductItems pitems={v} key = {i}/>)
        })}
        </Row>
      </Container>
      <Footer />



    </div>
  );
}

export default App;

function ProductItems({pitems}) {
  return (
    <div  className="col-lg-3 mb-4">
      <Card >
        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text>
            {pitems.body}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
