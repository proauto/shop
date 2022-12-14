/*eslint-disable-next-line*/
import logo from './logo.svg';
import './App.css';
import { Button,Navbar,Container,Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL+ '/shoes1.jpg'} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL+ '/shoes2.jpg'} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
          <img src={process.env.PUBLIC_URL+ '/shoes3.jpg'} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
