import React, { useEffect } from 'react'
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./LandingStyles.css";

const LandingPage = () => {
  
  const history = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history("/mynotes");
    }
  }, [history]);
  return (
    <div className='main'>
      <Container>
        <Row>
        <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href ="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href ="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </a>
            </div>
        </div>
        </Row>
      </Container>
      
      </div>
  )
}

export default LandingPage