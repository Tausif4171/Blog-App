
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import CreatePost from './pages/createpost';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  }

  return (
    <Router>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand> <Link to="/" style={{ fontSize: 26, color: "green", textDecoration: "none" }}>BlogApp</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px', wordSpacing: 42 }}
              navbarScroll
            >&nbsp;

              <Link to="/" id="fornavbar">Home</Link>&nbsp;
              
              {!isAuth ? (
                <Link to="/login" id="fornavbar">Login</Link>
              ) : (
                <>
                  <Link to="/createpost" id="fornavbar">CreatePost</Link>&nbsp;
                <button onClick={signUserOut}>Logout</button>
                </>
                
              )}

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
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
