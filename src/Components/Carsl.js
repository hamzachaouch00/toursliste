import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import video from '../La Tunisie en vidéo.mp4'
import { Card } from 'react-bootstrap';

const Carsl = () => {
  return (
    <div>
    <Card style={{ width: '100rem' }}>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tourmag.com/photo/art/grande/66026726-47000295.jpg?v=1657719882"
          alt="404"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/24/146502.jpg"
          alt="404"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <video src={video} autoPlay loop muted/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Card>
    </div>
  )
}

export default Carsl
