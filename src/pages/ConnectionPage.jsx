import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook } from 'react-icons/fa';
import '../styles/ConnectionPage.css';
import FirebaseContext from '../firebase/context';

const ConnectionPage = () => {
  const { firebase } = useContext(FirebaseContext)
  return (
    <div className="ConnectionPage" id="/connection">
      <Container className="connectionPage">
        <Row className="graphic-presentation">
          <Col xl="4" lg="4" md="4" sm="4" xs="4">
            <img className="stickman-left" src="/medias/stickman-right.png" alt="logo" />
          </Col>
          <Col xl="4" lg="4" md="4" sm="4" xs="4">
            <img className="logo" src="/medias/logo1.1-2.png" alt="logo" />
          </Col>
          <Col xl="4" lg="4" md="4" sm="4" xs="4">
            <img className="stickman-right" src="/medias/stickman-left.png" alt="logo" />
          </Col>
        </Row>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
          <h1 className="title">Connectez-vous à 2PY1F avec :</h1>
          </Col>
        </Row>
        <Row>
          <button
            className="login-btn"
            onClick={() => firebase.login('facebook')}
            type="submit"
          >
            <FaFacebook className="login-icons" /> Facebook
          </button>
        </Row>
      </Container>
    </div>
  );
}

export default ConnectionPage;