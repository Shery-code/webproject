import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

import "../App.css";
const LandingPage = () => {
  return (
    <div className="container-fluid">
      <br />
      <Jumbotron>
        <h1>ShoeStop</h1>
        <p>One place with all you need for your feet!</p>
      </Jumbotron>
      <hr />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://fastphillysports.com/wp-content/uploads/2020/05/air-jordans.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>The Founder of Air Jordan</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.hdqwalls.com/download/spiderman-miles-morales-nike-air-jordan-ap-1280x720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Spiderman Miles Morales Nike Air Jordan</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/bb/82/5d/bb825dbb05116eb5af3d09dc355499d8.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Nike Air Jordan XXXI</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <h3>New Arrivals</h3> <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a81ac313-f6a3-440e-ba5a-d4ba84eee215/air-jordan-7-retro-gc-shoe-8M6KSs.jpg"
              />
              <Card.Body>
                <Card.Title>Nike Air Jordan 7 Retro GC</Card.Title>
                <b>PKR 30,000</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/aed9c0fe-2bea-4c88-be7b-50b508c1fe39/air-jordan-1-low-se-shoe-XvqDsj.jpg"
              />
              <Card.Body>
                <Card.Title>Air Jordan 1 Low SE Shoe</Card.Title>
                <b>PKR 27,500</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://c.static-nike.com/a/images/t_prod_ss/w_640,c_limit,q_auto,f_auto/a2xc2snk9pr1tnwl8j53/womens-air-jordan-i-twist-release-date.jpg"
              />
              <Card.Body>
                <Card.Title>Nike Air Jordan 4</Card.Title>
                <b>PKR 50,000</b> <tr />
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
        </div>
      </div>
      <h3>
        <b>More Nike!</b>
      </h3>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Figure>
              <Figure.Image
                width={500}
                height={500}
                alt="171x180"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5a30fb10688067.560e930452f40.jpg"
              />
              <Figure.Caption>
                <h5>
                  <b>Nike SB Dunk</b>
                </h5>
              </Figure.Caption>
              <Button variant="dark">Shop Now</Button>{" "}
            </Figure>
          </div>
          <div className="col-md-6">
            <Figure>
              <Figure.Image
                width={472}
                height={472}
                alt="171x180"
                src="https://i.pinimg.com/originals/26/7b/d5/267bd5d6b7d943a007570ba0265779ff.jpg"
              />
              <Figure.Caption>
                <h5>
                  <b>Nike Air Jordan 8</b>
                </h5>
              </Figure.Caption>
              <Button variant="dark">Shop Now</Button>{" "}
            </Figure>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <small>
              <b className="footer">@Copyright 2020</b>
            </small>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LandingPage;
