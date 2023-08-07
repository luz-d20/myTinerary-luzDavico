import React from 'react'
import { Container } from 'react-bootstrap'

export default function Hero() {
  return (
    <Container fluid className="hero flex-column">
      <div className="hero-text container">
        <h2 className="text-xxl">Find your <span className="green">perfect trip,</span></h2>
        <h3 className="text-xl mb-45">designed by insiders who know and love their cities.</h3>
        <a className="text-l" href="#">Start Planning!</a>
      </div>
    </Container>
  )
}
