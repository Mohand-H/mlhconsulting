import React, { Component } from "react";
import {
  Carousel, CarouselInner, CarouselItem, Container, MDBRow, Col
} from "mdbreact";

class Partenair extends Component {
  render() {
    return (
      <Container className='logo'>
        <div>
          <Carousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} >
            <CarouselInner>
              <CarouselItem itemId="1">
                <MDBRow>
                  <Col size="sm">
                    <img className="img-fluid" src="./partnres/carrefour.jpeg" alt="#" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./partnres/credit-agricole.jpg" alt="#" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./partnres/sg.jpg" alt="#" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./partnres/gmf.png" alt="#" />
                  </Col>
                </MDBRow>
              </CarouselItem>
              <CarouselItem itemId="2">
                <MDBRow>
                  <Col size="sm">
                    <img className="img-fluid" src="./partnres/maif.png" alt="#" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./partnres/hsbc.jpg" alt="#" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./partnres/auchan.jpg" alt="#" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./partnres/bollore.jpg" alt="#" />
                  </Col>
                </MDBRow>
              </CarouselItem>
              <CarouselItem itemId="3">
                <MDBRow>
                  <Col size="sm">
                    <img className="img-fluid" src="./partnres/finances-publique.jpg" alt="#" />
                  </Col>
                  <Col size="sm">
                    <img className="img-fluid" src="./partnres/ag2r-la-mondiale.jpg" alt="#" />
                  </Col>
                  <Col size="sm">
                    <img className="img-fluid" src="./partnres/dalkia.jpg" alt="#" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./partnres/BnpParibas.jpg" alt="#" />
                  </Col>
                </MDBRow>
              </CarouselItem>
            </CarouselInner>
          </Carousel>
        </div>
      </Container>
    )
  }
}

export default Partenair