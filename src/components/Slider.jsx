import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const fakedb = 'fakeDB.json'

export default function Slider() {
  const [jsonData, setJsonData] = useState(null)

  /* Fetch local JSON database or return an error */
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(fakedb);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    }
    fetchData();
  }, []);

  /* Return loading message while waiting for JSON data */
  if (jsonData === null) {
    return <div>Loading...</div>;
  }
  /* Render JSON data within the slider */
  return (
    <Container className="sliderContainer">
      <h2>Popular MyTineraries</h2>
      <Carousel variant="dark">
        <Carousel.Item interval={1500}>
          <div className='gridParent'>
            <div className='gridChild1'>
              <img
                className="d-block w-100 h-100"
                src={jsonData.cities[0].img}
                alt={jsonData.cities[0].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[0].name}, {jsonData.cities[0].country}
              </p>
            </div>
            <div className='gridChild2'>
              <img
                className="d-block w-100 h-100"
                src={jsonData.cities[1].img}
                alt={jsonData.cities[1].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[1].name}, {jsonData.cities[1].country}
              </p>
            </div>
            <div className='gridChild3'>
              <img
                className="d-block w-100 h-100"
                src={jsonData.cities[2].img}
                alt={jsonData.cities[2].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[2].name}, {jsonData.cities[2].country}
              </p>
            </div>
            <div className='gridChild4'>
              <img
                className="d-block w-100 h-100"
                src={jsonData.cities[3].img}
                alt={jsonData.cities[3].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[3].name}, {jsonData.cities[3].country}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className='gridParent'>
            <div className='gridChild1'>
              <img
                className="d-block w-100 h-100"
                src={jsonData.cities[4].img}
                alt={jsonData.cities[4].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[4].name}, {jsonData.cities[4].country}
              </p>
            </div>  
            <div className='gridChild2'>
              <img
                className="d-block w-100 h-100"
                src={jsonData.cities[5].img}
                alt={jsonData.cities[5].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[5].name}, {jsonData.cities[5].country}
              </p>
            </div>
            <div className='gridChild3'>
              <img
                className="d-block w-100 h-100"
                src={jsonData.cities[6].img}
                alt={jsonData.cities[6].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[6].name}, {jsonData.cities[3].country}
              </p>
            </div>
            <div className='gridChild4'>
              <img
                className="d-block w-100 h-100"
                src={jsonData.cities[7].img}
                alt={jsonData.cities[7].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[7].name}, {jsonData.cities[7].country}
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div className='gridParent'>
            <div className='gridChild1'>
              <img
                className="d-block w-100 h-100"
                src={jsonData.cities[8].img}
                alt={jsonData.cities[8].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[8].name}, {jsonData.cities[8].country}
              </p>
            </div>  
            <div className='gridChild2'>
            <img
                className="d-block w-100 h-100"
                src={jsonData.cities[9].img}
                alt={jsonData.cities[9].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[9].name}, {jsonData.cities[9].country}
              </p>
            </div>
            <div className='gridChild3'>
            <img
                className="d-block w-100 h-100"
                src={jsonData.cities[10].img}
                alt={jsonData.cities[10].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[10].name}, {jsonData.cities[10].country}
              </p>
            </div>
            <div className='gridChild4'>
            <img
                className="d-block w-100 h-100"
                src={jsonData.cities[11].img}
                alt={jsonData.cities[11].name} width="250" height="250"
              />
              <p className="text-s carouselCaption">
                {jsonData.cities[11].name}, {jsonData.cities[11].country}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}