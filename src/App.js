
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import CreatePost from './pages/createpost';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" style={{ fontSize: 26, color: "green" }}>BlogApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px', wordSpacing: 42 }}
              navbarScroll
            >&nbsp;

              <Link to="/" id="fornavbar">Home</Link>&nbsp;
              <Link to="/createpost" id="fornavbar">CreatePost</Link>&nbsp;
              <Link to="/login" id="fornavbar">Login</Link>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/createpost' element={<CreatePost />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
