import React from "react";
import "./Footer.css"

import logo from "../logo.png";
/* REACT-BOOTSTRAP */
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
<section className="contact-area" id="contact">
            <Container>
                <Row>
                    <Col lg={6} className="offset-lg-3">
                        <div className="contact-content text-center">
                            <a href="#"><img src={logo} alt="Black Hat" /></a>
                            <p>Step into the world of black-hat fashion and join a community that values self-expression and confidence. Our mission is to provide you with not just products, but a gateway to a lifestyle that dares to stand out and embrace the shadows.
                                <br/>
                                Discover the elegance of darkness. Your journey awaits.
                                <br/>
                                **Unveil the Shadows**
                                <br/>
                                *Where the Black Hat Defines You*</p>
                            <div className="hr"></div>
                            <h6>162 mohamed mahmoudi baraki algiers</h6>
                            <h6>0778123778<span>|</span>0778123778</h6>
                            <div className="contact-social">
                            <ul>
                                <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-tiktok"></i></a></li>
                            </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    <footer>
            <p>Copyright &copy; 2019 <img src={logo} alt="Black Hat" /> All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
