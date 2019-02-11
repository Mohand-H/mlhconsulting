import React, { Component } from "react";
import {
  Carousel, CarouselInner, CarouselItem, Container, MDBRow, Col} from "mdbreact";

class Partenair extends Component {
  render() {
    return (
      <Container>
        <div>
          <Carousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
            <CarouselInner>
              <CarouselItem itemId="1">
                <MDBRow>
                  <Col size="sm">
                    <img className="img-fluid" src="./pictures/AG2R.png" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="/pictures/carrefour.png" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./pictures/bnp.png" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./pictures/sg.png" />
                  </Col>
                </MDBRow>
              </CarouselItem>
              <CarouselItem itemId="2">
                <MDBRow>
                  <Col size="sm">
                    <img className="img-fluid" src="./pictures/malakoff.png" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./pictures/axa.png" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./pictures/mma.png" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./pictures/gmf.png" />
                  </Col>
                </MDBRow>
              </CarouselItem>
              <CarouselItem itemId="3">
                <MDBRow>
                  <Col size="sm">
                    <img className="img-fluid" src="./pictures/ratp.png" />
                  </Col>
                  <Col size="sm">
                    <img className="img-fluid" src="./pictures/fedex.jpeg" />
                  </Col>
                  <Col size="sm">
                    <img className="img-fluid" src="./pictures/CNP.png" />
                  </Col>
                  <Col size="sm" >
                    <img className="img-fluid" src="./pictures/challenge.png" />
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