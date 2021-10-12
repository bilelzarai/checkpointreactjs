import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form, Row,Col,Container,Navbar,Table} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <>

        <br />
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
                width="120"
                height="30"
                className="d-inline-block align-top"
              />{' '}
               Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>

      <Container style={{ marginTop: 20 }} >
        <Row>
          <Col sm={8}>
          <h3>Table of inscription : </h3>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>City</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>franc</td>

                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr><tr>
                  <td>4</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          
          
          </Col>
          <Col sm={4}>
            <Form>
              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

            
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

          
          </Col>
        </Row>

      </Container>


</div>

  );
}

export default App;
